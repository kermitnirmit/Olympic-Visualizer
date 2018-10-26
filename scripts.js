// var datas = require("./main.js");
// var d3 = require("d3");
// var _ = require('lodash');


let players = [
    {name: "Harden",    start: 2010,    stop: 2018},
    {name: "Westbrook", start: 2009,    stop: 2018},
    {name: 'Russell',   start: 1957,  stop: 1969},
    {name: 'Wilt',      start: 1959,  stop: 1969},
    {name: 'Kareem',    start: 1970,  stop: 1989},
    {name: 'Bird',      start: 1980,  stop: 1992},
    {name: 'Jordan',    start: 1985,  stop: 2003},
    {name: 'Kobe',      start: 1997,  stop: 2015},
    {name: 'Duncan',    start: 1998,  stop: 2015}
];
let c = d3.conventions({height: 250, width: 750});

c.x.domain([1950, 2018]);
c.y.domain([0, players.length - 1]);

c.svg.dataAppend(players, 'line')
    .translate(function(d, i){ return [0, c.y(i)] })
    .attr('x1', ƒ('start', c.x))
    .attr('x2', ƒ('stop' , c.x))
    .style({stroke: 'steelblue', 'stroke-width': 4})