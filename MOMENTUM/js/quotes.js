const quotes = [

{
    quotes: "about time", 
    authors : "movie"
},
{
    quotes: "One's life never comes twice", 
    authors : "man"
},
{
    quotes: "i", 
    authors : "we"
},
{
    quotes: "js", 
    authors : "edison"
},
{
    quotes: "work bold", 
    authors : "Elon Musk"
},
{
    quotes: "nico", 
    authors : "nicos"
},
{
    quotes: "any song", 
    authors : "zico"
},
{
    quotes: "cherry blossom", 
    authors : "k.will"
},
{
    quotes: "just do it", 
    authors : "man"
},
{
    quotes: "work bold", 
    authors : "steve jobs"
},
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuotes = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuotes.quotes;
author.innerText = todaysQuotes.authors;

//math.round 반올림 math.ceil 올림 math.floor 내림