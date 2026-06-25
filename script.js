
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Effect ---
    const header = document.getElementById('main-header');
if(header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.padding = '15px 0';
        }
    });
}

    // --- Service Card Hover Effects ---
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon-wrapper');
            icon.style.backgroundColor = '#1e58d7';
            icon.style.color = '#ffffff';
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon-wrapper');
            icon.style.backgroundColor = '#e8f0fe';
            icon.style.color = '#1e58d7';
        });
    });

    // --- Number Counting Animation for Stats Section ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace(/,/g, '');
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc).toLocaleString();
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    };

    // Trigger stats animation when scrolled into view using Intersection Observer
    const statsSection = document.querySelector('.stats');
    if(statsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.5 }); // Starts when 50% of the section is visible

        observer.observe(statsSection);
    }

    // --- Prevent Form Submission Reload & Show Feedback ---
    const callbackForm = document.getElementById('callbackForm');
    if(callbackForm) {
        callbackForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload
            const btn = callbackForm.querySelector('button');
            const originalText = btn.innerText;
            
            // Visual feedback
            btn.innerText = "Request Sent!";
            btn.style.backgroundColor = "#2ecc71"; 
            btn.style.borderColor = "#2ecc71";
            
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ""; 
                btn.style.borderColor = ""; 
                callbackForm.reset();
            }, 3000);









            // --- Mobile Menu Toggle Logic ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            
            navLinks.classList.toggle('active');
            
            
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }
        });
    }



    /*contract form*/





    document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Effect ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                header.style.padding = '10px 0';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                header.style.padding = '15px 0';
            }
        });
    }

    // --- Office Tabs Switching Logic ---
    const tabs = document.querySelectorAll('.office-tabs .tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            
            tabs.forEach(t => t.classList.remove('active'));
           
            tab.classList.add('active');
        });
    });

    // --- Prevent Main Contact Form Submission & Show Feedback ---
    const contactForm = document.getElementById('mainContactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            
            btn.innerText = "MESSAGE SENT!";
            btn.style.backgroundColor = "#8cc63f"; // Accent Green
            
           
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ""; 
                contactForm.reset();
            }, 3000);
        });
    }

    // --- Newsletter Form Submission ---
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            input.value = "Subscribed successfully!";
            input.style.color = "#8cc63f";
            
            setTimeout(() => {
                input.value = "";
                input.style.color = "";
            }, 3000);
        });
    });
});




/*-captcha check function for apply now form*-*/
function checkRobot() {
    if (!document.getElementById("robot").checked) {
        alert("Please confirm you are not a robot");
        return false;
    }
    return true;
}





  setTimeout(function(){
    let loader = document.getElementById("loader");

    loader.style.opacity = "0";
    loader.style.transition = "0.5s";

    setTimeout(function(){
        loader.style.display = "none";
    }, 500);

}, 1500);







// --- Initialize AOS Scroll Animation ---
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800, //  
        easing: 'ease-in-out', // 
        once: true, // 
        offset: 100 // 
    });
});

});



/*==================== backend Apply Now form ====================*/
/*==================== backend Apply Now form ====================*/
const loanForm = document.getElementById('loanForm');

if (loanForm) {
    loanForm.addEventListener('submit', function(event) {
        
        event.preventDefault(); 

        Swal.fire({
            title: 'Processing Application...',
            html: '<b>Please wait!</b> Securing your data 🔒',
            allowOutsideClick: false,
            background: '#f4f6f9',
            didOpen: () => {
                Swal.showLoading();
            }
        });

        // Tomar aager shob data mapping ekdom theek ache
        const applicationData = {
            companyName: document.getElementById('Company_Name') ? document.getElementById('Company_Name').value : '',
            dba: document.getElementById('DBA') ? document.getElementById('DBA').value : '',
            legalEntity: document.getElementById('Legal_Entity_Type') ? document.getElementById('Legal_Entity_Type').value : '',
            taxId: document.getElementById('Federal_Tax_ID') ? document.getElementById('Federal_Tax_ID').value : '',
            bizCity: document.getElementById('City') ? document.getElementById('City').value : '',
            bizState: document.getElementById('State') ? document.getElementById('State').value : '',
            bizZip: document.getElementById('Zip_Code') ? document.getElementById('Zip_Code').value : '',
            ownershipType: document.getElementById('Ownership_Type') ? document.getElementById('Ownership_Type').value : '', 
            landlordName: document.getElementById('Landlord_Name') ? document.getElementById('Landlord_Name').value : '',
            landlordContact: document.getElementById('Landlord_Contact') ? document.getElementById('Landlord_Contact').value : '',
            averagebankbalance: document.getElementById('Average_Bank_Balance') ? document.getElementById('Average_Bank_Balance').value : '',
            monthlydeposits: document.getElementById('Monthly_Deposite') ? document.getElementById('Monthly_Deposite').value : '', 
            loanamountrequested: document.getElementById('Loan_Amount-Requested') ? document.getElementById('Loan_Amount-Requested').value : '', 
            outstandingbalance: document.getElementById('Outstanding_Balance') ? document.getElementById('Outstanding_Balance').value : '',
            outstandingbalance2: document.getElementById('outstandingBalance') ? document.getElementById('outstandingBalance').value : '',
            
            ownerFirstname: document.getElementById('First_Name') ? document.getElementById('First_Name').value : '',
            ownermiddlename: document.getElementById('Middle_Name') ? document.getElementById('Middle_Name').value : '',
            ownerLastname: document.getElementById('Last_Name') ? document.getElementById('Last_Name').value : '',
            ownerEmail: document.getElementById('Email_Address') ? document.getElementById('Email_Address').value : '',
            ownerPhone: document.getElementById('Telephone') ? document.getElementById('Telephone').value : '',
            Cellphone: document.getElementById('Cellphone') ? document.getElementById('Cellphone').value : '',
            SocialSecurityNumber: document.getElementById('Social_Security_Number') ? document.getElementById('Social_Security_Number').value : '',
            DateofBirth: document.getElementById('Date_of_Birth') ? document.getElementById('Date_of_Birth').value : '',
            OwnershipPercentage: document.getElementById('Ownership_Percentage') ? document.getElementById('Ownership_Percentage').value : '',
            homestreetaddress: document.getElementById('Home_Street_Address') ? document.getElementById('Home_Street_Address').value : '',
            city: document.getElementById('owner_City') ? document.getElementById('owner_City').value : '',
            state: document.getElementById('owner_state') ? document.getElementById('owner_state').value : '',
            zipCode: document.getElementById('owner_Zip_Code') ? document.getElementById('owner_Zip_Code').value : '', 
            
            ParnerFirstName: document.getElementById('p_First_Name') ? document.getElementById('p_First_Name').value : '',
            PartnerMiddleName: document.getElementById('p_Middle_Name') ? document.getElementById('p_Middle_Name').value : '',
            PartnerLastName: document.getElementById('p_Last_Name') ? document.getElementById('p_Last_Name').value : '',
            parnerEmail: document.getElementById('p_Email_Address') ? document.getElementById('p_Email_Address').value : '',
            parnerPhone: document.getElementById('p_Telephone') ? document.getElementById('p_Telephone').value : '',
            parnerCellphone: document.getElementById('p_Cellphone') ? document.getElementById('p_Cellphone').value : '',    
            parnerSocialSecurityNumber: document.getElementById('p_Social_Security_Number') ? document.getElementById('p_Social_Security_Number').value : '',
            parnerDateofBirth: document.getElementById('p_Date_of_Birth') ? document.getElementById('p_Date_of_Birth').value : '',
            parnerOwnershipPercentage: document.getElementById('p_Ownership_Percentage') ? document.getElementById('p_Ownership_Percentage').value : '',
            parnerhomestreetaddress: document.getElementById('p_Home_Street_Address') ? document.getElementById('p_Home_Street_Address').value : '',
            parnercity: document.getElementById('p_City') ? document.getElementById('p_City').value : '',
            parnerstate: document.getElementById('p_State') ? document.getElementById('p_State').value : '',
            parnerzipCode: document.getElementById('p_Zip_Code') ? document.getElementById('p_Zip_Code').value : ''
        };

        fetch('http://localhost:5000/api/submit-application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applicationData)
        })
        .then(async response => {
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || data.error || "Check the server!");
            }
            return data;
        })
        .then(data => {
            
            // 2. Confetti Blast! (Screen-e rongin kagoz urbe)
            if (typeof confetti !== 'undefined') {
                confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.5 },
                    colors: ['#000080', '#28a745', '#ffc107', '#e23d32'],
                    zIndex: 10000 
                });
            }

            // Success Popup
            Swal.fire({
                icon: 'success',
                title: '<h1 style="color: #000080; font-weight: 900; margin-bottom: 0;">Awesome! 🎉</h1>',
                html: '<h3 style="color: #28a745; margin-top: 10px;">Thanks for your application!</h3><p style="font-size: 16px; color: #555;">We have securely received your details. Our team will review it and get back to you shortly.</p>',
                background: '#ffffff',
                backdrop: `rgba(0, 5, 25, 0.9)`, // Deep dark premium background
                confirmButtonText: '<b>Got it! 🚀</b>',
                confirmButtonColor: '#000080',
                padding: '2em',
                width: '600px'
            });
            
            loanForm.reset(); 
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! ' + error.message,
                confirmButtonColor: '#e23d32'
            });
        });
    });
}

/*==================== Contact Us Form ====================*/
const mainContactForm = document.getElementById('mainContactForm');

if (mainContactForm) {
    mainContactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // loading popup
        Swal.fire({
            title: 'Sending Message...',
            text: 'Please wait while we send your message 🚀',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const contactData = {
            firstName: document.getElementById('contactFirstName').value,
            lastName: document.getElementById('contactLastName').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            website: document.getElementById('contactWebsite').value,
            department: document.getElementById('contactDepartment').value,
            message: document.getElementById('contactMessage').value
        };

        fetch('http://localhost:5000/api/submit-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        })
        .then(async response => {
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Server error");
            return data;
        })
        .then(data => {
            // Success animation popup
            Swal.fire({
                icon: 'success',
                title: 'Sent Successfully!',
                text: 'Thanks for reaching out. We will get back to you soon!',
                confirmButtonColor: '#000080'
            });
            mainContactForm.reset(); 
        })
        .catch(error => {
            // Error animation popup
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! ' + error.message,
                confirmButtonColor: '#e23d32'
            });
            console.error("Error:", error);
        });
    });
}