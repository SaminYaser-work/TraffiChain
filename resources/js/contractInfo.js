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
    {
        inputs: [],
        name: "getName",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

const driverContractFactoryABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "driverWallet",
                type: "address",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "nid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "licenseNo",
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
        name: "createNewDriverProfile",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "driverWallet",
                type: "address",
            },
        ],
        name: "getDriverProfile",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
    },
    {
        inputs: [],
        name: "getAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
    },
];

const ticketFactoryContractABI = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "tickets",
        outputs: [
            {
                internalType: "contract Ticket",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

export {
    driverContractABI,
    driverContractFactoryABI,
    ticketFactoryContractABI,
};
