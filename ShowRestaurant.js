//create an array that has a lists that contain the name of a restuarant and its ratting
let restaurants = [["Thai Express",4],["Lone Star", 2],["World Burger", 3]];


createContainer();
function createContainer(){
    //create a for loop that goes through the number of restaurants in restaurants array
    //set info to the same value as restaurants to change the value but still keep the orginal array in restaurants
    let info = [["Thai Express",4],["Lone Star", 5],["World Burger", 3]];
    for (let i = 0;  i < restaurants.length; i++){
        /*create a div element in js and make it equal to variable contain to hold other elements that will get created 
        let title equal to a p element to hold the name of the restaurant 
        let rate equal to another p element to hold the rating number from 1 to 5 of the restaurant*/
        let contain = document.createElement("div");
        let title = document.createElement("p");
        let rate = document.createElement("p");
        //create box to equal a div element and click to equal a button element
        let box = document.createElement("div");
        let click = document.createElement("button");
        //set the class of the div and two other p elements to container in order to design them later
        contain.className = "container";
        title.className = "container";
        rate.className = "container";
        //set class name for box as box
        box.className = "box";
        //set id for box to icon and change it for every icon restaurant
        box.id = "icon"+i
        //create id for button to be button plus the value of i 
        click.id = "button"+i;
        //call function setInfo to put information into each element 
        setInfo(contain, title, rate, info, box, click);
    }
    //give a onclick event to each button created to a corrisbonding funciton
    document.getElementById("button0").addEventListener("click",ThaiExpressReviews);
    document.getElementById("button1").addEventListener("click",LoneStarReviews);
    document.getElementById("button2").addEventListener("click",WorldBurgerReviews);
}
check1 = true;
function ThaiExpressReviews(){
    if (check1){
        check1 = false;
    }else{
        check1 = true;
        return document.getElementById("firstReviews").remove();
    }
    //create a div element to store all the reviews 
    let reviewsContainer = document.createElement("div");
    reviewsContainer.className = "reviewList";
    reviewsContainer.id = "firstReviews"
    //create a for loop to go through the number of reviews created which is stored in reviews
    for (let i = 0; i < reviewsTag.length; i++){
        if (reviewsTag[i].className == "Thai Express"){
         reviewsContainer.append(reviewsTag[i]);
        }
    }
    //put the user review under the restaurants icon
    let refrence = document.getElementById("icon0");
    return refrence.insertAdjacentElement("afterend",reviewsContainer);
}
check2 = true;
function LoneStarReviews(){
    if (check2){
        check2 = false;
    }else{
        check2 = true;
        return document.getElementById("secondReviews").remove();
    }
     //create a div element to store all the reviews 
     let reviewsContainer = document.createElement("div");
     reviewsContainer.className = "reviewList";
     reviewsContainer.id = "secondReviews"
     //create a for loop to go through the number of reviews created which is stored in reviews
     for (let i = 0; i < reviewsTag.length; i++){
        if (reviewsTag[i].className == "Lone Star"){
        reviewsContainer.append(reviewsTag[i]);
        }
     }
     //put the user review under the restaurants icon
     let refrence = document.getElementById("icon1");
     return refrence.insertAdjacentElement("afterend",reviewsContainer);
}
check3 = true
function WorldBurgerReviews(){
    if (check3){
        check3 = false;
    }else{
        check3 = true;
        return document.getElementById("thirdReviews").remove();
    }
     //create a div element to store all the reviews 
     let reviewsContainer = document.createElement("div");
     reviewsContainer.className = "reviewList";
     reviewsContainer.id = "thirdReviews"
     //create a for loop to go through the number of reviews created which is stored in reviews
     for (let i = 0; i < reviewsTag.length; i++){
         //check if div class name is the same as resturant
         if (reviewsTag[i].className == "World Burger"){
         reviewsContainer.append(reviewsTag[i]);
         }
     }
     //put the user review under the restaurants icon
     let refrence = document.getElementById("icon2");
     return refrence.insertAdjacentElement("afterend",reviewsContainer);
}
//create setInfo to put information from resturants array into the elements I have created
function setInfo(contain,title, rate, info, box, click){
    title.innerHTML = (info[0])[0];
    /*if it is not a string then it must be the ratting number so
    add that value into rate*/ 
    rate.innerHTML = (info[0])[1];
    //remove the first list in info to add the next information to the next container
    info.shift();
    //put the title and rate element into the div element contain
    contain.appendChild(title);
    contain.appendChild(rate);
    //put contain into click and click into box
    click.appendChild(contain);
    //put click inside the div element
    box.appendChild(click);
    //put div element into html body
    return document.body.appendChild(box);   
}

