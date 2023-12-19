//实现轮播效果
//保存当前焦点元素的索引
var current_index = 0;
//3000表示调用周期，以毫秒为单位，3000毫秒就是5秒
var timer = window.setInterval(()=>addChange(pic_div), 3000);

//获取所有banner图
var pic_div = Array.from(document.getElementById("banner_pic").children);
// 获取prev，next图标
var prev = document.getElementById("prev");
var next = document.getElementById("next");
//遍历元素
for (var i = 0; i < pic_div.length; i++) {
  //添加鼠标滑过事件
  pic_div[i].addEventListener("mouseover", function () {
    if (timer) {
      clearInterval(timer);
    }
    //遍历元素
    for (var j = 0; j < pic_div.length; j++) {
      //将当前索引对应的元素设为显示
      if (pic_div[j] == this) {
        current_index = j; //从当前索引位置开始
        pic_div[j].className = "current";
      } else {
        //将所有元素改变样式
        pic_div[j].className = "pic";
      }
    }
  });
  //鼠标移出事件
  pic_div[i].addEventListener("mouseout", function () {
    //启动定时器，恢复自动切换
    timer = setInterval(() => addChange(pic_div), 3000);
  });
}

function addChange(list) {
  //自增索引
  ++current_index;
  //当索引自增达到上限时，索引归0
  if (current_index == list.length) {
    current_index = 0;
    clearInterval(timer);
    timer = null;
  }
  for (var i = 0; i < list.length; i++) {
    if (i == current_index) {
      list[i].className = "current";
    } else {
      list[i].className = "pic";
    }
  }
}

function delChange(list) {
  //自减索引
  --current_index;
  //当索引自增达到上限时，索引归0
  if (current_index == list.length) {
    current_index = 0;
    clearInterval(timer);
    timer = null;
  }
  if (current_index < 0) {
    current_index = list.length - 1;
    clearInterval(timer);
    timer = null;
  }
  for (var i = 0; i < list.length; i++) {
    if (i == current_index) {
      list[i].className = "current";
    } else {
      list[i].className = "pic";
    }
  }
}
// 设置左右按钮显示隐藏
document.getElementById("banner_pic").addEventListener("mouseover", () => {
  prev.style.display = "block";
  next.style.display = "block";
});
next.addEventListener("mouseover", () => {
  prev.style.display = "block";
  next.style.display = "block";
});
prev.addEventListener("mouseover", () => {
  prev.style.display = "block";
  next.style.display = "block";
});
document.getElementById("banner_pic").addEventListener("mouseout", () => {
  prev.style.display = "none";
  next.style.display = "none";
});

// 添加左右点击事件
prev.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
  }
  // 向左减去
  delChange(pic_div);
});

next.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
  }
  // 向右减去
  addChange(pic_div);
});

// 轮播图2
var flexslider = Array.from(document.getElementById("flexslider").children);
//获取所有轮播按钮
var button_li = Array.from(document.getElementById("button").children);
for (var i = 0; i < button_li.length; i++) {
  //添加鼠标点击事件
  button_li[i].addEventListener("click", function () {
    //遍历元素
    for (var j = 0; j < flexslider.length; j++) {
      //将当前索引对应的元素设为显示
      if (button_li[j] == this) {
        current_index = j; //从当前索引位置开始
        button_li[j].className = "current";
        flexslider[j].className = "current";
      } else {
        //将所有元素改变样式
        flexslider[j].className = "pic";
        button_li[j].className = "but";
      }
    }
  })
}
