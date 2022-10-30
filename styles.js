const li = document.querySelectorAll(".card__question");
const svg = document.querySelectorAll(".card__svg");

li.forEach((element) => {
  element.addEventListener('click', () => {

    if (element.classList.contains('active')) {
      element.classList.remove('active')
      element.classList.remove('pad')
    } else {
      li.forEach((e) => { 
        e.classList.remove('active')
        e.classList.remove('pad')
      })
      element.classList.add('active')
      element.classList.add('pad')
    }

    svg.forEach((btn) => {
      if(btn.classList.contains('rotate')) {
        btn.classList.remove('rotate')
      } else {
        btn.classList.add('rotate')
      }
    })
  })
})