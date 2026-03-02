// Quote of the Day Data (Curated for Digital Signage)
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Quality is not an act, it is a habit.", author: "Aristotle" }
];

document.addEventListener('DOMContentLoaded', () => {
    console.log('Signage App Loaded');

    // Select Quote of the Day based on current date
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % quotes.length;
    const todayQuote = quotes[quoteIndex];

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    if (quoteText && quoteAuthor) {
        quoteText.textContent = `"${todayQuote.text}"`;
        quoteAuthor.textContent = `— ${todayQuote.author}`;
    }

    // Console Logging for Health Check
    const timestamp = new Date().toLocaleTimeString();
    console.log(`Last updated: ${timestamp}`);
    console.log(`Current Quote Index: ${quoteIndex}`);
});
