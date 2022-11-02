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

    enum Status {
        pending,
        paid,
        cancelled,
        disputing,
        dismissed,
        unresolvable
    }

    // Roles
    bytes32 private constant DRIVER_ROLE = keccak256("DRIVER_ROLE");
    bytes32 private constant OFFICER_ROLE = keccak256("OFFICER_ROLE");
    bytes32 private constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 private constant JUDGE_ROLE = keccak256("JUDGE_ROLE");
    bytes32 private constant CANCEL_TICKET_ROLE = keccak256("CANCEL_TICKET_ROLE");

    // Attributes
    address private immutable owner;
    address private immutable driver;
    address private immutable officer;
    address private judge;
    uint16[] private penalty_clasues;
    uint256 private lastTimeStamp;
    uint256 private constant interval = 30 days;
    Status private status;
    bool private isActive = true;

    modifier checkActive{
        require(isActive);
        _;
    }

    constructor(
        address owner_,
        address driver_,
        uint16[] memory penalty_clasues_
        )
    {

        owner = owner_;
        driver = driver_;
        officer = msg.sender;
        judge = address(0);
        penalty_clasues = penalty_clasues_;

        lastTimeStamp = block.timestamp;

        status = Status.pending;

        _setupRole(OWNER_ROLE, owner_);
        _setupRole(DRIVER_ROLE, driver_);
        _setupRole(OFFICER_ROLE, msg.sender);
        _setupRole(CANCEL_TICKET_ROLE, msg.sender);
    }

    /// @notice Owner can request a hearing in court
    /// @dev must provide wallet address of the judge
    function requestHearing(address judge_) public checkActive onlyRole(OWNER_ROLE) {
        require(isPayable());

        judge = judge_;
        _grantRole(JUDGE_ROLE, judge_);

        _revokeRole(CANCEL_TICKET_ROLE, officer);
        status = Status.disputing;

        emit StatusChanged(address(this), status);
    }

    function checkStatus() external view returns(uint256) {

        return uint256(status);
        // // Ugly but gas efficient
        // if (status == Status.pending) return "Pending";
        // if (status == Status.dismissed) return "Dismissed";
        // if (status == Status.disputing) return "Disputing";
        // if (status == Status.paid) return "Paid";
        // if (status == Status.cancelled) return "Cancelled";
        // if (status == Status.unresolvable) return "Unresolvalble";
        // return "Error";
    }

    /// @notice Resolves the ticket for good.
    function resolveTicket(Status status_) external checkActive {
        status = status_;
        isActive = false;

        // Revoke all roles
        _revokeRole(CANCEL_TICKET_ROLE, officer);
        _revokeRole(DRIVER_ROLE, driver);
        _revokeRole(OWNER_ROLE, owner);
        _revokeRole(OFFICER_ROLE, officer);
        _revokeRole(CANCEL_TICKET_ROLE, officer);
        if(judge != address(0)) {
            _revokeRole(JUDGE_ROLE, judge);
        }

        emit StatusChanged(address(this), status);
    }

    function isPayable() public view returns(bool) {
        if (status == Status.pending) {
            return (block.timestamp - lastTimeStamp) < interval ? true : false;
        }
        return false;
    }

    function getOwnerAddress() external view returns(address) {
        return owner;
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

    function getRemainingTime() external view returns(uint256) {
        if(!isActive) {
            revert Ticket__inactive();
        }

        return (lastTimeStamp + interval) - block.timestamp;
    }
}
