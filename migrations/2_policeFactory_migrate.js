const { ethers } = require("ethers");

var fs = require("fs");
var jsonFile = "../build/contracts/PoliceFactory.json";

var parsed = JSON.parse(fs.readFileSync(jsonFile));

abi = parsed["abi"];

const ganacheRPCUrl = "http://127.0.0.1:7545";
const systemProvider = new ethers.providers.JsonRpcProvider(ganacheRPCUrl);
var signer = systemProvider.getSigner(19);

var policeFactory = artifacts.require("PoliceFactory");

module.exports = async function (deployer) {
    await deployer.deploy(policeFactory);

    const instance = await policeFactory.deployed();

    const policeFactoryContract = new ethers.Contract(
        instance.address,
        abi,
        signer
    );

    const res = await policeFactoryContract.createNewPolice(
        "0x81a741D43F8A8A0576dcAf254E271C09841D9bbA",
        "RoboCop",
        "Detroit Police Department",
        "Detective",
        99543
    );

    console.log(res);

    content = `const deployedPoliceFactoryContractAddress = "${instance.address}"; module.exports = {deployedPoliceFactoryContractAddress};`;
    console.log(content);

    fs.writeFileSync(
        "resources/js/policeFactoryAddress.js",
        content,
        { flag: "w" },
        (err) => {
            if (err) {
                console.log("Failed to save police address to js file");
                console.error(err);
            } else {
                console.log("Police address saved to js file");
            }
        }
    );
};
