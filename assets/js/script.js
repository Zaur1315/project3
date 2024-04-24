document.addEventListener("DOMContentLoaded", function () {

    const banner = document.querySelector('.banner');

    function handleScroll() {
        let scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            banner.style.filter = 'blur(' + (scrollPosition / 60) + 'px)';
        } else {
            banner.style.filter = 'blur(0)';
        }
    }

    window.addEventListener('scroll', handleScroll);


    function handleTabSwitching(tabs, bodies) {
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function (event) {
                event.preventDefault();
                tabs.forEach(function (t) {
                    t.classList.remove('active');
                });
                bodies.forEach(function (body) {
                    body.classList.remove('active');
                });
                var tabId = this.getAttribute('id').replace('nav-', '');
                var bodyId = 'body-' + tabId;
                document.getElementById(this.getAttribute('id')).classList.add('active');
                document.getElementById(bodyId).classList.add('active');
            });
        });
    }

    const regular_tabs = document.querySelectorAll('.nav-regular');
    const regular_bodies = document.querySelectorAll('.card-regular > div');
    handleTabSwitching(regular_tabs, regular_bodies);

    const inter_tabs = document.querySelectorAll('.nav-inter');
    const inter_bodies = document.querySelectorAll('.card-inter > div');
    handleTabSwitching(inter_tabs, inter_bodies);





    function handleFormSubmission(formId, successMessage) {
        var form = document.getElementById(formId);

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            var submitBtn = form.querySelector("input[type='submit']");
            var oldBtnValue = submitBtn.value;

            var flashMessage = form.parentNode.querySelector(".flash");
            if (flashMessage) {
                flashMessage.remove();
            }

            submitBtn.classList.add("disabled");
            submitBtn.value = "Sending...";

            setTimeout(function () {
                submitBtn.classList.remove("disabled");
                submitBtn.value = oldBtnValue;
                var successMsgElement = document.createElement("p");
                successMsgElement.innerText = successMessage;
                successMsgElement.classList.add("flash");
                successMsgElement.classList.add("mt-2");
                form.parentNode.appendChild(successMsgElement);
            }, 1000);
        });
    }

    try {
        handleFormSubmission("contact_us_form", "Thank you for your request. You will be contacted shortly.");
    } catch {

    }

    try {
        handleFormSubmission("work_form", "Thank you for your request. You will be contacted shortly.");
    } catch {

    }

});