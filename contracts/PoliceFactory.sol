// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./Ticket.sol";
import "./Police.sol";

contract PoliceFactory {

    mapping (address => address) private policeToProfile;
    mapping (address => address[]) private PoliceToTickets;

    function createNewPolice(
        address _address,
        string memory name_,
        string memory station_,
        string memory rank_,
        uint256 badgeNumber_
    ) external
    {
        Police police = new Police(name_, station_, rank_, badgeNumber_);

        policeToProfile[_address] = address(police);
    }

    function addTicket(
        address ticket
    ) external
    {
        PoliceToTickets[msg.sender].push(ticket);
    }


    // function isValidJudge(address judge) external view returns(bool) {
    //     return judgeWalletToProfile[judge] != address(0);
    // }

    function getPoliceProfile(address police) external view returns(address) {
        return policeToProfile[police];
    }

    function getAllTickets(address police) external view returns(address[] memory) {
        return PoliceToTickets[police];
    }

    function getActiveTickets(address police) external view returns(address[] memory) {
        address[] memory tickets = PoliceToTickets[police];

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
