// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// TODO: Implement access control

import "./Ticket.sol";

contract TicketFactory {

    mapping(address => address[]) private driverToTickets;
    mapping(address => address[]) private officerToTickets;
    address lastAddedTicket;

    function createNewTicket(
        address driver,
        uint16[] memory penalty_clasues
        )
    external
    {
        Ticket ticket = new Ticket(
            driver,
            penalty_clasues
        );

        driverToTickets[driver].push(address(ticket));
        officerToTickets[msg.sender].push(address(ticket));

        lastAddedTicket = address(ticket);
    }

    // Rip gas
    function deleteTicket(
        address driver,
        address officer,
        address ticket
    ) external {
        uint256 driverTicketLength = driverToTickets[driver].length;
        uint256 officerTicketLength = officerToTickets[officer].length;

        for (uint256 i = 0; i < driverTicketLength; i++) {
            if (driverToTickets[driver][i] == ticket) {
                driverToTickets[driver][i] = driverToTickets[driver][driverTicketLength - 1];
                driverToTickets[driver].pop();
                break;
            }
        }

        for (uint256 i = 0; i < officerTicketLength; i++) {
            if (officerToTickets[officer][i] == ticket) {
                officerToTickets[officer][i] = officerToTickets[officer][officerTicketLength - 1];
                officerToTickets[officer].pop();
                break;
            }
        }
    }

    function getDriverTickets(address driver) external view returns(address[] memory) {
        return driverToTickets[driver];
    }

    function getOfficerTickets(address officer) external view returns(address[] memory) {
        return officerToTickets[officer];
    }

    function getLastAddedTicket() external view returns(address) {
        return lastAddedTicket;
    }

    function getActiveTickets(address driver) external view returns(address[] memory) {
        address[] memory tickets = driverToTickets[driver];
        uint256 activeTicketsLength = 0;

        for (uint256 i = 0; i < tickets.length; i++) {
            if (Ticket(tickets[i]).isTicketActive()) {
                activeTicketsLength++;
            }
        }

        address[] memory activeTickets = new address[](activeTicketsLength);
        uint256 j = 0;

        for (uint256 i = 0; i < tickets.length; i++) {
            if (Ticket(tickets[i]).isTicketActive()) {
                activeTickets[j] = tickets[i];
                j++;
            }
        }

        return activeTickets;
    }

    function getAllTickets(address driver) external view returns(address[] memory) {
        return driverToTickets[driver];
    }

    function getAddress() external view returns(address) {
        return address(this);
    }
}
