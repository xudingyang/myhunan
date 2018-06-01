$(function () {
    // 如果没有实名认证，跳转到实名认证页面
    var shiMing = true
    if (!shiMing) {
        location.href = 'user-center-zhaq-smxx.html'
    }
    // 点击充值按钮
    $('#cz_huodong').on('click',function () {
        $('.huodong-list').toggle(500)
    })
    var $btn = $('.chongzhi-btn')
    var $check = $('#check')
    $('#chongzhi_money').on('input',function () {
        var money = $.trim($('#chongzhi_money').val())
        if (parseFloat(money) > 0 && $check.is(':checked')) {
            $btn.addClass('active').removeClass('disable').removeAttr('disabled')
        } else {
            $btn.addClass('disable').removeClass('active').attr('disabled','disabled')
        }
    })
    $check.on('change',function () {
        if ($check.is(':checked') && parseFloat($.trim($('#chongzhi_money').val()))) {
            $btn.addClass('active').removeClass('disable').removeAttr('disabled')
        } else {
            $btn.addClass('disable').removeClass('active').attr('disabled','disabled')
        }
    })
    $btn.click(function () {
        var str = $.trim($('#chongzhi_money').val())
        if (confirm('确定要充值'+str+'元?')) {
            location.href = 'success-page.index?op=' + encodeURIComponent('充值')
        } else {
            // 取消,do nothing
        }
    })
})