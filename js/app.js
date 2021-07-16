

const skills = document.querySelectorAll('.skill');
skills.forEach(skill => 
    skill.addEventListener('dragstart', dragStart)
);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    
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
    if (e.target.classList.contains("box")) { e.target.classList.add('drag-over');}
    
}

function dragOver(e) {
    e.preventDefault();
    if (e.target.classList.contains("box")) { e.target.classList.add('drag-over'); }
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
    e.target.classList.contains("box")?
        e.target.appendChild(draggable) : e.target.insertAdjacentElement('beforebegin', draggable)

    const essentialList = [];
    const niceList = [];
    const essential = document.getElementById('essential').childNodes;
    const nice = document.getElementById('nice').childNodes;

    essential.forEach(skill => { 
        skill.id == undefined ? essentialList.push() : essentialList.push(skill.id)
         });
    
    nice.forEach(skill => { 
        skill.id == undefined ? niceList.push() : niceList.push(skill.id) });

    console.log(essentialList)
    console.log(niceList)
}

const slider = document.getElementById("experience");
const output = document.getElementById("years");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

