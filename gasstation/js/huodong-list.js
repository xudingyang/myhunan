$(function () {
    if ($('.hd').length < 3) {
        $('.rules-container').addClass('position')
    } else {
        $('.rules-container').removeClass('position')
    }
    $('.hd-btn').click(function () {
        location.href = 'li-bao.html'
    })
})