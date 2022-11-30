// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/AccessControl.sol";


// errors
error Ticket__inactive();
error Ticket__NoJudgeAssigned();


/// @title Ticket
/// @author Samin Yaser
/// @notice You can use this contract to issue a traffic ticket
contract Ticket is AccessControl {

    // Events
    event StatusChanged(address ticket_address, Status status);

    // Pending: Ticket is issued and driver can pay the fine
    // Late: Driver has been late with the payment
    // Paid: Driver has paid the fine and ticket is closed
    // Cancelled: Ticket is cancelled by the police due to some reason
    // disputing: Ticket is being disputed in the court by the request of the driver
    // dismissed: Ticket is dismissed by the court in favor of the driver
    // unresolvable: ???
    // Convicted: Driver is convicted by the court and has to pay the fine
    enum Status {
        pending,
        late,
        paid,
        cancelled,
        disputing,
        dismissed,
        unresolvable,
        convicted
    }

    // Roles
    bytes32 private constant DRIVER_ROLE = keccak256("DRIVER_ROLE");
    bytes32 private constant OFFICER_ROLE = keccak256("OFFICER_ROLE");
    bytes32 private constant JUDGE_ROLE = keccak256("JUDGE_ROLE");
    bytes32 private constant CANCEL_TICKET_ROLE = keccak256("CANCEL_TICKET_ROLE");

    // Attributes
    address private immutable driver;
    address private immutable officer;
    address private judge;
    uint16[] private penalty_clasues;
    uint256 private lastTimeStamp;
    uint256 private interval = 30 days;
    uint256 private strikes = 0;
    Status private status;
    bool private isActive = true; // ticket is active or not

    modifier checkActive{
        require(isActive);
        _;
    }

    constructor(
        address driver_,
        uint16[] memory penalty_clasues_
        )
    {

        driver = driver_;
        officer = msg.sender;
        judge = address(0);
        penalty_clasues = penalty_clasues_;

        lastTimeStamp = block.timestamp;

        status = Status.pending;

        _setupRole(DRIVER_ROLE, driver_);
        _setupRole(OFFICER_ROLE, msg.sender);
        _setupRole(CANCEL_TICKET_ROLE, msg.sender);
    }

    function addCharge(uint16 charge) internal {
        penalty_clasues.push(charge);
    }

    /// @notice Owner can request a hearing in court
    /// @dev must provide wallet address of the judge
    function requestHearing(address judge_) public checkActive onlyRole(DRIVER_ROLE) {
        require(isPayable());

        judge = judge_;
        _grantRole(JUDGE_ROLE, judge_);

        _revokeRole(CANCEL_TICKET_ROLE, officer); // officer can't cancel the ticket anymore
        status = Status.disputing;

        emit StatusChanged(address(this), status);
    }

    function checkStatus() public view returns(string memory) {

        // return uint256(status);
        // Ugly but gas efficient
        if (status == Status.pending) return "Pending";
        if (status == Status.late) return "Late";
        if (status == Status.dismissed) return "Dismissed";
        if (status == Status.disputing) return "Disputing";
        if (status == Status.paid) return "Paid";
        if (status == Status.cancelled) return "Cancelled";
        if (status == Status.unresolvable) return "Unresolvalble";
        if (status == Status.convicted) return "Convicted";
        return "Error";
    }

    /// @dev set interval in days
    function setInterval(uint256 interval_) internal {
        interval = interval_;
    }

    /// @notice Resolves the ticket for good.
    function resolveTicket(Status status_) external checkActive {
        status = status_;
        isActive = false;

        // Revoke all roles
        _revokeRole(CANCEL_TICKET_ROLE, officer);
        _revokeRole(DRIVER_ROLE, driver);
        _revokeRole(OFFICER_ROLE, officer);
        _revokeRole(CANCEL_TICKET_ROLE, officer);
        if(judge != address(0)) {
            _revokeRole(JUDGE_ROLE, judge);
        }

        emit StatusChanged(address(this), status);
    }

    /// @notice update the state of the ticket for demo
    function updateStatusDemo() public {
        interval = 0;

        status = Status.late;
        addCharge(130);
        strikes++;
        interval = 30 days;

        // if (strikes == 3) {
        //     status = Status.unresolvable;
        //     isActive = false;
        // } else if (getRemainingTime() <= 0) {
        //     status = Status.late;
        //     addCharge(100);
        //     strikes++;
        //     interval = interval * 2;
        // }
    }


    function isPayable() public view returns(bool) {
        if (status == Status.pending || status == Status.late) {
            return (block.timestamp - lastTimeStamp) < interval ? true : false;
        }
        return false;
    }

    function isTicketActive() external view returns(bool) {
        return isActive;
    }

    function getDriverAddress() external view returns(address) {
        return driver;
    }

    function getOfficerAddress() external view returns(address) {
        return officer;
    }

    function getJudgeAddress() external view returns(address) {
        if(judge == address(0)) {
            revert Ticket__NoJudgeAssigned();
        }
        return judge;
    }

    function getCharges() external view returns(uint16[] memory) {
        return penalty_clasues;
    }

    function getTicketInfo() external view returns(
        address,
        address,
        address,
        uint16[] memory,
        uint256,
        string memory
    ) {
        return (
            driver,
            officer,
            judge,
            penalty_clasues,
            getRemainingTime(),
            checkStatus()
        );
    }


    function getRemainingTime() internal view returns(uint256) {
        if(!isActive) {
            // revert Ticket__inactive();
            return 0;
        }

        return (lastTimeStamp + interval) - block.timestamp;
    }
}
