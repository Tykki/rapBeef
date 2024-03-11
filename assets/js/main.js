const home = document.querySelector('#home')
const pac = document.querySelector('#bnp')
const drake = document.querySelector('#dnm')
const pusha = document.querySelector('#pnd')
const meg = document.querySelector('#mnn')
const left = document.querySelectorAll('.left-side')

const hide = () => {
  home.classList.add('hide')
  pac.classList.add('hide')
  // drake.classList.add('hide')
  pusha.classList.add('hide')
  meg.classList.add('hide')
}

const handleMove = e => {
  left.forEach(page => {
    page.style.width = `${e.clientX / window.innerWidth * 100}%`;

  })
}

const hashHandler = (hash) => {
  if (!hash) {
   return
  }
console.log(hash)
  hide()
   if (hash === "#biggiePac"){
       pac.classList.remove('hide')
      //  navTitle.innerHTML = 'South Loop'
  } else if (hash === "#drakeMeek"){
      drake.classList.remove('hide')
      // navTitle.innerHTML = 'North West'
  } else if (hash === "#drakePusha"){
      pusha.classList.remove('hide')
      // navTitle.innerHTML = 'Downtown'
  } else if (hash === "#nickiMeg"){
      meg.classList.remove('hide')
  } else if (hash === "#home"){
      home.classList.remove('hide')
   } else {
   location.hash = '#home'
  //  location.reload()
 }
}

window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
hashHandler(window.location.hash)
document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);