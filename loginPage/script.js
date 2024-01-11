import { Authentication } from "./authentication";

let status;

function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username && password) {
        status = BackendCall(username, password);
        if(status == -1){
            alert(`Must contain "@gmail.com" to accept`)
        }
    } else {
        alert("Please fill in both username and password!");
    }
}


function BackendCall(username, password) {
    status = Authentication(username);
    alert("Logging in with username: " + username.name + " and password: " + password.password);
    return status;
}
