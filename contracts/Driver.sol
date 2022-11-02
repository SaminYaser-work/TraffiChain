// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Driver {

    string private name;
    uint256 private immutable licenseNo;
    uint256 private immutable i_NID;
    uint256 private immutable i_lic_issue_date;
    uint256 private i_lic_exp_date;
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
        licenseNo = _licenseNo;
        i_lic_issue_date = issue_date;
        i_lic_exp_date = exp_date;
    }

    function changeName(string memory _name) external {
        name = _name;
    }

    function updateScore(uint16 _score) external {
        score = _score;
    }

    function getName() external view returns(string memory) {
        return name;
    }
}
