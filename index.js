var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json'   
})

bm.addEventListener("mouseenter", function () {
  animation.play();
  animation.loop = true;
});
    
    /*
    bm.addEventListener("mouseleave", function () {
    animation.stop();
    });
    */

bm.addEventListener("mouseleave", function () {
  animation.loop = false;
});