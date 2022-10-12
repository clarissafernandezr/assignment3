let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
               this.title = title;
               this.rating = rating;
               this.haveWatched=haveWatched;
            }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie)
    console.log("A new movie is added")
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies....")
    for(x=0;x<allMovies.length;x++){
        console.log(allMovies[x].title + ", rating of " + allMovies[x].rating +  ", havewatched: "+allMovies[x].haveWatched)
    }
    console.log("")
    console.log("You have " + allMovies.length + " movies in total")
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    var count=0;
    console.log("printing movie that has a rating higher than " + rating)
    for(x=0;x<allMovies.length;x++){
        if(allMovies[x].rating>rating){
            console.log(allMovies[x].title +" has a rating of "+allMovies[x].rating)
           count++
        }
    }
   console.log("")
    console.log("In total, there are "+count+" matches")

}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...")
    for(x=0;x<allMovies.length;x++){
        if(allMovies[x].title===title){
            if (allMovies[x].haveWatched==true){
                allMovies[x].haveWatched=false
            }
            else{
                allMovies[x].haveWatched=true
            }
        }
    }    
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);