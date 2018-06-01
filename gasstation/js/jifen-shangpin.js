$(function () {
    $('.item').click(function () {
        // 如果积分不够
        var price = 20
        var scroe = 10
        if (scroe < price) {
            // 取消操作
            return
        }
        var name = $('.title').text()
        if (confirm('确定用' + price + '积分兑换' + name + '吗')) {
            location.href = 'jifen-shangpin-pay.html'
        }
    })
})