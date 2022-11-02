// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./Driver.sol";

contract DriverFactory {

    mapping(address => address) private driverWalletToProfile;

    function createNewDriverProfile(
        address driverWallet,
        string memory name,
        uint256 nid,
        uint256 licenseNo,
        uint256 issue_date,
        uint256 exp_date
    ) external
    {
        Driver driver = new Driver(
            name,
            nid,
            licenseNo,
            issue_date,
            exp_date
        );

        driverWalletToProfile[driverWallet] = address(driver);
    }

    function getDriverProfile(address driverWallet) external view returns(address) {
        return driverWalletToProfile[driverWallet];
    }

    function getAddress() external view returns(address) {
        return address(this);
    }
}
