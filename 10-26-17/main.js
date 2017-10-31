console.log("hello");

//arrays
let bucket_list = ["learn to fly", "go to Africa", "go to japan"];
console.log(bucket_list[2]);

//for loop
for(let i = 0; i < bucket_list.length; i++){
  console.log(bucket_list[i]);
}

//nested loop

let imbd_movie_list = [
  "4 Christmases",
  "Elf",
  "Nightmare before Christmas",
  "Home Alone",
  "Year without a Santa Clause"
];

let ranker_movie_list = [
  "Elf",
  "It",
  "Home Alone",
  "The Dark Knight",
  "4 Christmases"
];

for(let i= 0 ; i < imbd_movie_list.length; i++){
  for (let j= 0; j<ranker_movie_list.length; j++){
    if (imbd_movie_list[i] == ranker_movie_list[j]){
      console.log(ranker_movie_list[j]);
    }
  }
}

//while loop

let balance = 1000;
let years = 0;

while(balance < 1000000){
  balance += balance*0.07;
  years ++;
}

console.log("You will be a millionaire in " + years + "!");

//iterators

ranker_movie_list.forEach(movie => console.log("-" + movie));

let new_list = ranker_movie_list.filter(movie => movie.slice(0, 1) == "1");

new_list.forEach(movie => console.log("-" + movie));
