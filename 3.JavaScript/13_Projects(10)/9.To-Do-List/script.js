const form = document.querySelector('form');
const input = document.querySelector('input');
const alltask = document.querySelector('#alltask');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();

    if (text == "")
        return;

    const parent = document.createElement("div");

    const task = document.createElement('span');
    task.textContent = text;
    task.style.marginRight = '10px';

    const donebutton = document.createElement("button");
    donebutton.textContent = "Done";
    donebutton.style.marginRight = "10px";
    donebutton.style.width = "100px";


    const deletebutton = document.createElement('button');
    deletebutton.textContent = "Delete";
    deletebutton.style.width = '100px';

    parent.append(task, donebutton, deletebutton);

    alltask.append(parent);

    deletebutton.addEventListener('click',(e)=> {
        parent.remove();
    })

    donebutton.addEventListener('click', (e) => {
        task.style.textDecoration = "line-through";
        task.style.color = "grey";
    })

    form.reset();
})