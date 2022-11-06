const { ethers } = require("ethers");

var fs = require("fs");
var jsonFile = "../build/contracts/JudgeFactory.json";

var parsed = JSON.parse(fs.readFileSync(jsonFile));

abi = parsed["abi"];

const ganacheRPCUrl = "http://127.0.0.1:7545";
const systemProvider = new ethers.providers.JsonRpcProvider(ganacheRPCUrl);
var signer = systemProvider.getSigner(19); // System

var judgeFactory = artifacts.require("JudgeFactory");

module.exports = async function (deployer) {
    await deployer.deploy(judgeFactory);

    const instance = await judgeFactory.deployed();

    const judgeFactoryContract = new ethers.Contract(
        instance.address,
        abi,
        signer
    );

    const res = await judgeFactoryContract.createNewJudge(
        "Abu Hanifa",
        "0x7296f61f990CbA99c3aeFbC5F38208F857830256"
    );

    // const res2 = await judgeFactoryContract.createNewJudge(
    //     "Abdur Qader Jilani"
    // );

    // console.log(res, res2);

    content = `const deployedJudgeFactoryContractAddress = "${instance.address}"; module.exports = { deployedJudgeFactoryContractAddress};`;

    console.log(content);

    fs.writeFileSync(
        "resources/js/judgeFactoryAddress.js",
        content,
        { flag: "w" },
        (err) => {
            if (err) {
                console.log("Failed to save judge address to js file");
                console.error(err);
            } else {
                console.log("Judge address saved to js file");
            }
        }
    );
};
