document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".portfolio-item");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    // Ajuste para rolar um pouco mais para baixo
    document.querySelector("a[href='#portfolio']").addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector("#portfolio");
        const offset = 0.1; // Ajuste para descer mais
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
    });
});
