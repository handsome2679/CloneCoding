const quotes = [
{
    quote : "I never dreamed about success, I worked for it.",
    author : "Estee Lauder",
},
{
    quote : "Do not try to be original, just try to be good",
    author : "Paul Rand"
},
{
    quote : "When you go through hardships and decied not to surrender, that is strength.",
    author: "Arnold Schwarzenergger"
},
{
    quote : "It is kind of fun to do the impossible.",
    author : "Walt Disney"
},
{
    quote : "There are better starters than me but I'm a strong finisher.",
    author : "Usain Bolt"
},
{
    quote : "Tough times never last, but tough people do.",
    author : "Robert H. Schuller"
},
{
    quote : "I've failed over and over and over again in my life and that is why l succeed.",
    author : "Micheal jordan"
},
{
    quote : "If you dont get out of the box you've been raised in, you won't understand how much bigger the world is.",
    author : "Angelina Jolli"
},
{
    quote : "But I Know, somehow, that only when it is dark enough can you see the stars.",
    author : "Martin Luther King. JR"
}, 
{
    quote : "Grind Hard, Shine Hard.",
    author : "Dwayne Johnson"
},
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)]; // 숫자 10을 하드 코딩한 것.

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;