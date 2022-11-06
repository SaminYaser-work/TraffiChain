const { ethers } = require("ethers");

var fs = require("fs");
var jsonFile = "../build/contracts/DriverFactory.json";

var parsed = JSON.parse(fs.readFileSync(jsonFile));

abi = parsed["abi"];

const ganacheRPCUrl = "http://127.0.0.1:7545";
const systemProvider = new ethers.providers.JsonRpcProvider(ganacheRPCUrl);
var signer = systemProvider.getSigner(19);

var driverFactory = artifacts.require("DriverFactory");

module.exports = async function (deployer) {
    await deployer.deploy(driverFactory);

    const instance = await driverFactory.deployed();

    const driverFactoryContract = new ethers.Contract(
        instance.address,
        abi,
        signer
    );

    const res = await driverFactoryContract.createNewDriverProfile(
        "0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8",
        "Samin",
        1111111111,
        1111111111111111,
        1635444000,
        1666980000
    );

    console.log(res);

    content = `const deployedDriverFactoryContractAddress = "${instance.address}"; export {deployedDriverFactoryContractAddress};`;
    console.log(content);

    fs.writeFileSync(
        "resources/js/driverFactoryAddress.js",
        content,
        { flag: "w" },
        (err) => {
            if (err) {
                console.log("Failed to save ticket address to js file");
                console.error(err);
            } else {
                console.log("Ticket address saved to js file");
            }
        }
    );
};
