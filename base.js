let email = document.getElementById('emailAddress'),
    submitBtn = document.getElementById('submitBtn'),
    errorLabel = document.getElementById('errorLabel'),
    errorImg = document.getElementById('errorImg'),
    regex = /(www.)?\w+\d+@gmail.com/g,
    mediaQuery = window.matchMedia('(max-width: 767px)');


submitBtn.addEventListener("click", (e) => {
    if (regex.test(email.value)) {
        email.style.border = '2px solid hsl(0, 93%, 68%)';
        errorImg.style.visibility = 'visible';
        errorLabel.style.visibility = 'visible';
        submitBtn.style.padding = '1.6em 4em';
        e.preventDefault()
        function media(x) {
            if (x.matches) {
                submitBtn.style.padding = '10.1px 25px';
                errorLabel.style.cssText = `
                visibility: visible;
                font-size: 11px;
                left: 2.7em;
                top: 6em;
                `
                errorImg.style.cssText = `
                visibility: visible;
                position: absolute;
                left: 13em;
                top: 1.6em;
                `
            }
        }
        media(mediaQuery)
    } else {
        email.style.border = '1px solid hsl(0, 36%, 70%)';
        errorImg.style.visibility = 'hidden';
        errorLabel.style.visibility = 'hidden';
        submitBtn.style.padding = '1.5em 4em';
    }
})
