var d3 = require("d3");
var fs = require("fs");
var papa = require("papaparse");
var _ = require('lodash');

const countriesFile = fs.readFileSync('./noc_regions.csv', 'utf8');
const athleteEventsFile = fs.readFileSync('./athlete_events.csv', 'utf8');
// console.log(countriesFile);
let countries = papa.parse(countriesFile, {
    header: true,
    complete: function(results) {
		console.log("Done1");
	}
});

let athleteEvents = papa.parse(athleteEventsFile, {
    dynamicTyping: true,
    header: true,
    complete: function(results) {
		console.log("Done2");
	}
});

console.log(countries.data[0].region);
let sum = 0;
countries.data.forEach(element => {
    sum++;
});
console.log(sum);

athleteEvents = athleteEvents.data;
sum = 0;
const uniqueathletes = _.uniqBy(athleteEvents, "Name");
console.log(uniqueathletes);


// console.log(sum);

// for(let i = 0; i < 100; i++) {
//     console.log(athleteEvents.data[i]["Name"], athleteEvents.data[i]["Year"]);
// }