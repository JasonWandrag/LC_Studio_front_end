let closeMenu = () => {
  document.getElementById("toggler").checked = false;
  toggleProjectModalButton();
};
let toggleSubMenu = (subMenuIndex) => {
  let subMenus = document.getElementsByClassName("sub-menu");
  let activeSubMenu = subMenus[subMenuIndex];
  fullpage_api.moveTo(subMenuIndex + 3);
  for (let i = 0; i < subMenus.length; i++) {
    if (subMenus[i] !== activeSubMenu) {
      subMenus[i].classList.remove("active");
    } else {
      activeSubMenu.classList.contains("active")
        ? activeSubMenu.classList.remove("active")
        : activeSubMenu.classList.add("active");
    }
  }
};

document.addEventListener("click", function (event) {
  let menuElement = document.getElementById("menuToggle");
  let menuToggler = document.getElementById("toggler");
  let isClickInside = menuElement.contains(event.target);
  let currentTarget = event.target;
  if (currentTarget === menuToggler) menuToggler.blur();
  if (!isClickInside) {
    document.getElementById("toggler").checked = false;
    toggleProjectModalButton();
  }
});

//Open Project Modal
let startProject = () => {
  document.getElementById("modal-container").removeAttribute("class");
  document.getElementById("modal-container").classList.add("one");
  document.getElementsByTagName("body")[0].classList.add("modal-active");
};

// Close Project Modal
let closeProject = () => {
  document.getElementById("modal-container").classList.add("out");
  document.getElementsByTagName("body")[0].classList.remove("modal-active");
};
// slider functionality
let slider = document.getElementById("budget");
let output = document.getElementById("budgetDisplay");
output.innerHTML = slider.value == 0 ? "Probono" : `R${slider.value}k`;
// slider.step = 10;

slider.oninput = function () {
  output.innerHTML = this.value == 0 ? "Probono" : `R${this.value}k`;
};
// form submission functionality
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
  fetch("https://lcstudio-db.herokuapp.com/api/clients", {
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
// change color of start project button when menu opens
let toggleProjectModalButton = () => {
  if (document.getElementById("toggler").checked) {
    document.getElementsByClassName("modal-open-button")[0].style.transform =
      "translate(400%)";
  } else {
    document.getElementsByClassName("modal-open-button")[0].style.transform =
      "translate(0)";
  }
};
