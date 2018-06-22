$(function () {

    // 点击单选按钮
    $('.checked-con').click(function () {
        var $this = $(this)
        if ('selected' === $this.data().selected) {
            $this.data().selected = ''
            $this.find('img').attr('src','images/no_checked.png')
         } else {
            $this.data().selected = 'selected'
            $this.find('img').attr('src','images/had_checked.png')
        }
    })

    // 点击  添加新乘客按钮
    $('.add-new-passenger').click(function () {
        location.href = 'passengers-edit.html'
    })

    // 点击确定按钮
    $('.confirm-btn').click(function () {
        location.href = 'buy-ticket-fill-order.html'
    })
})