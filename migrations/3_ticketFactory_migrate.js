const { ethers } = require("ethers");

var fs = require("fs");
var jsonFile = "../build/contracts/TicketFactory.json";

var parsed = JSON.parse(fs.readFileSync(jsonFile));

abi = parsed["abi"];

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
