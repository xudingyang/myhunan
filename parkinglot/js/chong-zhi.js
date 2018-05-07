$(function () {
    // 点击充值按钮
    $('#cz_huodong').on('click',function () {
        $('.huodong-list').toggle(500)
    })
    var $btn = $('.chongzhi-btn')
    $('#chongzhi_money').on('input',function () {
        var money = $.trim($('#chongzhi_money').val())
        if (parseFloat(money) > 0) {
            $btn.addClass('active').removeClass('disable').removeAttr('disabled')
        } else {
            $btn.addClass('disable').removeClass('active').attr('disabled','disabled')
        }
    })
    $btn.click(function () {
        var str = $.trim($('#chongzhi_money').val())
        if (confirm('确定要充值'+str+'元?')) {
            location.href = "chong-zhi-success.html"
        } else {
            // 取消,do nothing
        }
    })
})