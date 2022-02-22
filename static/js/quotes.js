const quotes = [
    {
        body: '"Kiera, is your shirt... like... a <b>bag</b>?"',
        author: "Chere Law 2019"
    },
    {
        body: '"It\'s like chocolate and banana"',
        author: "Jasmine 2020"
    },
    {
        body: '"<i>mumble, mumble, mumble</i>"',
        author: "Lena 2022"
    },
    {
        body: '"<b>All</b> girls are the same."',
        author: "King Kumar 2022"
    },
    {
        body: '"It\'s like chocolate and banana"',
        author: "Jasmine 2020"
    },
    {
        body: '"All <b>boys</b> are the same"',
        author: "KP Nuts 2022"
    },
    {
        body: '"I like getting <i>slapped</i> "',
        author: "Chocolate Thunder 2022"
    },
    {
        body: '"Każda racja to <i>wibracja</i> "',
        author: "Ula the dentist 2022"
    },
    {
        body: '"What happens when I fall on my face?" <br/> "I bruise my head"',
        author: "The Funge Nome 12BC"
    }
]

function refreshQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-body").innerHTML = quote.body;
    document.getElementById("quote-author").innerHTML = quote.author;
}

refreshQuote();