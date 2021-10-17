function logIn(){
    let activeAccount = localStorage.getItem("activeAccount");
    let account = JSON.parse(localStorage.getItem("accounts"));
    //state username and password
    let username;
    let password;
    //take the value from the user in usernameLog and passwordLog
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    //get rid of value in the text field
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    //check if username or password is empty
    if (username === "" || password === ""){
        //return message
        return alert("You entered nothing");
    }
    //check if already logedIn
    if (activeAccount != ""){
        return alert("You already signed in");
    }
    //remove any spaces added by accident from user
    username = username.trim();
    password = password.trim();
    //go through accounts list to check if username and password is in nested array
    for (let i = 0; i < account.length; i++){
        if ((account[i]).includes(username) && (account[i]).includes(password)){
            //print out login is complete 
            alert("login is complete");
            //set active account to the nested list but only the username 
             activeAccount = account[i][0];
             //store the new value of activeAccount into local storage
            localStorage.setItem("activeAccount",activeAccount);
             return window.top.close();
        }
    }
    //if username and password is not in accounts then show message
    return alert("No account exists ");
}