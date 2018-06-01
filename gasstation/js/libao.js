$(function () {
    // 检测是否注册了
    var isRegisted = true
    if (isRegisted === false) {
        location.href = 'register.html'
        return
    }
    var hasLiBao = false
    // 没有领取礼包
    if (!hasLiBao) {
        $('.youhuiquan-wrapper').hide()
        $('.empty-wrapper').show()
    }
    // 有礼包
    else {
        $('.empty-wrapper').hide()
        $('.youhuiquan-wrapper').show()
    }

    $('.empty-btn').on('click',function () {
        $('.empty-wrapper').hide()
        $('.youhuiquan-wrapper').show()
    })
    $('#tel_num').text($('#tel_num').text().replace(/(\d{3})\d{4}(\d{4})/,'$1****$2'))

    $('.mask').on('click',function (e) {
        e.stopPropagation()
    })
})