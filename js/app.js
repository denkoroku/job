

const skills = document.querySelectorAll('.skill');
skills.forEach(skill => 
    skill.addEventListener('dragstart', dragStart)
);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const skill = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(skill);


    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
  
    const essentialList = [];
    const niceList = [];
    const essential = document.getElementById('essential').childNodes;
    const nice = document.getElementById('nice').childNodes;
    essential.forEach(skill => { essentialList.push(skill.id) });
    nice.forEach(skill => { niceList.push(skill.id) });

    console.log(essentialList)
    console.log(niceList)
}



