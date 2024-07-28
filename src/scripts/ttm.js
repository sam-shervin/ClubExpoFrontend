document
    .getElementById("music-form")
    .addEventListener("submit", async function (event) {
        event.preventDefault();

        const prompt = document.getElementById("prompt").value;
        const duration = document.getElementById("duration").value;

        const response = await fetch("https://4b57-106-222-222-208.ngrok-free.app/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt, duration }),
        });

        if (response.ok) {
            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);

            const audioPlayer = document.getElementById("music-player");
            audioPlayer.style.display = "block";
            audioPlayer.src = audioUrl;
            audioPlayer.play();
        } else {
            alert("Error generating music");
        }
    });
