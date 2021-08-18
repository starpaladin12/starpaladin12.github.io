//create a list to hold all the accounts made by users
let account = [];
//create function for users to create accounts
function signIn(){
    //create username and password 
    let username;
    let password;
    //get value from username and password input and store it in username and password
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    //check if username and password === undefined
    if (username === "" || password === ""){
        //if yes then show alert nothing has been entered
        return alert("nothing has been entered");
    }  
    //if no then check if username value is inside account list
    
    
    
}