$(function () {
    // 点击充值按钮
    $('#cz_huodong').on('click',function () {
        $('.huodong-list').toggle(500)
    })
    var $btn = $('.chongzhi-btn')
    // $('#chongzhi_money').on('input',function () {
    //     var money = $.trim($('#chongzhi_money').val())
    //     if (parseFloat(money) > 0) {
    //         $btn.addClass('active').removeClass('disable').removeAttr('disabled')
    //     } else {
    //         $btn.addClass('disable').removeClass('active').attr('disabled','disabled')
    //     }
    // })
    $btn.click(function () {
        var str = $('#money_count').text()
        if (confirm('确定要充值'+str+'元?')) {
            location.href = "chong-zhi-success.html"
        } else {
            // 取消,do nothing
        }
    })


    // 点击充值输入框，弹出键盘
    $('#chongzhi_money').click(function(){
        $('.keyboard-modal').show()
    })
    // 点击键盘的隐藏按钮
    $('.key-hide-con').on('click',function(){
        $('.keyboard-modal').hide()
    })
    // 点击键盘的数字
    var moneyCountStr = ''
    $('.num').on('click',function () {
        var dataNum = $(this).data('num')
        moneyCountStr = moneyCountStr + dataNum
        $('#place_txt').hide()
        $('#money_count').show().text(moneyCountStr)
    })
    // 点完成键
    $('.had-done').on('click',function () {
        $('.keyboard-modal').hide()
    })
    // 点击删除
    $('.js-del').on('click',function () {
        moneyCountStr = moneyCountStr.substring(0,moneyCountStr.length - 1)
        $('#money_count').text(moneyCountStr)
        if (moneyCountStr.length < 1) {
            $('#place_txt').show()
            $('#money_count').text(moneyCountStr).hide()
        }
    })
})