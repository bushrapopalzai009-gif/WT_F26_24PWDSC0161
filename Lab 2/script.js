document.getElementById('registrationForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('registrationMessage').textContent = '✅ Registration submitted successfully!';
    this.reset();
});

document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('contactMessage').textContent = '✅ Message sent successfully!';
    this.reset();
});
