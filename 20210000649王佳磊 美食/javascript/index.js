window.onload = function () {
  //实现下拉菜单
  var test = $("#test")[0];
  var list = $("#list")[0];
  var span = $("#test span")[0];
  var a = $("#test a")[0];
  //鼠标移入时
  test.onmouseover = function () {
    a.style.color = "#ee3350";
    span.className = "span2";
    list.style.display = "block";
  };
  //鼠标移出时
  test.onmouseout = function () {
    a.style.color = "";
    span.className = "";
    list.style.display = "";
  };
  // //改变“联系客服”的CSS样式
  // var lx = $("#lx")[0];
  // var span1 = $("#lx span")[0];
  // var a1 = $("#lx a")[0];
  // lx.onmouseover = function () {
  //   a1.style.color = "#ee3350";
  //   span1.className = "span3";
  // };
  // lx.onmouseout = function () {
  //   a1.style.color = "";
  //   span1.className = "";
  // };
  //实现轮播效果
  //保存当前焦点元素的索引
  var current_index = 0;
  //5000表示调用周期，以毫秒为单位，5000毫秒就是5秒
  var timer = window.setInterval(autoChange, 5000);
  //获取所有轮播按钮
  var button_li = $("#button li");
  //获取所有banner图
  var pic_div = $("#banner_pic div");
  //遍历元素
  for (var i = 0; i < button_li.length; i++) {
    //添加鼠标滑过事件
    button_li[i].onmouseover = function () {
      //定时器存在时清除定时器
      if (timer) {
        clearInterval(timer);
      }
      //遍历元素
      for (var j = 0; j < pic_div.length; j++) {
        //将当前索引对应的元素设为显示
        if (button_li[j] == this) {
          current_index = j; //从当前索引位置开始
          button_li[j].className = "current";
          pic_div[j].className = "current";
        } else {
          //将所有元素改变样式
          pic_div[j].className = "pic";
          button_li[j].className = "but";
        }
      }
    };
    //鼠标移出事件
    button_li[i].onmouseout = function () {
      //启动定时器，恢复自动切换
      timer = setInterval(autoChange, 5000);
    };
  }
  function autoChange() {
    //自增索引
    ++current_index;
    //当索引自增达到上限时，索引归0
    if (current_index == button_li.length) {
      current_index = 0;
    }
    for (var i = 0; i < button_li.length; i++) {
      if (i == current_index) {
        button_li[i].className = "current";
        pic_div[i].className = "current";
      } else {
        button_li[i].className = "but";
        pic_div[i].className = "pic";
      }
    }
  }
 
  $("#sidebar").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  })
};
// 返回顶部
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $("#sidebar").slideDown()
  } else {
    $("#sidebar").slideUp();
  }
})


