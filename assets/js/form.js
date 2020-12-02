let form = document.getElementById("project-form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); //stop form from submitting
  let inputs = form.getElementsByTagName("input");
  let checkBoxes = [];
  for (let i = 0; i < 4; i++) {
    if (inputs[i].checked) {
      checkBoxes = [...checkBoxes, inputs[i].value];
    }
  }
  let firstName = inputs[4].value;
  let lastName = inputs[5].value;
  let companyName = inputs[6].value;
  let webAddress = inputs[7].value;
  let email = inputs[8].value;
  let phoneNumber = inputs[9].value;
  let budget = `${inputs[10].value}000`;
  let message = form.getElementsByTagName("textarea")[0].value;
  let contactMessage = {
    services: checkBoxes,
    first_name: firstName,
    last_name: lastName,
    company: companyName,
    email,
    phone_number: phoneNumber,
    message,
    price: budget,
  };

  //POST request with body in JSON format
  fetch("http://lcstudio-db.herokuapp.com/api/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactMessage),
  })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
      console.log("Success:", data);
    })
    //Then with the error genereted...
    .catch((error) => {
      console.error("Error:", error);
    });
});
