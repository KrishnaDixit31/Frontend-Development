const body = document.querySelector("body");

body.addEventListener("click", (e) => {
    console.log(e.clientX, e.clientY);
    
    const circleelement = document.createElement('div');
    circleelement.classList.add('circle');
    circleelement.textContent="Hi"

    const color = ['red', 'blue', 'orange', 'pink', 'purple'];
    circleelement.style.backgroundColor = color[Math.floor(Math.random() * 5)];

    circleelement.style.top = `${ e.clientY-50}px`;
    circleelement.style.left = `${e.clientX-50}px`;

    body.append(circleelement);

    setTimeout(() => {
        circleelement.remove();
    }, 5000);
});
