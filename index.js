const submitBtn = document.getElementById("submitBtn");
const resultCont = document.getElementById("resultCont");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("username").value.trim();

    // Simple email validation
    if (!emailInput || !/^\S+@\S+\.\S+$/.test(emailInput)) {
        resultCont.innerHTML = `<div style="color: red;">Please enter a valid email address.</div>`;
        return;
    }

    resultCont.innerHTML = `<img width="123" src="loading.svg" alt="Loading...">`;

    const apiKey = "ema_live_ITkV5Pqq40WNdMLdjqMZlNcb4AEBrNvWiSFd1MYE";
    const url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${emailInput}`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const result = await res.json();

        let output = "";
        for (const [key, value] of Object.entries(result)) {
            if (value !== "" && value !== " ") {
                output += `<div><strong>${key}:</strong> ${value}</div>`;
            }
        }

        resultCont.innerHTML = output || `<div>No additional information available.</div>`;
    } catch (error) {
        resultCont.innerHTML = `<div style="color: red;">An error occurred: ${error.message}</div>`;
    }
});
