const quotes = [
    {
        quote : "고민은 배송을 늦출 뿐이다.",
        author : "이우희",
    },
    {
        quote : "하늘아래 같은 색채는 없다.",
        author : "이우희",
    },
    {
        quote : "말도 잘한다",
        author : "박수홍",
    },
    {
        quote : "뭐든지 꾸준히하면 잘할 수 있다.",
        author : "박수홍",
    },
    {
        quote : "병원 가기 싫다.",
        author : "이우희",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;