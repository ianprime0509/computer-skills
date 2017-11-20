function updateScore(complete, total) {
    var scoreSpan = document.getElementById("clickme_score");
    scoreSpan.innerHTML = complete.toString() + "/" + total.toString();
    if (complete === total) {
        scoreSpan.style.color = "green";
        scoreSpan.innerHTML += " Good job!";
    } else {
        scoreSpan.style.color = "red";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var clickmes = document.getElementsByClassName("clickme");
    var total = clickmes.length;
    var complete = 0;

    updateScore(complete, total);
    Array.prototype.forEach.call(clickmes, function(elem) {
        elem.addEventListener("click", function() {
            if (elem.classList.contains("clickme"))
                complete++;
            elem.classList.remove("clickme");
            updateScore(complete, total);
        });
    });
});
