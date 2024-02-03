const cursor = document.querySelector('.cursor');

var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped() {
        cursor.style.display = "none";
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", (e) => {
    cursor.style.display = "none";
})

function changeText() {
    let x = document.getElementById("heading");
    x.style.color = "orange";
}

