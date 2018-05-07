$(function () {
    // 当前省份
    var currentProvice = '湘'
    $('.js-choose-provice').text(currentProvice)
    // 当前车牌
    var currentCarNumber = ''

    // 点击特殊车牌
    $('.special-number').on('click', function () {
        $('.special-number').hide()
        $('.common-number').show()
        $('.special-input-wrapper').show()
        $('.input-wrapper').hide()
    })

    // 点击普通车牌
    $('.common-number').on('click', function () {
        $('.special-number').show()
        $('.common-number').hide()
        $('.input-wrapper').show()
        $('.special-input-wrapper').hide()
    })

    // 点击省份简称
    $('.js-choose-provice').click(function () {
        $('.modal-wrapper').show()
    })

    // 监听正常车牌输入框
    $('#js_common_input').on('input',function () {
        var $this = $(this)
        var str = $(this).val().toUpperCase()
        $this.val(str)
        currentCarNumber = currentProvice + str
    })
    // 监听特殊车牌输入框
    $('#js_special_input').on('input',function () {
        var $this = $(this)
        var str = $(this).val().toUpperCase()
        $this.val(str)
        currentCarNumber = str
    })

    // 点击下一步按钮
    $('.js-next').on('click', function () {
        if (currentCarNumber.length < 7) {
            alert('请输入正确的车牌号码')
        } else {
            location.href = 'car-number-pay-next.html'
        }
    })

    // 点击删除历史记录按钮
    $('#clear_history').on('click', function () {

    })

    // 点击历史记录中的车辆号码
    $('.car').on('click', function () {
        var carNumber = $(this).text()
        var firtCharacter = carNumber.charAt(0)
        var provices = ['京', '津', '冀', '晋', '蒙', '辽', '吉', '黑', '沪', '苏', '浙', '皖', ' 闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂', '琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁', '新']
        var isSpecial = true
        // 开头不是省份简称，不是正常车牌
        for (var i = 0, iLength = provices.length; i < iLength; i++) {
            if (firtCharacter === provices[i]) {
                isSpecial = false
            }
        }
        // 超过了7个字符，也不是正常车牌
        if (carNumber.length > 7) {
            isSpecial = true
        }
        // 如果是特殊车牌
        if (isSpecial) {
            $('.special-number').hide()
            $('.common-number').show()
            $('.special-input-wrapper').show()
            $('.input-wrapper').hide()
            currentCarNumber = carNumber
            $('#js_special_input').val(currentCarNumber)
        } else {
            // 普通车牌
            $('.special-number').show()
            $('.common-number').hide()
            $('.input-wrapper').show()
            $('.special-input-wrapper').hide()
            currentProvice = firtCharacter
            $('.js-choose-provice').text(currentProvice)
            $('#js_common_input').val(carNumber.substring(1))
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