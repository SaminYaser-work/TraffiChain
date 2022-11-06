const { ethers } = require("ethers");

var fs = require("fs");
var jsonFile = "../build/contracts/VehicleFactory.json";
var parsed = JSON.parse(fs.readFileSync(jsonFile));
abi = parsed["abi"];

const {
    deployedPoliceFactoryContractAddress,
} = require("../resources/js/policeFactoryAddress.js");

const ganacheRPCUrl = "http://127.0.0.1:7545";
const systemProvider = new ethers.providers.JsonRpcProvider(ganacheRPCUrl);
var signer = systemProvider.getSigner(0); // Driver 1

var vehicleFactory = artifacts.require("VehicleFactory");

module.exports = async function (deployer) {
    await deployer.deploy(vehicleFactory);

    const instance = await vehicleFactory.deployed();

    const vehicleFactoryContract = new ethers.Contract(
        instance.address,
        abi,
        signer
    );

    const vehicleFactoryContract2 = new ethers.Contract(
        instance.address,
        abi,
        systemProvider.getSigner(19) // System
    );

    await vehicleFactoryContract.createNewVehicle(
        "Toyota Supra 1998",
        5959595959,
        0,
        1,
        4444444444
    );

    await vehicleFactoryContract2.changeStatus(4444444444, 0);

    await vehicleFactoryContract.createNewVehicle(
        "Lamborghini Aventador 2019",
        7005442245,
        0,
        1,
        3333333333
    );

    await vehicleFactoryContract2.changeStatus(3333333333, 1);

    // console.log(res, res2);

    content = `const deployedVehicleFactoryContractAddress = "${instance.address}"; module.exports = { deployedVehicleFactoryContractAddress};`;

    console.log(content);

    fs.writeFileSync(
        "resources/js/vehicleFactoryAddress.js",
        content,
        { flag: "w" },
        (err) => {
            if (err) {
                console.log("Failed to save vehicle address to js file");
                console.error(err);
            } else {
                console.log("Vehicle address saved to js file");
            }
        }
    );
};
