// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// TODO: Implement access control

// errors
// error Ticket__inactive();
// error Ticket__NoJudgeAssigned();


/// @title Judge
/// @author Samin Yaser
/// @notice Profile of a judge
contract Judge {

    string private name;

    constructor(string memory name_) {
        name = name_;
    }

}
