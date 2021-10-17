//create an empty list to store in local storage with accounts key name
let accounts = [];
localStorage.setItem("accounts",JSON.stringify(accounts));
//state activeAccount to empty string
let activeAccount = "";
localStorage.setItem("activeAccount",activeAccount);
//set empty list to hold info of the reviews users create
localStorage.setItem("reviews",JSON.stringify([]));
//set the img path to local storage
localStorage.setItem("avatar","/signUpImages/profilePic.png");
//set restaurants as a value in local storage
let restaurants = [["Thai Express",4],["Lone Star", 5],["World Burger", 3]];
localStorage.setItem("restaurants",JSON.stringify(restaurants));