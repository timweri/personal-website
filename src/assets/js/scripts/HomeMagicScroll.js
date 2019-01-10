(function() {
    var controller = new ScrollMagic.Controller()

    var tweenScrollDown = TweenMax.to('.h3-scroll-down', 1, { opacity: 0 })

    var sceneScrollDown = new ScrollMagic.Scene({
        duration: "15%",
        triggerHook: 'onLeave'
    })
    .setTween(tweenScrollDown)
    .addIndicators({name: "h3-scroll-down"})
    .addTo(controller)
})();