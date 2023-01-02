function rain(){
  let amount = 200 ;
  let body = document.querySelector('body');
  let i = 0;
  while( i < amount){
    let drop = document.createElement("i")
    let size = Math.random() * 6
    let posx = Math.floor(Math.random() * window.innerWidth)
    let delay = Math.random() * -20
    let duration = Math.random() * -20
    drop.style.width = 0.2 + size + "px"
    drop.style.left = posx + "px"
    drop.style.animationDelay = delay + "s"
    drop.style.animationDirection - 1 + duration + "s"
    /* drop.className = "fa fa-circle-o-notch"  << fazer icone mudar  */
    body.appendChild(drop)
    i++
  }
    }
    
  rain()

 