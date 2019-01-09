(function() {
    var controller = new ScrollMagic.Controller()

    var scene = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        duration: 0,
        pushFollowers: false
    })
    .setPin('#stars-bg')
    .addIndicators({name: "#stars-bg"})
    .addTo(controller)
    console.log('loading magicscroll script')
})();