// require("./bootstrap");

// require("ethers");

require("flowbite");

window.ethers = require("ethers");

const { ethers } = require("ethers");
const {
    driverContractABI,
    driverContractByteCode,
    driverContractFactoryABI,
} = require("./contractInfo.js");

const ganacheRPCUrl = "http://127.0.0.1:7545";
const systemProvider = new ethers.providers.JsonRpcProvider(ganacheRPCUrl);
window.systemSigner = systemProvider.getSigner(19);
const systemWalletAddress = "0x2702fA187b43A791BF7E208ed6C12e7301A36d8E";
const deployedDriverFactoryContractAddress =
    "0xDDa0E17c813b864200fb7077eb7BfB46B1B7b6f4";

window.driverContractFactory = new ethers.Contract(
    deployedDriverFactoryContractAddress,
    driverContractFactoryABI,
    systemSigner
);

// window.driverContract = new ethers.Contract(
//     systemWalletAddress,
//     driverContractABI,
//     systemSigner
// );
