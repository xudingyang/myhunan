$(function () {
    // 从后台获取数据，回显到页面
    var _name = '从后台获取的姓名'
    var _nickName = '我是从后台获取的昵称'
    var _birthday = '1980-01-01' 
    var _carnumber = '湘F12345'
    var _sex = 'female'
    $('#name').val(_name)
    $('#nickname').val(_nickName)
    $('#birthday').val(_birthday)
    $('#carnumber').val(_carnumber)
    if (_sex === 'female') {
        $('#female_radio').attr('checked','checked')
    } else {
        $('#male_radio').attr('checked','checked')
    }

    $('.sub-btn').on('click',function () {
        var name = $.trim($('#name').val())
        var nickname = $.trim($('#nickname').val())
        var sex = $('input[name="sex"]:checked').val()
        var birthday = $.trim($('#birthday').val())
        var carnumber = $.trim($('#carnumber').val())
        if (name.length < 1) {
            alert('姓名不能为空')
            return
        }
        if (nickname.length < 1) {
            nickname = _nickName
        }
        if (birthday.length < 1) {
            if (confirm('填写生日可以享受生日优惠活动，确定不填写吗？')) {
                // 正常执行，啥也不做
            } else {
                return
            }
        } else {
            var reg = /^\d{4}-\d{1,2}-\d{1,2}$/
            if (reg.test(birthday)) {
                // 正常执行，啥也不做
            } else {
                alert('生日必须是1980-12-21的形式')
                return
            }
        }
        if (carnumber.length < 1) {
            alert('车牌号不能为空')
            return
        }
        var op = encodeURIComponent('更新个人资料')
        location.href = 'success-page.index?op=' + op
    })
})