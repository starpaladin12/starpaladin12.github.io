//create function for users to create accounts
function signUp(){
    //set localitem as local var
    let account = JSON.parse(localStorage.getItem("accounts"));
    localStorage.removeItem("accounts");
    //create username and password 
    let username;
    let password;
    //get value from username and password input and store it in username and password
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    //get rid of values a sucessin the text field
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    //check if username and password === undefined
    if (username === "" || password === ""){
        //if yes then show alert nothing has been entered
        return alert("nothing has been entered");
    }  
    //if no then check if username value is inside account list
   for (let i = 0; i < account.length; i++){
       //check if the first value in the nested array of accounts is equal to username value 
       if (account[i][0] == username){
           //if true then that account is already made so return message
           return alert("An account with the same username is already created \n put a different username.");
       }
   }
    //if username is not already in accounts list then add it with password as a nested array
    account.push([username,password,"/signUpImages/profilePic.png"]);
    //set the new value of localstorage
    localStorage.setItem("accounts",JSON.stringify(account));
    //print out account sucessfully created
    return alert("Account sucessfully created");
    
}