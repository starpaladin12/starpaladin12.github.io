//create an array that has a lists that contain the name of a restuarant and its ratting
let restaurants = [["Thai Express",4],["Lone Star", 2],["World Burger", 3]];


createContainer();

function createContainer(){
    //create a for loop that goes through the number of restaurants in restaurants array
    //set info to the same value as restaurants to change the value but still keep the orginal array in restaurants
    let info = [["Thai Express",4],["Lone Star", 5],["World Burger", 3]];
    //create files to be an array of html files to open 
    let files = ["ThaiExpress.html","LoneStar.html","WorldBurger.html"];
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
        //create id for button to be button plus the value of i 
        click.id = "button"+i;
        //call function setInfo to put information into each element 
        setInfo(contain, title, rate, info, box, click, files);
    }
}
//create setInfo to put information from resturants array into the elements I have created
function setInfo(contain,title, rate, info, box, click, files){
    for (let num = 0; num < (info[0]).length; num++){
        //check if the first list of info is the first value
        if ((info[0]).indexOf(info[0][num])== 0){
            //set the innerhtml of title to the first value 
            title.innerHTML = (info[0])[num];
        }else {
            /*if it is not a string then it must be the ratting number so
            add that value into rate*/ 
            rate.innerHTML = (info[0])[num];
        }
    }
    //remove the first list in info to add the next information to the next container
    info.shift();
    //set link to an a element
    let link = document.createElement("a").setAttribute("herf",files[0]);
    //remove the first value of files 
    //put the title and rate element into the div element contain
    contain.appendChild(title);
    contain.appendChild(rate);
    //put contain into click and click into box
    click.appendChild(contain);
    //put click inside the a element
    link.appendChild(click);
    box.appendChild(link);
    //put div element into html body
    return document.body.appendChild(box);   
}

