    
console.log("JS FILE LINKED");
const showBtnOne = document.getElementById("btn-1");
try{
    const showBtnTwo = document.getElementById("btn-2");
    showBtnTwo.addEventListener("click", handleClick);
}catch(error){
    console.log("Second button not found");
    console.log(error.message);
}

function handleClick (eventObj) {
    let currentText = eventObj.target.innerText;
    let changeText  = (currentText === "Show" ? "Hide" : "Show")
    eventObj.target.innerText = changeText;

    let passWordElem = eventObj.target.previousElementSibling
    let currentType = passWordElem.getAttribute("type");
    let setType = (currentType === "password" ? "text" : "password");
    passWordElem.type = setType;
    console.log("YES CLICKED")
}

showBtnOne.addEventListener("click", handleClick);


// Handle Modal
const formElem = document.getElementById("form");
formElem.addEventListener("submit", (e) => {
    e.preventDefault();
} )



const signUpBtn = document.getElementById("submit");
signUpBtn.addEventListener("click", () => {
    document.getElementsByTagName("dialog")[0].showModal();
})

const closeBtn = document.getElementsByClassName("cross-mark")[0];
closeBtn.addEventListener("click", () => {
    document.getElementsByTagName("dialog")[0].close();
})
