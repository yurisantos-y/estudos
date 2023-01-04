const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#FFF";
}

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volte :(";
});

window.addEventListener("focus", () =>{
    document.title = docTitle;
})