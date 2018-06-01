$(function () {
    // 初始化下一步按钮文字
    var $currTypeTx = $('#curr_type')
    $('#buy_oil_count').text('')
    $currTypeTx.text('')
    $('.modal').on('click', function (e) {
        e.stopPropagation()
    })
    // 如果超出范围，不允许购买。进行弹窗提示。
    var outside = false
    if (outside) {
        $('.modal').show()
    } else {
        $('.modal').hide()
    }
    // 重新定位
    $('.relocation-btn').on('click', function () {
        location.reload()
    })
    // 去导航页面
    $('.go-station-btn').on('click', function () {
        location.href = 'gps.html'
    })

    // 油品种类
    var QIYOU = 0
        , CHAIYOU = 1
        , TIANRANQI = 2
    // 支付方式
    var JIAYOUKA = 0
        , WECHATPAY = 1
        , JIFEN = 2
    // 当前油种类
    var curerntOilType = QIYOU
    // 当前汽油的号数
    var qiYouNumber = 92
    // 当前支付方式
    var currentPayType = JIAYOUKA
    // 当前金额
    var currentMoney = 0

    // 汽油按钮
    var $qiYouBtn = $('.qi-you')
    // 柴油按钮
    var $chaiYouBtn = $('.chai-you')
    // 商品种类
    var $confirmOilType = $('#confirm_oil')
    // 汽油号数
    var $confirmOilNumber = $('#confirm_num')
    // 选择汽油弹窗
    var $oilModal = $('.oil-modal')
    // 修改汽油 按钮
    var $changeOilBtn = $('.js-change-oil')
    // 金额输入框
    var $moneyInput = $('#money_count')
    // 监听金额输入框
    $moneyInput.on('input',function () {
        currentMoney = $.trim($moneyInput.val())
        var price = 12.00
        var str = ''
        if (price > 0) {
            var canBuyOilCount = parseFloat($.trim($moneyInput.val()) / price)
            if (curerntOilType === QIYOU) {
                str = Math.floor(canBuyOilCount * 100) / 100 + '升'
                $currTypeTx.text('汽油，')
            } else if (curerntOilType === CHAIYOU) {
                str = Math.floor(canBuyOilCount * 100) / 100 + '升'
                $currTypeTx.text('柴油，')
            } else {
                str = Math.floor(canBuyOilCount * 100) / 100 + '升'
                $currTypeTx.text('，')
            }
            $('#buy_oil_count').text(str)
        }
    })
    // 点击汽油
    $qiYouBtn.click(function () {
        $qiYouBtn.addClass('current').siblings().removeClass('current')
        curerntOilType = QIYOU
        $oilModal.show()
        $confirmOilNumber.show()
        $changeOilBtn.show()
        $confirmOilType.text('汽油')
        $currTypeTx.text('汽油')
    })
    // 点击柴油
    $chaiYouBtn.click(function () {
        $chaiYouBtn.addClass('current').siblings().removeClass('current')
        curerntOilType = CHAIYOU
        $confirmOilType.text('柴油')
        $confirmOilNumber.hide()
        $changeOilBtn.hide()
        $currTypeTx.text('柴油')
    })
    // 点击 修改汽油
    $changeOilBtn.click(function () {
        if (curerntOilType === QIYOU) {
            $oilModal.show()
        }
    })
    $('.oil-m-item').click(function () {
        qiYouNumber = $(this).data('num')
        $(this).addClass('active').siblings().removeClass('active')
    })
    // 点击弹窗取消按钮
    $('.oil-btn-cancel').on('click', function () {
        $oilModal.hide()
    })
    // 点击弹窗确定按钮
    $('.oil-btn-ok').on('click', function () {
        $confirmOilNumber.text(qiYouNumber + '#')
        $oilModal.hide()
    })

    // 优惠券
    var $youHuiQuanCon = $('#pay_youhuiquan')
    // 点击  修改优惠券 按钮
    $('.js-change-yhq').on('click', function () {
        $('.yhq-modal').show()
    })
    // 点击 优惠券
    $('.yhq-item').on('click', function (e) {
        e.stopPropagation()
        $youHuiQuanCon.text($(this).find('i').text())
        $('.yhq-modal').hide()
    })
    // 点击优惠券详情
    $('.yhq-desc').on('click', function (e) {
        e.stopPropagation()
        location.href = 'youhuiquan-detail.html'
    })
    $('.yhq-modal').on('click', function () {
        $(this).hide()
    })

    // 支付方式
    var $payType = $('#pay_type')
    $('.change-paytype').click(function () {
        $('.pty-modal').show()
        if (currentPayType === JIAYOUKA) {
            $('.pty-m-item').eq(0).addClass('active').siblings().removeClass('active')
        } else if (currentPayType === WECHATPAY) {
            $('.pty-m-item').eq(1).addClass('active').siblings().removeClass('active')
        } else if (currentPayType === JIFEN) {
            $('.pty-m-item').eq(2).addClass('active').siblings().removeClass('active')
        }
    })
    $('.pty-m-item').eq(0).click(function () {
        currentPayType = JIAYOUKA
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.pty-m-item').eq(1).click(function () {
        currentPayType = WECHATPAY
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.pty-m-item').eq(2).click(function () {
        currentPayType  = JIFEN
        $(this).addClass('active').siblings().removeClass('active')
    })
    // 点击弹窗取消按钮
    $('.pty-btn-cancel').on('click', function () {
        $('.pty-modal').hide()
    })
    // 点击弹窗确定按钮
    $('.pty-btn-ok').on('click', function () {
        if (currentPayType === JIAYOUKA) {
            $payType.text('加油卡')
        } else if (currentPayType === WECHATPAY) {
            $payType.text('微信支付')
        } else if (currentPayType === JIFEN) {
            $payType.text('积分')
        }
        $('.pty-modal').hide()
    })

    // 点击下一步
    $('.next-step-btn').on('click', function () {
        currentMoney = $.trim($moneyInput.val())
        $('.buy-panel').hide()
        $('.buy-panel2').show()
    })
    // 点击 返回上一步
    $('.back-pre-step').on('click',function () {
        $('.buy-panel2').hide()
        $('.buy-panel').show()
    })
    // 点击去支付
    $('.pay-btn').on('click',function () {
        if (currentPayType === JIAYOUKA) {
            // 判断加油卡余额是否足够
            var restMoney = 200
            if (restMoney > 10) {
                // 输入密码
                $('.keyboard-modal').show()
            } else {
                if (confirm('加油卡余额不够，切换成微信支付')) {
                    currentPayType = WECHATPAY
                    $payType.text('微信支付')
                } else {
                    // 取消操作
                    return
                }
            }
        } else {
            // 调起微信支付 ................
            // code ...
        }
    })

    // 密码输入
    var pwdArr = []  // 存储密码的数组
    var pwdStr = ''  // 第一次输入的密码
    var pwdTabs = $('.pwd-con .pwd')
    var timer2 = null
    // 数字 按钮
    $('.keyboard-container .num').on('click', function () {
        if (pwdArr.length < 6) {
            var dataNum = $(this).data('num')
            if (typeof dataNum === 'number') {
                pwdArr.push(dataNum)
            }
        } else {
            return
        }
        for (var i = 0; i < pwdArr.length; i++) {
            pwdTabs.eq(i).text('●')
        }
        console.log(pwdArr);
        timer2 = setTimeout(function () {
            if (pwdArr.length === 6) {
                pwdStr = pwdArr.join('')
                alert(pwdStr)
                // 获取加油卡密码，发送请求，判断密码是否正确 .........................

                // 密码是否正确
                var isRight = true
                if (isRight) {
                    location.href = 'buy-page-success.html'
                } else {
                    alert('密码错误，请重新输入')
                    pwdArr.length = 0
                    pwdTabs.text('')
                }
            }
        }, 1000)
    })
    // 删除 按钮  ●
    $('.js-del').on('click', function () {
        if (pwdArr.length < 1) {
            return
        }
        pwdArr.pop()
        for (var i = 0; i < pwdArr.length; i++) {
            pwdTabs.eq(i).text('●')
        }
        for (var j = pwdArr.length; j < 6; j++) {
            pwdTabs.eq(j).text('')
        }
    })
})