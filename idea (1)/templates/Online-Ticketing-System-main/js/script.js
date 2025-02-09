document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".gallery-wrapper");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    nextBtn.addEventListener("click", function () {
        wrapper.scrollBy({ left: 300, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", function () {
        wrapper.scrollBy({ left: -300, behavior: "smooth" });
    });
});
