document.addEventListener('DOMContentLoaded', () => {
    const languageSwitch = document.getElementById('language-switch');
    const englishTexts = document.querySelectorAll('.en');
    const hindiTexts = document.querySelectorAll('.hi');

    languageSwitch.addEventListener('click', () => {
        if (languageSwitch.textContent === 'Switch to Hindi') {
            englishTexts.forEach(text => text.style.display = 'none');
            hindiTexts.forEach(text => text.style.display = 'block');
            languageSwitch.textContent = 'Switch to English';
        } else {
            englishTexts.forEach(text => text.style.display = 'block');
            hindiTexts.forEach(text => text.style.display = 'none');
            languageSwitch.textContent = 'Switch to Hindi';
        }
    });

    const contactForm = document.querySelector('section#contact form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Display an error message
        alert('Error: Unable to send message.');
    });

    const subscribeForm = document.getElementById('subscribe-form');
    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('subscribe-email').value;

        // Send the email to the server to store the subscription
        fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Subscribed successfully!');
            } else {
                alert('Subscription failed: ' + data.message);
            }
            // Reset the form
            subscribeForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Subscription failed: ' + error.message);
        });
    });
});
