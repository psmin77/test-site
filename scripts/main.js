const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dufu.png") {
    myImage.setAttribute("src", "images/tofu.jpeg");
  } else {
    myImage.setAttribute("src", "images/dufu.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");

    if(!myName) {
        setUserName();

    } else {
        localStorage.setItem("name", myName);
        // myHeading.textContent = `Hello, ${myName}`;
        myHeading.innerHTML = 'Hello, ' + myName;
    }
}

if (!localStorage.getItem("name")){
    setUserName();

} else {
    const storedName = localStorage.getItem("name");
    // myHeading.textContent = `Hello, ${storedName}`;
    myHeading.innerHTML = 'Hello, ' + storedName
}

myButton.onclick = () => {
    setUserName();
};
