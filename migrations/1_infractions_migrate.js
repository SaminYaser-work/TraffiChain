const { ethers } = require("ethers");

var fs = require("fs");
var jsonFile = "../build/contracts/Infractions.json";

var parsed = JSON.parse(fs.readFileSync(jsonFile));

abi = parsed["abi"];

const ganacheRPCUrl = "http://127.0.0.1:7545";
const systemProvider = new ethers.providers.JsonRpcProvider(ganacheRPCUrl);
var signer = systemProvider.getSigner(
    "0x2702fA187b43A791BF7E208ed6C12e7301A36d8E"
);

var infractions = artifacts.require("Infractions");

module.exports = async function (deployer) {
    await deployer.deploy(infractions);

    const instance = await infractions.deployed();

    const InfractionsContract = new ethers.Contract(
        instance.address,
        abi,
        signer
    );

    // TODO: Add more infractions from here https://dmp.gov.bd/penalties-under-motor-vehicle-ordinance/
    await InfractionsContract.addInfraction(
        137,
        200,
        "অপরাধের শাস্তি প্রদানের সাধারণ বিধান"
    );
    await InfractionsContract.addInfraction(
        139,
        100,
        "নিষিদ্ধ হর্ণ কিংবা শব্দ উৎপাদনকারী যন্ত্র লাগানো ও ব্যবহার"
    );
    await InfractionsContract.addInfraction(
        140,
        400,
        "আদেশ অমান্য, বাঁধা সৃষ্টি ও তথ্য প্রদানে অস্বীকৃতি"
    );
    await InfractionsContract.addInfraction(130, 1000, "Late Fees");

    content = `const deployedInfractionsContractAddress = "${instance.address}"; export {deployedInfractionsContractAddress};`;
    console.log(content);

    fs.writeFileSync(
        "resources/js/InfractionsAddress.js",
        content,
        { flag: "w" },
        (err) => {
            if (err) {
                console.log("Failed to save infractions address to js file");
                console.error(err);
            } else {
                console.log("infractions address saved to js file");
            }
        }
    );
};
