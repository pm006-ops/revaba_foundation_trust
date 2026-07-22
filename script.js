/*function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {

    const themeBtn = document.getElementById("theme-toggle");

    if (!themeBtn) {
        console.error("Theme button not found!");
        return;
    }

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }

    });

});
*/
// ===============================
// Mobile Navigation
// ===============================

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("open");
}

// ===============================
// Developer Dark Mode
// Press Ctrl + Shift + D
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Restore previous theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Secret shortcut: Ctrl + Shift + D
    document.addEventListener("keydown", function (e) {

        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {

            e.preventDefault();

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        }

    });

});