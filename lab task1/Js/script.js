document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const expdate = document.getElementById("expdate").value;
    const phone = document.getElementById("phone").value;

    if (fullname === "" || email === "" || password === "" || age === "" || expdate === "" || phone === "") {
        alert("Please fill in all fields!");
        return;
    }

    document.getElementById("result").innerHTML = `
        <h3>Submitted Details:</h3>
        <p><b>Full Name:</b> ${fullname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Experiment Date:</b> ${expdate}</p>
        <p><b>Phone:</b> ${phone}</p>
    `;
});