const aggiungiTask = () => {
  //1. prendere valore dell'input
  let inputHTML = document.querySelector("input")
  //2. prendere l'ul
  let ul = document.querySelector("ul")
  //3. creare l'li
  //! versione innerHTML
  let nuovoLi = `<li onclick='fatto(event)'>   ${inputHTML.value}   </li>`
  console.log(nuovoLi)
  //4. inserire nell'ul
  //   let pippo = 15
  //   pippo = 17
  ul.innerHTML += nuovoLi

  //! esempio createElement
//   let nuovoLi = document.createElement("li")
//   nuovoLi.innerText = inputHTML.value
//   nuovoLi.onclick = fatto //evento passato automaticamente
// //   nuovoLi.addEventListener("click", fatto)
// //   nuovoLi.addEventListener("click", (ev)=> fatto(ev))

//   ul.appendChild(nuovoLi)
}


// somma(3,4)


// const somma = (num1,num2) => {

// }

const fatto = (clickEvent) => {
    // clickEvent.target.remove() //se volete fare remove 
    clickEvent.target.style.textDecoration = "line-through"
}