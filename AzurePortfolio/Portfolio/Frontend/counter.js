document.addEventListener("DOMContentLoaded", function () {
    let count = localStorage.getItem("visitorCount");

    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }

    localStorage.setItem("visitorCount", count);
    document.getElementById("visitor-counter").textContent = "Visitors: " + count;
});