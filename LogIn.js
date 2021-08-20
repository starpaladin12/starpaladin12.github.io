//state activeAccount to null
let activeAccount = null;
function logIn(){
    //state username and password
    let username;
    let password;
    //take the value from the user in usernameLog and passwordLog
    username = document.getElementById("usernameLogin").value;
    password = document.getElementById("passwordLogin").value;
    //get rid of value in the text field
    document.getElementById("usernameLogin").value = "";
    document.getElementById("passwordLogin").value = "";
    //check if username or password is empty
    if (username === "" || password === ""){
        //return message
        return alert("You entered nothing")
    }
    //check if there is a value in active account and if so return message
    if (activeAccount != null){
        return alert("You already loged in");
    }
    //go through accounts list to check if username and password is in nested array
    for (let i = 0; i < accounts.length; i++){
        if ((accounts[i]).includes(username) && (accounts[i]).includes(password)){
            //print out login is complete 
            alert("login is complete");
            //set active account to the nested list but only the username 
             activeAccount = accounts[i][0];
             //call a function to create a log out button 
             logOutButton();
             //call a function to create a show account reviews button
             return showReviewsButton();
        }
    }
    //if username and password is not in accounts then show message
    return alert("No account exists ");
}
//logOutButton creates the button to log out
function logOutButton(){
    //state logout to be a button element and state the type to button and onclick to logOut function
    let logout = document.createElement("button");
    logout.setAttribute("type","button");
    logout.addEventListener("click",logOut);
    //set value inside button
    logout.innerHTML = "Log out";
    logout.className = "headerbutton";
    //state logout id to be logout
    logout.id = "logout"
    //append logout into body beside the other buttons
     
    return document.getElementById("writeReview").insertAdjacentElement("beforebegin",logout);
}
function logOut(){
    //get rid of value in activeAccount
    activeAccount = null;
    //get rid of write review forum
    if (document.getElementById("reviewContain") != null){
        document.getElementById("reviewContain").remove();
    }
    //get rid of accounts reviews
    if (document.getElementById("accountReviews") != null){
        document.getElementById("accountReviews").remove();
    }
    //get rid of show reviews button
    document.getElementById("showReviews").remove();
    //get rid of the log out button 
    return document.getElementById("logout").remove();
}
logcheck = true;
function logInForum(){
    //check if funciton is called twice 
    if (logcheck == true){
        //if not then change check to false 
        logcheck = false
    }else{
        //set check back to true
        logcheck = true
        //if function called twice then remove div
        return document.getElementById("logIn").remove();
    }
    //create signInBox = to a div element
    let logInBox = document.createElement("div"); 
    // set id of div element to signUp
    logInBox.id = "logIn";
    //create forum  = forum html tag
    let forum = document.createElement("forum");
    //create usernameLabel = label element with for=username
    let usernameLable = document.createElement("label");
    usernameLable.setAttribute("for","username");
    usernameLable.innerHTML = "username:"
    //create usernameInput = input element 
    let usernameInput = document.createElement("input");
    usernameInput.setAttribute("type","text");
    usernameInput.setAttribute("name","username");
    //set id for usernameInput to username
    usernameInput.id = "usernameLogin";
    //create passwordlabel = label element with for = password
    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for","password");
    passwordLabel.innerHTML = "password:"
    //create passwordInput = input element
    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("type","password");
    passwordInput.setAttribute("name","password");
    //set id for passwordInput to password
    passwordInput.id = "passwordLogin";
    //creat submit = input element type = button
    let submit = document.createElement("input");
    submit.setAttribute("type","button");
    submit.setAttribute("value","Log in");
    submit.addEventListener("click", logIn);
    //put all the input and label tags into a list in order to loop through later
    let forumTags = [usernameLable,usernameInput,passwordLabel,passwordInput,submit];
    //append the tags from the list into forum tag using a for loop
    for( let i = 0; i < forumTags.length; i++){
        forum.append(document.createElement("br"));
        forum.appendChild(forumTags[i]);
        
    }
    //append forum tag into div tag 
    logInBox.appendChild(forum);
    //show div tag on body
    return document.body.appendChild(logInBox);
} 