const { ethers } = require("ethers");

var fs = require("fs");
var jsonFile = "../build/contracts/TicketFactory.json";
var parsed = JSON.parse(fs.readFileSync(jsonFile));
abi = parsed["abi"];

var jsonFile2 = "../build/contracts/Ticket.json";
var parsed2 = JSON.parse(fs.readFileSync(jsonFile2));
abi2 = parsed2["abi"];

var jsonFile3 = "../build/contracts/JudgeFactory.json";
var parsed3 = JSON.parse(fs.readFileSync(jsonFile3));
abi3 = parsed3["abi"];

var jsonFile4 = "../build/contracts/PoliceFactory.json";
var parsed4 = JSON.parse(fs.readFileSync(jsonFile4));
abi4 = parsed4["abi"];

const {
    deployedJudgeFactoryContractAddress,
} = require("../resources/js/judgeFactoryAddress.js");

const {
    deployedPoliceFactoryContractAddress,
} = require("../resources/js/policeFactoryAddress.js");

const ganacheRPCUrl = "http://127.0.0.1:7545";
const systemProvider = new ethers.providers.JsonRpcProvider(ganacheRPCUrl);
var signer = systemProvider.getSigner(2); // Police 1

var ticketFactory = artifacts.require("TicketFactory");

module.exports = async function (deployer) {
    await deployer.deploy(ticketFactory);

    const instance = await ticketFactory.deployed();

    const ticketFactoryContract = new ethers.Contract(
        instance.address,
        abi,
        signer
    );

    const policeFactoryContract = new ethers.Contract(
        deployedPoliceFactoryContractAddress,
        abi4,
        signer
    );

    const res = await ticketFactoryContract.createNewTicket(
        "0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8",
        [137, 139]
    );

    const res2 = await ticketFactoryContract.createNewTicket(
        "0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8",
        [140]
    );

    const res3 = await ticketFactoryContract.createNewTicket(
        "0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8",
        [137]
    );

    const res4 = await ticketFactoryContract.createNewTicket(
        "0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8",
        [139]
    );

    const tickets = await ticketFactoryContract.getAllTickets(
        "0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8"
    );

    // Assign tickets to police
    for (let i = 0; i < tickets.length; i++) {
        await policeFactoryContract.addTicket(tickets[i]);
    }

    // Request hearing
    const ticketContractInstance1 = new ethers.Contract(
        tickets[2],
        abi2,
        systemProvider.getSigner("0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8")
    );

    const ticketContractInstance2 = new ethers.Contract(
        tickets[3],
        abi2,
        systemProvider.getSigner("0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8")
    );

    const judgeContractFactory = new ethers.Contract(
        deployedJudgeFactoryContractAddress,
        abi3,
        signer
    );

    await judgeContractFactory.assignJudgeToTicket(
        tickets[2],
        "0x7296f61f990CbA99c3aeFbC5F38208F857830256"
    );

    await ticketContractInstance1.requestHearing(
        "0x7296f61f990CbA99c3aeFbC5F38208F857830256"
    );

    await judgeContractFactory.assignJudgeToTicket(
        tickets[3],
        "0x7296f61f990CbA99c3aeFbC5F38208F857830256"
    );

    await ticketContractInstance2.requestHearing(
        "0x7296f61f990CbA99c3aeFbC5F38208F857830256"
    );

    // console.log(res, res2);

    content = `const deployedTicketFactoryContractAddress = "${instance.address}"; export { deployedTicketFactoryContractAddress};`;

    console.log(content);

    fs.writeFileSync(
        "resources/js/ticketFactoryAddress.js",
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
