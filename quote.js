/* making this because it was the only way i am understandinig things currently*/

const apiKey = 'ZtYUn8EFuxeTssRxWgosy4ZUi5gZDvgdUP95UYDc';
const url = 'https://api.api-ninjas.com/v2/quotes?categories=nature';


window.addEventListener("load", getNatureQuote);

async function getNatureQuote() {
    const displayBox = document.getElementById('quote-display');
    if (!displayBox) return;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const quoteObject = data[0];
        console.log("Extracted quote object from API:", quoteObject);

        if (quoteObject) {
        displayBox.innerHTML = `
        <p class="quote-text">"${quoteObject.quote}"</p>
        <p class="quote-author">-${quoteObject.author}</p>
        `;
        }
    } catch (error) {
        console.error(`Error fetching the quote:`, error);
        displayBox.innerHTML = `
        <p class="quote-text">"The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul."</p>
        <p class="quote-author">- Robert Wyland</p>
        `;

    }
}

