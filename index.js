let btnZero = document.querySelector(".btn-zero")
let btnDix = document.querySelector(".btn-dix")
let btnEffectuer = document.querySelector(".btn-effectuer")
let btnChanger = document.querySelector(".btn-changer")


btnEffectuer.addEventListener('click', effectuer )
btnChanger.addEventListener('click' , changer)
let a = 0
let b = 10


function effectuer(){

    a+=1
    b-=1
   
    btnZero.textContent=a
    btnDix.textContent=b

    let textA = document.createElement('p')
    let textB = document.createElement('p')

    btnZero.appendChild(textA)
    btnDix.appendChild(textB)



}

function changer(){


    btnZero.textContent=b
    btnDix.textContent=a
    a = b
    b = a

    console.log(b)
}
