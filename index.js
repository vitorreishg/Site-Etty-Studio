const carousel = document.querySelectorAll(".carousel");

const dragging = (e) => {
    console.log(e.pageX);
}

carousel.addEventListener("mousemove", dragging);