// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// errors
// error Ticket__inactive();
// error Ticket__NoJudgeAssigned();

// TODO: Implement access control and errors

/// @title Infractions
/// @author Samin Yaser
/// @notice Infraction database
contract Infractions {

    mapping (uint16 => uint256) private infractionToFine;
    mapping (uint16 => string) private infractionToDescription;

    function addInfraction(uint16 infraction, uint256 fine, string memory description) external {
        infractionToFine[infraction] = fine;
        infractionToDescription[infraction] = description;
    }

    function getInfractionFine(uint16 infraction) external view returns(uint256) {
        return infractionToFine[infraction];
    }

    function getInfractionDescription(uint16 infraction) external view returns(string memory) {
        return infractionToDescription[infraction];
    }

    function calculateTotalFine(uint16[] memory infractionList) external view returns(uint256) {
        uint256 totalFine = 0;
        uint256 len = infractionList.length;
        for (uint256 i = 0; i < len; i++) {
            totalFine += infractionToFine[infractionList[i]];
        }
        return totalFine;
    }
}
