// window.onload = function() {
  // var quoteOfTheDay = document.getElementById("quote-of-the-day");
  // console.log(quoteOfTheDay.children[1].innerText);
  
  // var buttons = document.getElementsByTagName('button');
  // console.log(buttons[0].innerText);
  
  // var quotes = document.getElementsByClassName('quote');
  // var lastQuote = quotes[quotes.length-1];
  // console.log(lastQuote.innerText);
  
  // quoteOfTheDay.hidden = true;

  //createQuote();

  var quotes = [
    {text: "Visual Basic is the way forward, I don't know why we are doing JavaScript.", author: "Jay Chetty"},
    {text: "The only CSS you need to know is background-color: tomato", author: "Rick"},
    {text: "I used the jQuery diet plugin and lost 10kg in a week.", author: "Keith"},
    {text: "Scaffolding is nothing but a fiery hell.", author: "Valerie"}
  ]



//   var articles = document.getElementsByTagName('article');
//   for (var i = 0; i < articles.length; i++) {
//     articles[i].style.backgroundColor = 'wheat';
//   }  
// }

function createQuote(quote) {
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');

  var blockQuote = document.createElement('blockQuote');
  blockQuote.innerText = quote.text;

  var cite = document.createElement('cite');
  cite.innerText = quote.author;

  blockQuote.appendChild(cite);

  quoteArticle.appendChild(blockQuote);

  var quotes = document.querySelector('#quotes');
  quotes.appendChild(quoteArticle);
}

var main = function() {
  for(quote of quotes) {
    createQuote(quote);
  }
  var button = document.getElementById('add-button')
  // button.onclick = handleClick;

  var form = document.getElementById('quote-form');
  form.onsubmit = handleSubmit;
}

var handleSubmit = function(event) {
  event.preventDefault();
  handleClick();
}

var handleClick = function() {
  var textInput = document.getElementById('quote-text-input')
  var text = textInput.value;
  var authorInput = document.getElementById('author-text-input')
  var author = authorInput.value;
  var quote = {text: text, author: author};
  createQuote(quote);
}

window.onload = main;