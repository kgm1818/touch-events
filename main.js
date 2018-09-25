var mtEvents = require('./dist/event.bundle.js');
var tapContainer = document.querySelector('.tap')
var longtapContainer = document.querySelector('.longtap')
var dbtapContainer = document.querySelector('.dbtap')
var swipeContainer = document.querySelector('.swipe')
var dragContainer = document.querySelector('.drag')
var scaleContainer = document.querySelector('.scale')
var rotateContainer = document.querySelector('.rotate')
mtEvents(tapContainer, 'tap', function (e){
   return tapContainer.classList.toggle('grayscale')
})
mtEvents(longtapContainer, 'longtap', e => longtapContainer.classList.toggle('grayscale'))
mtEvents(dbtapContainer, 'dbtap', e => dbtapContainer.classList.toggle('scale-2'))
mtEvents(swipeContainer, 'swipe', e => swipeContainer.style.transform = `matrix(1, 0, 0, 1, ${e.displacement.x}, ${e.displacement.y})`)
var dragDisX = 0
var dragDisY = 0
mtEvents(dragContainer, 'drag', e => {
    dragContainer.style.transform = `matrix(1, 0, 0, 1, ${dragDisX += e.displacement.x}, ${dragDisY += e.displacement.y})`
})
dragContainer.addEventListener('touchend', e => dragContainer.style.transform = `matrix(1, 0, 0, 1, 0, 0)`)
mtEvents(scaleContainer, 'scale', e => scaleContainer.style.transform = `matrix(${e.scale}, 0, 0, ${e.scale}, 0, 0)`)
scaleContainer.addEventListener('touchend', e => scaleContainer.style.transform = "")
mtEvents(rotateContainer, 'rotate', e => rotateContainer.style.transform = `rotate(${e.rotate.dirt ? e.rotate.rotateAngle : '-' + e.rotate.rotateAngle}deg)`)
rotateContainer.addEventListener('touchend', e => rotateContainer.style.transform = "")