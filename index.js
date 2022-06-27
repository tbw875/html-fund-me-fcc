async function connect() {
    if (typeof window.ethereum !== "undefined") {
        window.ethereum.request({ method: "eth_requestAccounts" });
        document.getElementById("connectButton").innerHTML = "Connected";
        console.log("Metamask connected!");
    } else {
        document.getElementById("connectButton").innerHTML =
            "Please install Metamask";
    }
}

async function fund(ethAmount) {
    console.log(`Funding with ${ethAmount}`);
}
