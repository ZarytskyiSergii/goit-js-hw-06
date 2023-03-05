// test
const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

const sizeChanging = (event) => {
    
    output.style.fontSize = event.currentTarget.value + 'px';
    // let currentFont = event.currentTarget;
    // if (currentFont > event.currentTarget.min && currentFont < event.currentTarget.max) {
    //     output.style.fontSize = event.currentTarget;
    // }
}

input.addEventListener('input', sizeChanging);