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
})