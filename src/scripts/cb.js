function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

let i = 0;
let txt = "";
document
    .getElementById("prompt-form")
    .addEventListener("submit", async function (event) {
        event.preventDefault();
        const prompt = document.getElementById("promptcb");
        console.log(prompt.value);
        const response = document.getElementById("response");
        try {
            console.log(JSON.stringify({ data: prompt.value }));
            const res = await fetch(
                "https://e226-2401-4900-67b3-6cfd-d0e4-278d-d137-fe4c.ngrok-free.app/prompt",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ data: prompt.value }),
                },
            );
            const data = await res.json();
            txt = data.response;
            for (let i = 0; i < txt.length; i++) {
                response.textContent += txt.charAt(i);
                await sleep(20);
            }
        } catch (error) {
            txt = "An error occurred. Please try again.";
            for (let i = 0; i < txt.length; i++) {
                response.textContent += txt.charAt(i);
                await sleep(20);
            }
        }
    });
