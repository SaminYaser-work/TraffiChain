const ethers = require("ethers");

const regMMBtn = document.getElementById("regMMBtn");
const regMMInput = document.getElementById("regMMInput");

let signer = null;

regMMBtn.addEventListener("click", async function () {
    console.log("clicked");

    if (signer == null) {
        const provider = new ethers.providers.Web3Provider(
            window.ethereum,
            "any"
        );

        try {
            await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            const address = await signer.getAddress();
            regMMInput.value = address;
        } catch {
            alert("Failed to connect to wallet");
        }
    } else {
        console.log("Already connected", signer);
    }
});
