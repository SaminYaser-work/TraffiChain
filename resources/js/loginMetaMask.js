const ethers = require("ethers");

const sel = document.getElementById("accType");
const btn = document.getElementById("loginBtn");
const walletAddress = document.getElementById("walletAddress");
const walletAddInput = document.getElementById("walletAddInput");
const loginBtn = document.getElementById("lBtn");

btn.style.display = "none";
walletAddInput.style.display = "none";
loginBtn.style.display = "none";
window.signer = null;

sel.addEventListener("change", function () {
    if (sel.value != "...") {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", async function () {
    console.log("clicked");

    if (signer == null) {
        btn.innerHTML = "Connecting...";

        const provider = new ethers.providers.Web3Provider(
            window.ethereum,
            "any"
        );
        // Prompt user for account connections

        try {
            await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            const address = await signer.getAddress();
            btn.style.display = "none";
            walletAddress.value = address;
            walletAddInput.style.display = "block";
            loginBtn.style.display = "block";
        } catch {
            btn.innerHTML = "Connect with MetaMask";
            alert("Failed to connect to wallet");
        }
    } else {
        console.log("Already connected", signer);
    }
});
