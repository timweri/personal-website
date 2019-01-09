(function() {
    $.each($('#name'), function(index, element) {
        $e = $(element)
        var titles = $e.find('.h2-title')
        var cur = -1

        function showNext() {
            ++cur
            titles.eq(cur % titles.length)
                .fadeIn(750)
                .delay(2500)
                .fadeOut(750, showNext)
        }

        showNext()
    })
})();