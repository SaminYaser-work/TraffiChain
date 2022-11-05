const { ethers } = require("ethers");

var fs = require("fs");
var jsonFile = "../build/contracts/TicketFactory.json";
var parsed = JSON.parse(fs.readFileSync(jsonFile));
abi = parsed["abi"];

var jsonFile2 = "../build/contracts/Ticket.json";
var parsed2 = JSON.parse(fs.readFileSync(jsonFile2));
abi2 = parsed2["abi"];

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

    const res = await ticketFactoryContract.createNewTicket(
        "0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8",
        [137, 139]
    );

    const res2 = await ticketFactoryContract.createNewTicket(
        "0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8",
        [140]
    );

    // Request hearing
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

    await ticketContractInstance1.requestHearing(
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
