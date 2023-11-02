document.addEventListener("DOMContentLoaded", function() {
    // Link1'e tıklanınca
    document.getElementById("link1").addEventListener("click", function(event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için
        scrollToElement(".container2");
    });

    // Link2'ye tıklanınca
    document.getElementById("link2").addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement(".skills.animated");
    });

    // Link3'e tıklanınca
    document.getElementById("link3",).addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement(".social-account");
    });

    //Link4'e tiklaninca
    document.getElementById("link4",).addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement(".social-account");
    });
    //Link5'e tiklaninca
    document.getElementById("link5",).addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement(".social-account");
    });

    // Belirtilen elemente kaydırma işlemi
    function scrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
});



