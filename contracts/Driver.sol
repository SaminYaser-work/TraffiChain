// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// TODO: Implement access control

contract Driver {

    string private name;
    uint256 private immutable i_licenseNo;
    uint256 private immutable i_NID;
    uint256 private immutable i_lic_issue_date;
    uint256 private lic_exp_date;
    uint16 private score;

    constructor(
        string memory _name,
        uint256 NID,
        uint256 _licenseNo,
        uint256 issue_date,
        uint256 exp_date
    ) {
        i_NID = NID;
        name = _name;
        i_licenseNo = _licenseNo;
        i_lic_issue_date = issue_date;
        lic_exp_date = exp_date;
    }

    function changeName(string memory _name) external {
        name = _name;
    }

    function updateScore(uint16 _score) external {
        score = _score;
    }

    function updateExpDate(uint256 _lic_exp_date) external {
        lic_exp_date = _lic_exp_date;
    }

    function getName() external view returns(string memory) {
        return name;
    }

    function getNID() external view returns(uint256) {
        return i_NID;
    }

    function getLicNo() external view returns(uint256) {
        return i_licenseNo;
    }

    function getLicIssueDate() external view returns(uint256) {
        return i_lic_issue_date;
    }

    function getLicExpDate() external view returns(uint256) {
        return lic_exp_date;
    }

    function getScore() external view returns(uint16) {
        return score;
    }

    function getAllInfo() external view returns(
        string memory,
        uint256,
        uint256,
        uint256,
        uint256,
        uint16
    ) {
        return (
            name,
            i_NID,
            i_licenseNo,
            i_lic_issue_date,
            lic_exp_date,
            score
        );
    }
}
