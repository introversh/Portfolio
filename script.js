document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded!");

    var options = {
        strings: ["a Sophomore.", "a Designer.", "a Programmer.", "a Team Leader.", "a Content Writer."],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
    };
    new Typed(".type", options);

    const starryNight = document.querySelector('.starry-night');
    const starCount = 1000;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starryNight.appendChild(star);
    }

    let naam = document.querySelector(".naam");
    let email = document.querySelector(".email");
    let message = document.querySelector(".message");
    let contactbtn = document.querySelector(".contactBtn");
    let dabba = document.querySelector("#contactContainer");
    let home = document.querySelector(".home");


    contactbtn.addEventListener("click", function () {
        dabba.style.display = "flex";
        home.style.display = "none";
    });

 
    document.querySelector("form").addEventListener("submit", async (evt) => {
        evt.preventDefault();
        console.log("Form submit event triggered");

        const naamValue = naam.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value.trim();

        if (!naamValue || !emailValue || !messageValue) {
            console.error("All fields are required!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: naamValue, 
                    email: emailValue,
                    message: messageValue
                })
            });

            const hihi = await response.json();
            console.log("Server Response:", hihi);

            naam.value = "";
            email.value = "";
            message.value = "";
            dabba.style.display = "none";
            home.style.display = "flex";
        } catch (error) {
            console.error("Error sending message:", error);
        }
    });
});
