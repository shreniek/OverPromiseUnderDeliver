function setupForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.textContent : 'Send';
        if (submitButton) {
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
        }
        
        // Get form values - adjust the IDs to match your actual form fields
        const name = document.getElementById('name').value || '';
        const email = document.getElementById('email').value || '';
        const company = document.getElementById('company').value || 'Not provided';
        const message = document.getElementById('message').value || '';
        const consent = document.getElementById('consent') && document.getElementById('consent').checked ? 'Yes' : 'No';
        
        // Prepare email body
        const emailBody = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Marketing Consent:</strong> ${consent}</p>
        `;
        
        // Send email using SMTP.js
        Email.send({
            SecureToken: "973862d2-db09-4bc5-a9c6-d1bd3b14af6c",
            To: 'shreneek.de@gmail.com',
            From: 'shreneek.de@gmail.com',
            Subject: `Website Contact from ${name}`,
            Body: emailBody
        }).then(function(message) {
            console.log("Email sent successfully:", message);
            
            // Show success message
            const formSuccess = document.getElementById('form-success');
            if (formSuccess) {
                formSuccess.style.display = 'block';
                contactForm.style.display = 'none';
            } else {
                alert("Thank you for your interest! Shreneek will contact you ASAP with MIND-BLOWING solutions!");
            }
            
            // Reset button
            if (submitButton) {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
            
            // Reset form
            contactForm.reset();
        }).catch(function(error) {
            console.error("Failed to send email:", error);
            
            // Show error message
            const formError = document.getElementById('form-error');
            if (formError) {
                formError.style.display = 'block';
            } else {
                alert("Sorry, there was an error sending your message. Please try again later.");
            }
            
            // Reset button
            if (submitButton) {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });
    });
}
