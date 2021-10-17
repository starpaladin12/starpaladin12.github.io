//use this for accounts page

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
    //let button = document.getElementById("writeReview").insertAdjacentElement("beforebegin",logout);
    return document.getElementById("writeReview").insertAdjacentElement("beforebegin",logout);
}
function logOut(){
    //get rid of value in activeAccount
    localStorage.setItem("activeAccount","");
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
