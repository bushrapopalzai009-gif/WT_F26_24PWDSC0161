const registrationForm =
    document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const message =
            document.getElementById("registrationMessage");

        message.textContent =
            "Registration form submitted successfully!";

    });

}


const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        const message =
            document.getElementById("contactMessage");

        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const text =
            document.getElementById("message").value.trim();

        if (name === "" || email === "" || text.length < 10) {

            event.preventDefault();

            message.textContent =
                "Please fill in all fields correctly.";

        }

    });

}