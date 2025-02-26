const quotes = [
    "The best way to predict the future is to create it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Do not watch the clock. Do what it does. Keep going.",
    "Success is not the key to happiness. Happiness is the key to success."
];

function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

function share(platform) {
    const quote = document.getElementById('quote').innerText;
    let url = '';

    if (platform === 'Twitter') {
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    } else if (platform === 'Snapchat' || platform === 'Instagram' || platform === 'LinkedIn') {
        navigator.clipboard.writeText(quote).then(() => {
            alert(`Quote copied to clipboard! Open ${platform} and paste it manually.`);
        });
        return;
    } else if (platform === 'WhatsApp') {
        url = `https://wa.me/?text=${encodeURIComponent(quote)}`;
    }

    if (url) {
        window.open(url, '_blank');
    }
} 
