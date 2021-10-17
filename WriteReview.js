

let reviewsTag = [];
function writeReview(){
    //set active account as a global var from local storage
    let activeAccount = localStorage.getItem("activeAccount");
    let reviews = JSON.parse(localStorage.getItem("reviews"));
    let restaurants = JSON.parse(localStorage.getItem("restaurants"));
    //state position, content, rating
    let position;
    let content;
    let rating;
    //let position to equal the resturant user picked
    position = document.getElementById("pickReview").value;
    //let content to equal the review the user made
    content = document.getElementById("review").value;
    //let rating equal the rating num given
    rating = document.getElementById("rate").value;
    //remove the values from the text field
    document.getElementById("review").value = "";
    document.getElementById("rate").value = "";
    //check if rating is not between 1 to 5 range
    if (rating < 1 || rating > 5){
        return alert("You can not enter that rating");
    }
    //check if user entered nothing for ether position, content, rating
    if (position == ""){
        return alert("You did not enter which restaurant to review\n try again.");
    }else if (content == ""){
        return alert("You did not enter a review\n try again.");
    }else if (rating == ""){
        return alert("You did not enter a rating\n try again.");
    }
    //put position, content and rating into a dic with the key being the active account and store it in reviews
    let review = [activeAccount, position, content, rating];
    //loop through restaurants to check which restaurant to put the review in
    for(let i = 0; i < restaurants.length; i++){
        //check if the title of the resturant is equal to postion 
        if(restaurants[i][0] == position){
            //set reviewContain to a dev element
            let reviewContain = document.createElement("div");
            //set reviewContain class to the restaurant name
            reviewContain.className = restaurants[i][0].replace(" ","");
            //state reviewInfo to a p tag
            let reviewInfo = document.createElement("p");
            //put content and rating into reviewInfo
            reviewInfo.innerHTML = "User: "+activeAccount+"<br>Rating given: "+rating+"<br>"+content;
            //append reviewInfo into reviewContain
            reviewContain.appendChild(reviewInfo);
            reviewsTag.push(reviewContain);
        }
    }
    //call avgRate
    //avgRate(position,rating);
    //show that review has been created
    alert("Review created");
    //put review into reviews as a nested array
    reviews.push(review);
    //set reviews as the new value for reviews in local storage
    return localStorage.setItem("reviews",JSON.stringify(reviews));
    
}


function avgRate(position,rating){
    let restaurants = JSON.parse(localStorage.getItem("restaurants"));
    //check which restaurant to take rating from using loop
    for ( let i = 0; i < restaurants.length; i++){
        if ((restaurants[i])[0] == position){
            //take the rating of the restaurant and find avg rate
            let sum = Number(rating) + restaurants[i][1];
            let avg = (sum/2).toFixed(1);
            //show avg rating
            document.getElementById("resturantRate"+i).innerHTML = "Average Rating: "+avg;
            //put the rating into restaurants array
            console.log(restaurants)
            return restaurants[i][1] = Number(avg)
            
        }
    } 
}