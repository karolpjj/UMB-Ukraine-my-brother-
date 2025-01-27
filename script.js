let walletAddress = null;
const currentStagePrice = 0.000001;

document.getElementById("tokenAmount").addEventListener("input", function () {
    const amount = parseFloat(this.value) || 0;
    document.getElementById("totalPrice").innerText = (amount * currentStagePrice).toFixed(8);
});

async function connectWallet() {
    if (window.solana) {
        try {
            const response = await window.solana.connect();
            walletAddress = response.publicKey.toString();
            document.getElementById("walletAddress").innerText = `Підключено: ${walletAddress}`;
        } catch (error) {
            console.error("Помилка підключення: ", error);
        }
    } else {
        alert("Будь ласка, встановіть гаманець Phantom або Solflare.");
    }
}

async function purchaseTokens() {
    const tokenAmount = document.getElementById("tokenAmount").value;
    if (!walletAddress) {
        alert("Будь ласка, підключіть гаманець.");
        return;
    }
    if (tokenAmount <= 0) {
        alert("Введіть коректну кількість токенів.");
        return;
    }

    alert(`Ви успішно придбали ${tokenAmount} токенів UMB.`);
}

function scrollToPresale() {
    document.getElementById("presale").scrollIntoView({ behavior: "smooth" });
}
