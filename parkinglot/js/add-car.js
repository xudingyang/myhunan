$(function () {
    // 当前省份
    var currentProvice = '湘'
    $('.js-choose-provice').text(currentProvice)
    // 当前车牌
    var currentCarNumber = ''


    // 点击省份简称
    $('.js-choose-provice').click(function () {
        $('.modal-wrapper').show()
    })

    // 监听车牌输入框
    $('#js_common_input').on('input',function () {
        var $this = $(this)
        var str = $(this).val().toUpperCase()
        $this.val(str)
        currentCarNumber = currentProvice + str
    })

    // 点击登记按钮
    $('.sub-btn').click(function () {
        if (currentCarNumber.length < 7) {
            alert('请输入正确的车牌')
        } else {
            location.href = 'add-car-success.html'
        }
    })

    // 点击弹出界面空白区域
    $('.place-box').on('click', function () {
        $('.modal-wrapper').hide()
    })

    // 点击弹出界面省份
    $('.provice-item').on('click', function () {
        var provice = $(this).text()
        currentProvice = provice
        $('.js-choose-provice').text(currentProvice)
        $('.modal-wrapper').hide()
    })
})