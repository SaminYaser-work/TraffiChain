var driverFactory = artifacts.require("DriverFactory");

module.exports = function (deployer) {
    // deployment steps
    deployer.deploy(driverFactory);
};
