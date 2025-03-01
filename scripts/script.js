document.addEventListener("DOMContentLoaded", function () {
    const weekdayElement = document.getElementById("weekday");
    const dateElement = document.getElementById("date");
    const today = new Date();
    weekdayElement.innerText = today.toLocaleDateString("en-US", { weekday: "long" });
    const formattedDate = today.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
    dateElement.innerText = formattedDate;
});
