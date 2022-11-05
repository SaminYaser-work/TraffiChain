// require("./bootstrap");

// require("ethers");

require("flowbite");

window.ethers = require("ethers");

const { ethers } = require("ethers");

const DriverFactoryContract = require("../../build/contracts/DriverFactory.json");
const DriverContract = require("../../build/contracts/Driver.json");
const TicketFactoryContract = require("../../build/contracts/TicketFactory.json");
const TicketContract = require("../../build/contracts/Ticket.json");
const InfractionsContract = require("../../build/contracts/Infractions.json");
const JudgeFactoryContract = require("../../build/contracts/JudgeFactory.json");
const JudgeContract = require("../../build/contracts/Judge.json");

window.driverContractFactoryABI = DriverFactoryContract.abi;
window.driverContractABI = DriverContract.abi;
window.ticketFactoryContractABI = TicketFactoryContract.abi;
window.ticketContractABI = TicketContract.abi;
window.infractionContractABI = InfractionsContract.abi;
window.judgeFactoryContractABI = JudgeFactoryContract.abi;
window.judgeContractABI = JudgeContract.abi;

// console.log(window.ticketFactoryContractABI);

const ganacheRPCUrl = "http://127.0.0.1:7545";
const systemProvider = new ethers.providers.JsonRpcProvider(ganacheRPCUrl);
window.systemSigner = systemProvider.getSigner(19);
const systemWalletAddress = "0x2702fA187b43A791BF7E208ed6C12e7301A36d8E";

const {
    deployedDriverFactoryContractAddress,
} = require("./driverFactoryAddress.js");
const {
    deployedTicketFactoryContractAddress,
} = require("./ticketFactoryAddress.js");

const {
    deployedInfractionsContractAddress,
} = require("./InfractionsAddress.js");

const {
    deployedJudgeFactoryContractAddress,
} = require("./judgeFactoryAddress.js");

const getSigner = (address = systemWalletAddress) => {
    const ganacheRPCUrl = "http://127.0.0.1:7545";
    const provider = new ethers.providers.JsonRpcProvider(ganacheRPCUrl);
    signer = provider.getSigner(address);

    return signer;
};

window.driverContractFactory = new ethers.Contract(
    deployedDriverFactoryContractAddress,
    window.driverContractFactoryABI,
    window.systemSigner
);

window.ticketContractFactory = new ethers.Contract(
    deployedTicketFactoryContractAddress,
    window.ticketFactoryContractABI,
    window.systemSigner
);

window.judgeContractFactory = new ethers.Contract(
    deployedJudgeFactoryContractAddress,
    window.judgeFactoryContractABI,
    window.systemSigner
);

window.infractionContract = new ethers.Contract(
    deployedInfractionsContractAddress,
    window.infractionContractABI,
    window.systemSigner
);

// testing
(async () => {
    // const res = await window.infractionContract.getInfractionFine(140);
    // console.log(res.toString());
    // const res2 = await window.infractionContract.getInfractionDescription(140);
    // console.log(res2);
    // const res3 = await window.infractionContract.calculateTotalFine([137, 139]);
    // console.log(res3.toString());
    // const res = await window.judgeContractFactory.getJudgeProfile(
    //     "0x7296f61f990CbA99c3aeFbC5F38208F857830256"
    // );
    // console.log(res);
})();

window.DriverContractInstance = (contractAddress, signerAddress) => {
    return new ethers.Contract(
        contractAddress,
        window.driverContractABI,
        getSigner(signerAddress)
    );
};

window.TicketContractInstance = (contractAddress, signerAddress) => {
    return new ethers.Contract(
        contractAddress,
        window.ticketContractABI,
        getSigner(signerAddress)
    );
};

window.JudgeContractInstance = (contractAddress, signerAddress) => {
    return new ethers.Contract(
        contractAddress,
        window.judgeContractABI,
        getSigner(signerAddress)
    );
};
