function showError(msg) {
    let error = document.getElementById("error");
    error.innerHTML = msg;
    return false;
}

function validate() {
    let fullname = document.getElementById("txtFullname").value
    let username = document.getElementById("txtUsername").value
    let email = document.getElementById("txtEmail").value
    let phone = document.getElementById("txtPhonenumber").value
    let password = document.getElementById("txtPassword").value
    
    let genderMale = document.getElementById("select-one").checked
    let genderFemale = document.getElementById("select-two").checked
    let chkBox = document.getElementById("checkbox").checked

    if (fullname == "") {
        return showError("Fullname must be filled")
    }

    else if (username == "") {
        return showError("Username must be filled")
    }

    else if (email.indexOf('@') == -1) {
        return showError("Email must contain '@'")
    }

    else if (!email.endsWith(".com")) {
        return showError("Email must ends with .com")
    }

    else if (isNaN(phone)) {
        return showError("Phone must be numeric")
    }

    else if (!phone.startWith("08")) {
        return showError("Phone number must start with 08")
    }

    else if (password.length < 5 || password.length > 10) {
        return showError("Password must be 5 - 10 characters")
    }

    else if (password[0] != password[0].toUpperCase()) {
        return showError("Password must be starts with an uppercase character")
    }

    else if (genderMale == false && genderFemale == false) {
        return showError("Gender must be selected")
    }

    else if (chkBox == false) {
        return showError("Must checked to terms and conditions")
    }
}