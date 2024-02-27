//submitform.js
console.log("We are here 0")
let contactForm = document.getElementById("contactfrm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("We are here 1")

    var templateParams = {
        from_name: document.getElementById("from_name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value
    };

    console.log("We are here 2")

    if (templateParams.from_name == "" || templateParams.email == "" || templateParams.number == "" || templateParams.message == "") {
        console.log("We are here 3")
        alert("Ensure you input a value in both fields!");
    } else {
        // perform operation with form input
        console.log("We are here 4")
        emailjs
        .send("default_service", "template_f87k90h", templateParams)
        .then((res) => {
            document.getElementById("from_name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Beskeden er blevet sendt til BSI Haandbold!");
        })
        .catch((err) => {
            console.log(err);
            alert("Der skete en fejl... Prøv igen senere");S
        });

        templateParams.from_name = "";
        templateParams.email = "";
        templateParams.number = "";
        templateParams.message = "";

        console.log("We are here 5 - DONE")
    }
});