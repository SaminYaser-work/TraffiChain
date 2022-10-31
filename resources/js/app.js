// require("./bootstrap");

// require("ethers");

require("flowbite");

window.ethers = require("ethers");

const driverContractABI = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "NID",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_licenseNo",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "issue_date",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "exp_date",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "changeName",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_score",
                type: "uint16",
            },
        ],
        name: "updateScore",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
