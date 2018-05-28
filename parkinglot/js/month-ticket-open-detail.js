$(function () {

    // 月票详情页面
    // 点击设置车辆
    $('.add-car-btn').on('click',function () {
        $('.car-list-modal').show()
    })

    // 选择车辆列表页面
    // 点取消
    $('#cancel_car_list_modal').on('click',function () {
        $('.car-list-modal').hide()
    })
    // 点确定
    $('#confirm_car_list_modal').on('click',function () {
        $('.car-list-modal').hide()
    })
    $('.add-more-car-btn').on('click',function () {
        $('.add-other-car-modal').show()
    })

    // 添加其他车辆 界面
    $('#close_add_car_modal').on('click',function () {
        $('.add-other-car-modal').hide()
    })
    $('.a-o-c-btn').on('click',function () {
        $('.add-other-car-modal').hide()
    })

    // 选择购买时长，改变到期时间
    $('#select_delta_time').on('change',function(){
        var count = $(this).val()
        var date = new Date()
        var endTime = date.setMonth((date.getMonth() + parseInt(count)), date.getDate())
        var endDate = new Date(endTime)
        console.log(endDate.getFullYear() + '年');
        console.log((endDate.getMonth() + 1) + '月');
        console.log(endDate.getDate() + '日');
    })
})