$(function () {
  $("#slider").responsiveSlides({
    auto: true,
    nav: true,
    speed: 800,
    namespace: "callbacks",
    pager: true,
  });
  //实现轮播效果
  //保存当前焦点元素的索引
  var current_index = 0;
  //以毫秒为单位，800毫秒
  var timer = window.setInterval(autoChange, 800);
  //获取所有轮播按钮
  //获取所有banner图
  var pic_div = $("#slider li");
 
timer()
  function autoChange() {
    //自增索引
    ++current_index;
    //当索引自增达到上限时，索引归0
    if (current_index == pic_div.length) {
      current_index = 0;
    }
    for (var i = 0; i < pic_div.length; i++) {
      if (i == current_index) {
        pic_div[i].className = "current";
      } else {
        pic_div[i].className = "pic";
      }
    }
  }
});
