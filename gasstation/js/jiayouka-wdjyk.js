$(function () {
    $('#xgkjymm').click(function () {
        location.href = 'user-center-zhaq-kjymm2.html'
    })
    $('#chongzhi_btn').click(function () {
        location.href = 'chong-zhi.html'
    })
    $('#zcsp').on('click',function () {
        $('.modal-support-goods').show()
    })
    $('#zcyz').on('click',function () {
        $('.modal-support-station').show()
    })
    $('#jyjl').on('click',function () {
        location.href = 'jiayouka-jyjl.html'
    })
    $('.js-guanbi1').on('click',function () {
        $('.modal-support-goods').hide()
    })
    $('.js-guanbi2').on('click',function () {
        $('.modal-support-station').hide()
    })
})