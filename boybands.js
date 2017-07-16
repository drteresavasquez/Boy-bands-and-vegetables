console.log("boybands, duh!");


let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
let loopCount = 5;

// Keep track of which band we're on in the loop
let currentBand = "";

// Keep track of which veggie we're on in the loop
let currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
let bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
let veggieElement = document.getElementById("vegetables");

// Start looping
for (let i = 0; i < loopCount; i += 1) {
  
  // Add the band names into the correct <div>
  currentBand = bands[i];
  // console.log(currentBand);
   bandElement.innerHTML += `<li>${currentBand}</li>`;

// document.getElementById("boy-bands").innerHTML
  // Add the veggie names into the correct <div>
  	currentVeggie = vegetables[i];
	veggieElement.innerHTML += `<li>${currentVeggie}</li>`;

}