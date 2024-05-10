// Funcion para filtrar las categorias de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName('item');
    for(let i=0; i < items.length;i++){
        items[i].style.display = 'none';
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i < itemCat.length;i++){
        itemCat[i].style.display = 'block';
    }

    const links = document.querySelectorAll('.trabajos nav a');
    links[0].className = '';
    links[1].className = '';
    links[2].className = '';
    links[3].className = '';

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = 'borde';
}

// function que muestra el menu responsive
function responsiveMenu(){
    let x = document.getElementById('nav');
    if(x.className===''){
        x.className = 'responsive';

        // creamos el elemento que cierra el menu
        let span = document.createElement('span');
        span.innerHTML = 'X';
        document.getElementById('nav').appendChild(span);

        // quita el boton eliminar cuando se hace click sobre el
        span.onclick = function(){
            x.className = '';
            span.remove();
        }
    }else{
        x.className='';
    }
}


// este codigo elimina el menu responsive cuando se hace click sobre algun Element
const links = document.querySelectorAll('#nav a');
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById('nav');
        x.className = '';

        // removemos el boton eliminar
        btnEliminar = document.querySelector('#nav span');
        btnEliminar.remove();
    }
}


var words = ["Front-end", "Web"]

var counter = 0;
var currentIndex = getRandomInt(0, words.length - 1);
var text = document.querySelector("#type-it");

var stepInterval = setInterval(() => { step(); }, 200);
var delInterval = null;
var delTimeout = null;

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delIntervalCallback(){
    delInterval = setInterval(() => { del(); }, 100);
    clearTimeout(delTimeout);
}

function del(){
    if(counter == 0){
        let newIndex = getRandomInt(0, words.length - 1);
        while(newIndex == currentIndex){
            newIndex = getRandomInt(0, words.length - 1);
        }
        currentIndex = newIndex;
        clearInterval(delInterval);
        stepInterval = setInterval(() => {step();}, 200);
    }
    else{
        text.textContent = text.textContent.slice(0, -1)
        counter--;
    }
}

function step(){
    if(counter >= words[currentIndex].length){
        clearInterval(stepInterval);
        delTimeout = setTimeout(() => {delIntervalCallback();}, 2000)
    }
    else{
        text.textContent += words[currentIndex][counter];
        counter++;
    }
}



// Modo oscuro
// $(document).ready(function() {
//     $('.change-mode').click(function() {
//     $('body').toggleClass('dark-mode');
//     });
// });

// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

//         $(document).ready(function() {
//             $('.change-mode').click(function() {
//                 $('body').toggleClass('dark-mode');
//                 $('a').toggleClass('dark-mode');
//                 $('p').toggleClass('dark-mode');
//             });
//         });