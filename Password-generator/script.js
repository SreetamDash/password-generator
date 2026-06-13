function generatePassword() {

    let letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let numbers =
        "0123456789";

    let symbols =
        "!@#$%^&*()_+";

    let characters = letters;

    let length =
        Number(document.getElementById("length").value);

    let includeNumbers =
        document.getElementById("numbers").checked;

    let includeSymbols =
        document.getElementById("symbols").checked;

    if(includeNumbers){
        characters += numbers;
    }

    if(includeSymbols){
        characters += symbols;
    }

    let password = "";

    for(let i = 0; i < length; i++){

        let randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;

    checkStrength(password);
}

function copyPassword(){

    let password =
        document.getElementById("password").value;

    navigator.clipboard.writeText(password);

    alert("Password Copied!");
}

function checkStrength(password){

    let strengthText =
        document.getElementById("strength");

    if(password.length < 8){
        strengthText.innerText =
            "Strength: Weak";
    }
    else if(password.length < 12){
        strengthText.innerText =
            "Strength: Medium";
    }
    else{
        strengthText.innerText =
            "Strength: Strong";
    }
}