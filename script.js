let ChangingClassColor = (element, add, remove) => {
    element.classList.add(add);
    element.classList.remove(remove);
};

let validateUserName = () => {
    let inputForUsername = document.getElementById('inputForUsername');
    let UsernameFor_Empty = document.getElementById('UsernameFor_Empty');
    let UsernameFor_UpperCase = document.getElementById('UsernameFor_UpperCase');
    let UsernameFor_FreeSpaces = document.getElementById('UsernameFor_FreeSpaces');
    let username = inputForUsername.value;

    if (username === "") {
        ChangingClassColor(UsernameFor_Empty, 'dotRed', 'dotGreen');
        ChangingClassColor(UsernameFor_UpperCase, 'dotRed', 'dotGreen');
        ChangingClassColor(UsernameFor_FreeSpaces, 'dotRed', 'dotGreen');
    } else if (username.match(/[A-Z]/) && username.includes(" ")) {
        ChangingClassColor(UsernameFor_Empty, 'dotRed', 'dotGreen');
        ChangingClassColor(UsernameFor_UpperCase, 'dotRed', 'dotGreen');
        UsernameFor_Empty.innerText = 'Username is not correct';
        ChangingClassColor(UsernameFor_FreeSpaces, 'dotRed', 'dotGreen');
    } else if (username.match(/[A-Z]/)) {
        UsernameFor_Empty.innerText = 'Username is not correct';
        ChangingClassColor(UsernameFor_Empty, 'dotRed', 'dotGreen');
        ChangingClassColor(UsernameFor_UpperCase, 'dotRed', 'dotGreen');
        ChangingClassColor(UsernameFor_FreeSpaces, 'dotGreen', 'dotRed');
    } else if (username.match(/[-]/)) {
        UsernameFor_Empty.style.display = 'none';
        UsernameFor_UpperCase.innerHTML = 'Minus is not allowed';
        ChangingClassColor(UsernameFor_UpperCase, 'dotRed', 'dotGreen');
        UsernameFor_FreeSpaces.style.display = 'none';
    } else if (username.includes(" ")) {
        UsernameFor_Empty.innerText = 'Username is not correct';
        ChangingClassColor(UsernameFor_Empty, 'dotRed', 'dotGreen');
        ChangingClassColor(UsernameFor_UpperCase, 'dotGreen', 'dotRed');
        ChangingClassColor(UsernameFor_FreeSpaces, 'dotRed', 'dotGreen');
    } else {
        ChangingClassColor(UsernameFor_Empty, 'dotGreen', 'dotRed');
        ChangingClassColor(UsernameFor_UpperCase, 'dotGreen', 'dotRed');
        UsernameFor_Empty.innerText = 'Username is correct';
        ChangingClassColor(UsernameFor_Empty, 'dotGreen', 'dotRed');
    }
};

let validateEmail = () => {
    let inputForEmail = document.getElementById('inputForEmail');
    let EmailFor_Empty = document.getElementById('EmailFor_Empty');
    let EmailFor_Validations = document.getElementById('EmailFor_Validations');
    const email = inputForEmail.value;
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/; 

    if (email === "") {
        ChangingClassColor(EmailFor_Empty, 'dotRed', 'dotGreen');
    } else {
        EmailFor_Empty.style.display = 'none';
    }

    if (!emailCheck.test(email)) {
        ChangingClassColor(EmailFor_Validations, 'dotRed', 'dotGreen');
    } else {
        EmailFor_Validations.innerText = 'Email is valid';
        ChangingClassColor(EmailFor_Validations, 'dotGreen', 'dotRed');
    }
};

let validatePassword = () => {
    let inputForPassword = document.getElementById('inputForPassword');
    let paragraphFor_Empty = document.getElementById('paragraphFor_Empty');
    let paragraphFor_Spaces = document.getElementById('paragraphFor_Spaces');
    let paragraphFor_Length = document.getElementById('paragraphFor_Length');
    let paragraphFor_UpperCase = document.getElementById('paragraphFor_UpperCase');
    let paragraphFor_LowerCase = document.getElementById('paragraphFor_LowerCase');
    let paragraphFor_Digit = document.getElementById('paragraphFor_Digit');
    let paragraphFor_SpecialCharaters = document.getElementById('paragraphFor_SpecialCharaters');    

    if (inputForPassword.value === "") {
        ChangingClassColor(paragraphFor_Empty, 'dotRed', 'dotGreen');
    } else {
        paragraphFor_Empty.style.display = 'none';
    }

    if (inputForPassword.value.includes(" ")) {
        ChangingClassColor(paragraphFor_Spaces, 'dotRed', 'dotGreen');
    } else if (inputForPassword.value === "") {
        ChangingClassColor(paragraphFor_Spaces, 'dotRed', 'dotGreen');
    } else {
        ChangingClassColor(paragraphFor_Spaces, 'dotGreen', 'dotRed');
    }

    if (inputForPassword.value.length < 8 || inputForPassword.value.length > 16) {
        ChangingClassColor(paragraphFor_Length, 'dotRed', 'dotGreen');
    } else {
        ChangingClassColor(paragraphFor_Length, 'dotGreen', 'dotRed');
    }

    if (!/[A-Z]/.test(inputForPassword.value)) {
        ChangingClassColor(paragraphFor_UpperCase, 'dotRed', 'dotGreen');
    } else {
        ChangingClassColor(paragraphFor_UpperCase, 'dotGreen', 'dotRed');
    }

    if (!/[a-z]/.test(inputForPassword.value)) {
        ChangingClassColor(paragraphFor_LowerCase, 'dotRed', 'dotGreen');
    } else {
        ChangingClassColor(paragraphFor_LowerCase, 'dotGreen', 'dotRed');
    }

    if (!/\d/.test(inputForPassword.value)) {
        ChangingClassColor(paragraphFor_Digit, 'dotRed', 'dotGreen');
    } else {
        ChangingClassColor(paragraphFor_Digit, 'dotGreen', 'dotRed');
    }

    if (!/[*&^%$#@!]/.test(inputForPassword.value)) {
        ChangingClassColor(paragraphFor_SpecialCharaters, 'dotRed', 'dotGreen');
    } else {
        ChangingClassColor(paragraphFor_SpecialCharaters, 'dotGreen', 'dotRed');
    }
};


validateUserName();
validateEmail();
validatePassword();

document.getElementById('inputForUsername').addEventListener('keypress', () => {
    validateUserName();
});
document.getElementById('inputForEmail').addEventListener('keypress', () => {
    validateEmail();
});
document.getElementById('inputForPassword').addEventListener('keypress', () => {
    validatePassword();
});
