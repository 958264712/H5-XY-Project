showZoomImg(".zoomImgBox", "text");
/**
 * Created by WangCheng on 2020/9/24.
 */
function showZoomImg(domName, model) {
  var len = 0; //预览总图片数默认为零
  var domImg; //img dom
  var arrPic = new Array(); //定义一个数组src
  var arrName = new Array(); //定义一个数组name
  var num = 0; //当前预览的
  var numNow = 1; //当前预览序号,最小为1
  var leftPoint; //向左移动范围
  var rightPoint; //右移动范围
  var spin_n = 0; //旋转角度
  var zoom_n = 1; //缩放 放大
  var ifshow = false; //是否显示隐藏
    
  showModel(model); //判断显示方式

  function showModel(model) {
    if (model == "img") {
      //图片直接查看
      $("body").on("click", domName, function () {
        domImg = $(this).parents(".zoomImgBox").find(domName);
        len = domImg.length;
        arrPic = [];
        arrName = [];
        for (var i = 0; i < len; i++) {
          arrPic[i] = domImg.eq(i).attr("src"); //将所有img路径存储到数组中
          if (domImg.eq(i).attr("alt")) {
            arrName[i] = domImg.eq(i).attr("alt");
          } else {
            arrName[i] = "图片" + (i + 1);
          }
        }
        var img_index = domImg.index(this); //获取点击的索引值
        num = img_index;
        numNow = num + 1;

        addMaskLater(); //添加弹出dom
      });
    } else if (model == "text") {
      $("body").on("click", domName, function () {
        // domImg = $(this).children(".zoomImg-hide-box").find("img");
        domImg = $(domName).find("img");
        len = domImg.length;
        if (len < 1) {
          layui.use("layer", function () {
            var layer = layui.layer;
            layer.msg("暂未上传资料图片");
          });
          return;
        }
        num = 0;
        numNow = 1;
        arrPic = [];
        arrName = [];
        for (var i = 0; i < len; i++) {
          arrPic[i] = domImg.eq(i).attr("src"); //将所有img路径存储到数组中
          if (domImg.eq(i).attr("data-caption")) {
            arrName[i] = domImg.eq(i).attr("data-caption");
          } else {
            arrName[i] = $(".zoom-title").text();
          }
        }
        addMaskLater();
      });
    }
  }

  //给body添加弹出层的html
  function addMaskLater() {
    var maskBg =
      '<div class="mask-layer">' +
      '<div class="mask-layer-black"></div>' +
      '<div class="mask-layer-container">' +
      '<div class="mask-layer-imgbox"></div>' +
      '<div class="mask-layer-close">X</div>' +
      '<div class="mask-layer-del">-</div>' +
      '<div class="mask-layer-add">+</div>' +
      '<div class="mask-layer-R">R</div>' +
      '<div class="img-pre"></div>' +
      '<div class="img-next"></div>' +
      "<ul class=\"contextmenu\" id='contextmenu'>" +
      "<li>" +
      '<a class="downimg">下载图片</a>' +
      "</li>" +
      "<li>" +
      '<a class="clockwise">顺时针旋转90°</a>' +
      "</li>" +
      "<li>" +
      '<a class="counterClockwise">逆时针旋转90°</a>' +
      "</li>" +
      "</ul>" +
      "</div>" +
      "</div>";
    $("body").append(maskBg);

    if (len > 1) {
      showSmall(); //加载缩略图
    } else {
      $(".img-pre").css("display", "none");
      $(".img-next").css("display", "none");
    }

    showImg(); //图片加载
    showCtrl(); //插件操作
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (
      /ipad|iphone|midp|android|Nokia|SymbianOS|Symbian|Windows Phone|MAUI|HarmonyOs|CnmiOs|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(
        sUserAgent
      )
    ) {
      var $div_close = $(".mask-layer .mask-layer-close");
      var $div_del = $(".mask-layer .mask-layer-del");
      var $div_add = $(".mask-layer .mask-layer-add");
      var $div_R = $(".mask-layer .mask-layer-R");
      var $div_imgName = $(".mask-layer-imgbox .mask-layer-imgName");
      let list = [$div_close, $div_del, $div_add, $div_R];
      list.map((item) => {
        item.css({right:'-30px'})
      })
      var $div_img = $(".mask-layer");
      $div_img.on("touchstart", (e) => {
        if (e.target.className !== "mask-layer-R" && e.target.className !== "mask-layer-add" && e.target.className !== "mask-layer-del") {
          showdome(list, $div_imgName);
        }
      });
      twoshowSmall();
    } else {
      var $div_imgName = $(".mask-layer-imgbox .mask-layer-imgName");
      $div_imgName.css({bottom:'0px'})
    }

  }

  /*加载图片 及图片操作*/
  function showImg() {
    $(".mask-layer-imgbox").empty();
    var imgCont =
      '<div class="mask-layer-imgName">' +
      arrName[num] +
      "</div>" +
      '<div class="layer-img-box"><img src="' +
      arrPic[num] +
      '" alt=""></div>';
    $(".mask-layer-imgbox").append(imgCont);
    imgInit(); //图片操作
  }

  /*插件操作*/
  function showCtrl() {
    //上一张
    $(".img-pre").on("click", function () {
      num--;
      if (num == -1) {
        num = len - 1;
      }
      showImg();
      showSmallThis(); //显示当前选中
    });
    //下一张
    $(".img-next").on("click", function () {
      num++;
      if (num == len) {
        num = 0;
        boxReset();
      }
      showImg();
      showSmallThis(); //显示当前选中
    });
    /*关闭*/
    $(".mask-layer-close").click(function () {
      $(".mask-layer").remove();
    });
    // 缩小5%
    $(".mask-layer-del").click(function () {
      // 获取宽度
      zoom_n -= 0.05
      $(".mask-layer-imgbox img").css({
        transform:
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-moz-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-ms-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-o-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-webkit-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
      });
    });
    // 放大5%
    $(".mask-layer-add").click(function () {
      // 获取宽度
      zoom_n += 0.05;
      $(".mask-layer-imgbox img").css({
        transform:
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-moz-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-ms-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-o-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-webkit-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
      });
    });
    // 复位
    $(".mask-layer-R").click(function () {
      zoom_n=1
      $(".mask-layer-imgbox img").css({
        transform:
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-moz-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-ms-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-o-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-webkit-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
      });
    })
    /*缩略图操作方法*/
    if (arrPic.length > 1) {
      showSmallThis(); //显示当前选中
    }
    /*缩略图当前*/
    function showSmallThis() {
      //显示当前选中的小图
      $(".mask-small-img").removeClass("onthis");
      $($(".mask-small-img")[num]).addClass("onthis");
      allowShow();
    }

    /*小图点击切换*/
    $(".mask-small-img").on("click", function () {
      num = $(".mask-small-img").index(this);
      showImg();
      showSmallThis(); //显示当前选中
    });

    /*box-go-left 内容向右移动*/
    $(".box-go-left").on("click", function () {
      boxGoRight();
    });

    $(".box-go-right").on("click", function () {
      boxGoLeft();
    });

    function boxGoLeft(intTime) {
      //向左移动
      intTime ? intTime : (intTime = 1);
      if (leftPoint > 0) {
        $(".small-img-box").animate(
          {
            left: "-=" + 630 * intTime,
          },
          500
        );
        leftPoint = leftPoint - intTime;
        rightPoint = rightPoint + intTime;
      }
    }

    function boxGoRight() {
      //向右移动
      if (rightPoint > 0) {
        $(".small-img-box").animate(
          {
            left: "+=630",
          },
          500
        );
        leftPoint++;
        rightPoint--;
      }
    }

    function allowShow() {
      //保持选中的图片在容器中能看到
      /*跟随切换*/
      var boxLeft = $(".small-content").offset().left; //盒子距离顶部
      var thisLeft = $(".mask-small-img.onthis").offset().left; //当前选中图片距离顶部
      var intTime = Math.floor((thisLeft - boxLeft) / 630);
      if (thisLeft - boxLeft >= 630) {
        boxGoLeft(intTime);
      } else if (thisLeft < boxLeft) {
        boxGoRight();
      } else {
        //console.log('不需移动')
      }
    }
    /*复位*/
    function boxReset() {
      $(".small-img-box").animate(
        {
          left: "0",
        },
        500
      );
      leftPoint = Math.ceil(arrPic.length / 5) - 1;
      rightPoint = 0;
    }
    $(".clockwise").click(function () {
      clockwise(); //顺时针旋转
    });
    $(".counterClockwise").click(function () {
      counterClockwise(); //逆时针旋转
    });
    /*顺时针旋转*/
    function clockwise() {
      spin_n += 90;
      $(".mask-layer-imgbox img").css({
        transform:
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-moz-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-ms-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-o-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-webkit-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
      });
    }
    /*逆时针旋转*/
    function counterClockwise() {
      spin_n -= 90;
      $(".mask-layer-imgbox img").css({
        transform:
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-moz-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-ms-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-o-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-webkit-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
      });
    }
    rightMenu(".mask-layer-container");

    function rightMenu(dom) {}
  }

  /*图片操作方法*/
  function imgInit() {
    zoom_n = 1; //重置缩放比例
    /*图片拖拽*/
    var $div_img = $(".layer-img-box img");
    var $div_layer = $(".mask-layer");

    //绑定鼠标左键按住事件
    $div_img.bind("mousedown", function (event) {
      event.preventDefault && event.preventDefault(); //去掉图片拖动响应
      //获取需要拖动节点的坐标
      var offset_x = $(this)[0].offsetLeft; //x坐标
      var offset_y = $(this)[0].offsetTop; //y坐标
      //获取当前鼠标的坐标
      var mouse_x = event.pageX;
      var mouse_y = event.pageY;
      //绑定拖动事件
      //由于拖动时，可能鼠标会移出元素，所以应该使用全局（document）元素
      $(".layer-img-box").bind("mousemove", function (ev) {
        // 计算鼠标移动了的位置
        var _x = ev.pageX - mouse_x;
        var _y = ev.pageY - mouse_y;
        //设置移动后的元素坐标
        var now_x = offset_x + _x + "px";
        var now_y = offset_y + _y + "px";
        //改变目标元素的位置
        $div_img.css({
          top: now_y,
          left: now_x,
        });
      });
      //当鼠标左键松开，接触事件绑定
      $(".layer-img-box").bind("mouseup", function () {
        $(".layer-img-box").unbind("mousemove");
      });
    });
    //绑定触屏事件
    $div_img.bind("touchstart", function (event) {
      event.preventDefault && event.preventDefault(); //去掉图片拖动响应
      //获取需要拖动节点的坐标
      var offset_x = $(this)[0].offsetLeft; //x坐标
      var offset_y = $(this)[0].offsetTop; //y坐标
      //获取当前鼠标的坐标
      var mouse_x = event.originalEvent.touches[0].pageX;
      var mouse_y = event.originalEvent.touches[0].pageY;
      //绑定拖动事件
      //由于拖动时，可能鼠标会移出元素，所以应该使用全局（document）元素
      $(".layer-img-box").bind("touchmove", function (ev) {
        // 计算鼠标移动了的位置
        var _x = ev.originalEvent.touches[0].pageX - mouse_x;
        var _y = ev.originalEvent.touches[0].pageY - mouse_y;
        //设置移动后的元素坐标
        var now_x = offset_x + _x + "px";
        var now_y = offset_y + _y + "px";
        //改变目标元素的位置
        $div_img.css({
          top: now_y,
          left: now_x,
        });
      });
      //当鼠标左键松开，接触事件绑定
      $(".layer-img-box").bind("touchend", function () {
        $(".layer-img-box").unbind("touchmove");
      });
    });
    //绑定鼠标滚轮缩放图片
    $div_layer.bind("mousewheel DOMMouseScroll", function (e) {
      e = e || window.event;
      var delta = e.originalEvent.wheelDelta || e.originalEvent.detail;
      var dir = delta > 0 ? "down" : "up";
      zoomImg(this, dir);
      return false;
    });

    //鼠标滚轮缩放图片
    function zoomImg(o, delta) {
      if (delta == "up") {
        zoom_n -= 0.2;
        zoom_n = zoom_n <= 0.2 ? 0.2 : zoom_n;
      } else {
        zoom_n += 0.2;
      }
      $(".mask-layer-imgbox img").css({
        transform:
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-moz-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-ms-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-o-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
        "-webkit-transform":
          "translate(-50%, -50%) rotate(" +
          spin_n +
          "deg) scale(" +
          zoom_n +
          ")",
      });
    }
  }

  /*缩略图显示*/
  function showSmall() {
    leftPoint = Math.ceil(arrPic.length / 6) - 1;
    rightPoint = 0;

    $(".mask-layer-imgbox").addClass("has-small");
    var sDom =
      "<div class='small-content'><div class='small-img-box'></div></div>";
    $(".mask-layer-container").append(sDom);
    /*添加缩略图显示*/
    for (var i = 0; i < arrPic.length; i++) {
      $(".small-img-box").append(
        '<img class="mask-small-img" src=' + arrPic[i] + ">"
      );
    }
    if (arrPic.length > 6) {
      //大于六张出现左右移动按钮
      $(".small-img-box").width(Math.ceil(arrPic.length / 6) * 630);
      $(".small-content").append(
        '<span class="box-go-left"></span><span class="box-go-right"></span>'
      );
    }
  }

  // 手机端时隐藏
  function showdome(list,dome) {
    if (ifshow) {
      list.map(item => {
        item.css({right:'-30px'})
      })
      dome.css({ bottom: '-30px' })
      ifshow = false
    } else {
      list.map((item) => {
        item.css({ right: "20px" });
      });
      dome.css({ bottom: "0px" });
      ifshow = true
    }
    
  }
  // 双指缩放图片
  function twoshowSmall() {
    var eleImg = $(".mask-layer-imgbox img");
    var store = {
      scale: 1,
    };
    // 缩放事件的处理
    eleImg.on("touchstart", function (event) {
      var touches = event.originalEvent.touches;
      var events = touches[0];
      var events2 = touches[1];

      event.preventDefault();

      // 第一个触摸点的坐标
      store.pageX = events.pageX;
      store.pageY = events.pageY;

      store.moveable = true;

      if (events2) {
        store.pageX2 = events2.pageX;
        store.pageY2 = events2.pageY;
      }

      store.originScale = store.scale || 1;
    });
    document.addEventListener("touchmove", function (ev) {
      if (!store.moveable) {
        return;
      }
      ev.preventDefault();
      var touches = ev.touches;
      var events = touches[0];
      var events2 = touches[1];
      // 双指移动
      if (events2) {
        // 第2个指头坐标在touchmove时候获取
        if (!store.pageX2) {
          store.pageX2 = events2.pageX;
        }
        if (!store.pageY2) {
          store.pageY2 = events2.pageY;
        }

        // 获取坐标之间的举例
        var getDistance = function (start, stop) {
          return Math.hypot(stop.x - start.x, stop.y - start.y);
        };
        // 双指缩放比例计算
        var zoom =
          getDistance(
            {
              x: events.pageX,
              y: events.pageY,
            },
            {
              x: events2.pageX,
              y: events2.pageY,
            }
          ) /
          getDistance(
            {
              x: store.pageX,
              y: store.pageY,
            },
            {
              x: store.pageX2,
              y: store.pageY2,
            }
          );
        // 应用在元素上的缩放比例
        var newScale = store.originScale * zoom;
        // 最大缩放比例限制
        if (newScale > 3) {
          newScale = 3;
        }
        // 记住使用的缩放值
        store.scale = newScale;
        // 图像应用缩放效果
        eleImg.style.transform = "scale(" + newScale + ")";
      }
    });

    document.addEventListener("touchend", function () {
      store.moveable = false;
      delete store.pageX2;
      delete store.pageY2;
    });
    document.addEventListener("touchcancel", function () {
      store.moveable = false;
      delete store.pageX2;
      delete store.pageY2;
    });
  }
}
