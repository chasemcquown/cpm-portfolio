function btnHTML() {
    document.querySelector('.primary-btn').innerHTML = "what I've been working on   " + '<i class="fa-solid fa-angle-down"></i>'
    document.querySelector('#btn-1').innerHTML = 'view project  ' + '<i class="fa-solid fa-angle-right"></i>'
    document.querySelector('#btn-2').innerHTML = 'view project  ' + '<i class="fa-solid fa-angle-right"></i>'
    document.querySelector('#btn-3').innerHTML = 'view project  ' + '<i class="fa-solid fa-angle-right"></i>'
    document.querySelector('#btn-4').innerHTML = 'view project  ' + '<i class="fa-solid fa-angle-right"></i>'
}

function changeIcon() {

    if(event.target.id === 'hero-btn') {
        document.querySelector('.primary-btn').innerHTML = "what I've been working on   " + '<i class="fa-solid fa-angles-down"></i>'
    }

    if(event.target.id === 'btn-1') {
        document.querySelector("#btn-1").innerHTML = 'view project  ' + '<i class="fa-solid fa-angles-right"></i>'
    } else if (event.target.id === 'btn-2') {
        document.querySelector("#btn-2").innerHTML = 'view project  ' + '<i class="fa-solid fa-angles-right"></i>'
    } else if (event.target.id === 'btn-3') {
        document.querySelector("#btn-3").innerHTML = 'view project  ' + '<i class="fa-solid fa-angles-right"></i>'
    } else if (event.target.id === 'btn-4') {
        document.querySelector("#btn-4").innerHTML = 'view project  ' + '<i class="fa-solid fa-angles-right"></i>'
    }

}


document.addEventListener('mouseover', changeIcon)
btnHTML()

