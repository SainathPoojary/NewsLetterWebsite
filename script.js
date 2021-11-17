function submit() {
  let email = document.getElementsByName("email")[0].value;
  let name = document.getElementsByName("name")[0].value;
  addContact(name, email);
}

function addContact(name, email) {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key":
        "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",
    },
    body: JSON.stringify({
      listIds: [3],
      attributes: { NAME: `${name}` },
      updateEnabled: false,
      email: `${email}`,
    }),
  };

  fetch("https://api.sendinblue.com/v3/contacts", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log("Contact Added ");
      successful();
    })
    .catch((err) => {
      console.error(err);
      console.log("Contact not Added");
    });
}

function successful() {
  document.getElementsByClassName("newsletter")[0].innerHTML =
    "Thanks for joining our Newsletter";
  document.getElementsByName("email")[0].value = "";
  document.getElementsByName("name")[0].value = "";
}

function unsubscribe() {
  removeElement("name");
  document.getElementsByClassName("submitBtn")[0].innerHTML = "Unsubscribe";
  document.getElementsByClassName("newsletter")[0].innerHTML =
    "We will miss you 😕";
  removeElement("title");
}


function removeElement(className) {
  document.getElementsByClassName(className)[0].style.display = "none";
}