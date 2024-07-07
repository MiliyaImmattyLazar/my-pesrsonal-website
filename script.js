document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message) {
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseover', function() {
            project.style.backgroundColor = '#e9f5ff';
        });

        project.addEventListener('mouseout', function() {
            project.style.backgroundColor = '#fff';
        });
    });
});

function toggleProjectDetails(element) {
    const details = element.querySelector('p');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}