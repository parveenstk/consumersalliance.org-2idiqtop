// Last Updated Date Function

document.addEventListener("DOMContentLoaded", function () {
    let date = new Date();
    date.setMonth(date.getMonth() - 1); // Subtract one month

    let formattedDate = date.toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    document.getElementById("lastUpdated").innerText = "Last Updated: " + formattedDate;
});