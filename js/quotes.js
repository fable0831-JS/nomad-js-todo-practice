const quotes = [
  {
    quote: "Here's Johnny!",
    movie: "The Shining (1980)",
  },
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense (1999)",
  },
  {
    quote: "I'm scared to close my eyes, I'm scared to open them!",
    movie: "The Blair Witch Project (1999)",
  },
  {
    quote: "What an excellent day for an exorcism.",
    movie: "The Exorcist (1973)",
  },
  {
    quote: "I Wanna Play a Game. Let the Games Begin.",
    movie: "Saw (2004)",
  },
  {
    quote: "Hi, I'm Chucky. Wanna play?",
    movie: "Child's Play (1988)",
  },
  {
    quote: "I'm your number one fan.",
    movie: "Misery (1990)",
  },
  {
    quote: "Well, Clarice, have the lambs stopped screaming?",
    movie: "The Silence of the Lambs(1991)",
  },
  {
    quote: "I Mean, I told you not to go in that house.",
    movie: "Get Out(2017)",
  },
  {
    quote: "We all go a little mad sometimes.",
    movie: "Psycho(1960)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = `- ${todaysQuote.movie}`;
