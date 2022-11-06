// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// TODO: Implement access control

// errors
// error Ticket__inactive();
// error Ticket__NoJudgeAssigned();


/// @title Police
/// @author Samin Yaser
/// @notice Profile of a police officer
contract Police {

    string private name;
    string private station;
    string private rank;
    uint256 private badgeNumber;
    uint16 private score;

    constructor(
        string memory name_,
        string memory station_,
        string memory rank_,
        uint256 badgeNumber_
    ) {
        name = name_;
        station = station_;
        rank = rank_;
        badgeNumber = badgeNumber_;
    }

    function updateScore(uint16 score_) external {
        score = score_;
    }

    function changeName(string memory name_) external {
        name = name_;
    }

    function changeStation(string memory station_) external {
        station = station_;
    }

    function changeRank(string memory rank_) external {
        rank = rank_;
    }

    function changeBadgeNumber(uint256 badgeNumber_) external {
        badgeNumber = badgeNumber_;
    }

    function getName() external view returns(string memory) {
        return name;
    }

    function getStation() external view returns(string memory) {
        return station;
    }

    function getRank() external view returns(string memory) {
        return rank;
    }

    function getBadgeNumber() external view returns(uint256) {
        return badgeNumber;
    }

    function getScore() external view returns(uint16) {
        return score;
    }

}
