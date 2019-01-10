(function() {
    var controller = new ScrollMagic.Controller()

    var tweenScrollDown = TweenMax.fromTo('.h3-scroll-down', 0.5, { opacity : 1 }, { opacity: 0 })

    var sceneScrollDown = new ScrollMagic.Scene({
        duration: "10%",
        triggerElement: "#name",
        offset : 300
    })
    .setTween(tweenScrollDown)
    .addIndicators({name: "h3-scroll-down"})
    .addTo(controller)
})();