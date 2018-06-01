$(function () {
    $('#tel_num').text($('#tel_num').text().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'))
    $('#qr_img').click(function () {
        $('.qr-modal').show()
    })
    $('.qr-modal').on('click',function (e) {
        e.stopPropagation()
        $(this).hide()
    })
})