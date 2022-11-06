// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./Judge.sol";
import "./Ticket.sol";

contract JudgeFactory {

    mapping (address => address) private judgeWalletToProfile;
    mapping (address => address[]) private JudgeToTickets;
    address[] private roundRobin;
    uint256 private nextIndex;

    constructor() {
        nextIndex = 0;
    }

    function createNewJudge(
        string memory name,
        address _address
    ) external
    {
        Judge judge = new Judge(name);

        judgeWalletToProfile[_address] = address(judge);

        roundRobin.push(_address);
    }

    function getNextJudge() external view returns(address) {
        return roundRobin[nextIndex];
    }

    function assignJudgeToTicket(
        address ticket,
        address judge
    ) external
    {

        // TODO: Can be optimized with revert
        require(judgeWalletToProfile[judge] != address(0), "JudgeFactory: Judge does not exist");

        JudgeToTickets[judge].push(ticket);

        if(nextIndex == roundRobin.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex++;
        }
    }

    function isValidJudge(address judge) external view returns(bool) {
        return judgeWalletToProfile[judge] != address(0);
    }

    function removeJudgeFromTicket(
        address judge,
        address ticket
    ) external
    {
        uint256 judgeTicketLength = JudgeToTickets[judge].length;

        for (uint256 i = 0; i < judgeTicketLength; i++) {
            if (JudgeToTickets[judge][i] == ticket) {
                JudgeToTickets[judge][i] = JudgeToTickets[judge][judgeTicketLength - 1];
                JudgeToTickets[judge].pop();
                break;
            }
        }
    }

    function getJudgeProfile(address judgeWallet) external view returns(address) {
        return judgeWalletToProfile[judgeWallet];
    }

    function getJudgeTickets(address judgeWallet) external view returns(address[] memory) {
        return JudgeToTickets[judgeWallet];
    }

    function getAllTickets(address judge) external view returns(address[] memory) {
        return JudgeToTickets[judge];
    }

    function getActiveTickets(address judgeWallet) external view returns(address[] memory) {
        address[] memory tickets = JudgeToTickets[judgeWallet];

        uint256 activeTicketsLength = 0;

        for (uint256 i = 0; i < tickets.length; i++) {
            if (Ticket(tickets[i]).isTicketActive()) {
                activeTicketsLength++;
            }
        }

        address[] memory activeTickets = new address[](activeTicketsLength);

        for (uint256 i = 0; i < tickets.length; i++) {
            if (Ticket(tickets[i]).isTicketActive()) {
                activeTickets[i] = tickets[i];
            }
        }

        return activeTickets;
    }

}
