var myChart1 = echarts.init(document.getElementById("county"));
var option1 = {
  xAxis: {
    data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
    axisTick: {
      alignWithLabel: true,
      inside: true,
    },
    axisLabel: {
      interval: 0,
      show: true,
    },
  },
  grid: {
    bottom: 30,
  },
  yAxis: [
    {
      name: "万人",
      type: "value",
      splitNumber: 2,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
  series: [
    {
      type: "line",
      data: [200, 300, 400, 380, 370, 330, 300, 280, 310, 400],
      showSymbol: false,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#1494D4",
          },
          {
            offset: 1,
            color: "#fff",
          },
        ]), // 区域线条渐变色
      },
    },
  ],
};
myChart1.setOption(option1);

var myChart2 = echarts.init(document.getElementById("moneyCount"));
var option2 = {
  grid: {
    bottom: 50,
    left: 60,
    top: 40,
    // right:10
  },
  xAxis: {
    type: "category",
    data: [
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
    ],
    axisPointer: {
      type: "shadow",
    },
    axisTick: {
      alignWithLabel: true,
      inside: true,
    },
    axisLabel: {
      interval: 0,
      show: true,
    },
  },
  yAxis: [
    {
      type: "value",
      name: "万美元",
      axisLabel: {
        formatter: "{value}",
      },
      // splitNumber: 2,
    },
    {
      type: "value",
      name: "%",
      min: 0,
      max: 100,
      interval: 20,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
  series: [
    {
      type: "bar",
      barWidth: 20,
      data: [260, 390, 390, 264, 287, 307, 375.6, 482.2, 387, 388, 300, 230],
      itemStyle: {
        color: "#1494D4",
      },
    },
    {
      type: "line",
      yAxisIndex: 1,
      showSymbol: false,
      tooltip: {
        valueFormatter: function (value) {
          return value + " °C";
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      itemStyle: {
        color: "#1494D4",
      },
    },
  ],
};
myChart2.setOption(option2);

var myChart3 = echarts.init(document.getElementById("payPrecent"));
var option3 = {
  legend: {
    bottom: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      label: {
        formatter: "{d}%",
      },
      data: [
        {
          value: 1048,
          name: "海军",
          itemStyle: {
            color: "#1AC8FB ",
          },
        },
        {
          value: 735,
          name: "陆军",
          itemStyle: {
            color: "#1893CC",
          },
        },
        {
          value: 580,
          name: "空军",
          itemStyle: {
            color: "#FFB264 ",
          },
        },
      ],
    },
  ],
};
myChart3.setOption(option3);

var myChart4 = echarts.init(document.getElementById("product"));
var option4 = {
  grid: {
    bottom: 30,
  },
  xAxis: {
    type: "category",
    data: ["米其林", "邓禄普", "普利河通", "德国马牌", "因特异"],
    axisTick: {
      alignWithLabel: true,
      inside: true,
    },
  },
  yAxis: {
    type: "value",
    splitNumber: 2,
  },
  tooltip: {
    trigger: "axis",
  },
  series: [
    {
      data: [
        {
          value: 200,
          itemStyle: {
            color: "#E8684A",
          },
        },
        {
          value: 140,
          itemStyle: {
            color: "#FFB264",
          },
        },
        {
          value: 150,
          itemStyle: {
            color: "#1893CC",
          },
        },
        {
          value: 180,
          itemStyle: {
            color: "#1AC8FB",
          },
        },
        {
          value: 130,
          itemStyle: {
            color: "#1AC8FB",
          },
        },
      ],
      type: "bar",
      barWidth: 20,
    },
  ],
};
myChart4.setOption(option4);

function chartShow() {
  var myChart5 = echarts.init(document.getElementById("zhuzhuang"));
  var option5 = {
    grid: {
      bottom: 50,
      left: 60,
      top: 40,
      // right:10
    },
    xAxis: {
      type: "category",
      data: [
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
      ],
      axisPointer: {
        type: "shadow",
      },
      axisTick: {
        alignWithLabel: true,
        inside: true,
      },
      axisLabel: {
        interval: 0,
        show: true,
      },
    },
    yAxis: {
      type: "value",
      name: "万美元",
      axisLabel: {
        formatter: "{value} ml",
      },
      splitNumber: 2,
    },
    tooltip: {
      trigger: "axis",
    },
    series: {
      type: "bar",
      barWidth: 20,
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
      itemStyle: {
        color: "#1494D4",
      },
    },
  };
  myChart5.setOption(option5);

  var myChart6 = echarts.init(document.getElementById("zhexian"));
  var option6 = {
    grid: {
      bottom: 50,
      left: 60,
      top: 40,
      // right:10
    },
    xAxis: {
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      axisTick: {
        alignWithLabel: true,
        inside: true,
      },
      axisLabel: {
        interval: 0,
        show: true,
      },
    },
    yAxis: [
      {
        name: "万美元",
        type: "value",
        splitNumber: 2,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    series: [
      {
        type: "line",
        data: [200, 300, 400, 380, 370, 330, 300, 280, 310, 400, 380, 350],
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#1494D4",
            },
            {
              offset: 1,
              color: "#fff",
            },
          ]), // 区域线条渐变色
        },
      },
    ],
  };
  myChart6.setOption(option6);
}

//第一个
var ul = document.getElementById("tab_ul");
var tabcon = document.getElementById("tab_con");
var lis = ul.querySelectorAll("li");
var items = tabcon.querySelectorAll(".item");
for (var i = 0; i < lis.length; i++) {
  // 1.给每一个标题li添加自定义属性
  lis[i].index = i;
  // 2.绑定事件
  lis[i].onclick = function () {
    for (var i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active");
      items[i].style.display = "none";
    }
    this.classList.add("active");
    var index = this.index;
    items[index].style.display = "block";
  };
}

//第二个
var ul2 = document.getElementById("tab_ul2");
var tabcon2 = document.getElementById("tab_con2");
var lis2 = ul2.querySelectorAll("li");
var items2 = tabcon2.querySelectorAll(".item");
for (var i = 0; i < lis2.length; i++) {
  // 1.给每一个标题li添加自定义属性
  lis2[i].index = i;
  // 2.绑定事件
  lis2[i].onclick = function () {
    for (var i = 0; i < lis2.length; i++) {
      lis2[i].classList.remove("active");
      items2[i].style.display = "none";
    }
    this.classList.add("active");
    var index = this.index;
    items2[index].style.display = "block";
  };
}

//第三个
var ul3 = document.getElementById("tab_ul3");
var tabcon3 = document.getElementById("tab_con3");
var p = ul3.querySelectorAll("p");
var div = tabcon3.querySelectorAll("div");
for (var i = 0; i < p.length; i++) {
  // 1.给每一个标题li添加自定义属性
  p[i].index = i;
  // 2.绑定事件
  p[i].onclick = function () {
    for (var i = 0; i < p.length; i++) {
      p[i].classList.remove("active");
      div[i].style.display = "none";
    }
    this.classList.add("active");
    var index = this.index;
    div[index].style.display = "block";
  };
}

//第四个（图标）
var ul4 = document.getElementById("switch");
var biao = document.getElementById("biao");
var span = ul4.querySelectorAll("span");
var div2 = biao.querySelectorAll("div");
for (var i = 0; i < span.length; i++) {
  // 1.给每一个标题li添加自定义属性
  span[i].index = i;
  // 2.绑定事件
  span[i].onclick = function () {
    for (var i = 0; i < span.length; i++) {
      div2[i].style.display = "none";
    }
    var index = this.index;
    div2[index].style.display = "block";

    console.log(index);
    if (index > 0) {
      chartShow();
    }
  };
}

var ovj = {
  Signing: {
    z: [1, 2, 3, 2, 5, 4, 5, 8, 6, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
  take: {
    z: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
  send: {
    z: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
  deliver: {
    z: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
  Collection: {
    z: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
  effect: {
    z: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
  delivered: {
    z: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
  unpaid: {
    z: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
  payments: {
    z: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
  fully: {
    z: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    t: [4, 5, 56, 32, 4, 12, 4, 15, 2, 5, 62, 45],
  },
};

function getValue() {
  var radio = document.getElementsByName("money");
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      var objname = radio[i].value;
    }
  }

  chartShowVal(objname);
}

function chartShowVal(val) {
  var myChart5 = echarts.init(document.getElementById("zhuzhuang"));
  var option5 = {
    grid: {
      bottom: 50,
      left: 60,
      top: 40,
      // right:10
    },
    xAxis: {
      type: "category",
      data: [
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
      ],
      axisPointer: {
        type: "shadow",
      },
      axisTick: {
        alignWithLabel: true,
        inside: true,
      },
      axisLabel: {
        interval: 0,
        show: true,
      },
    },
    yAxis: {
      type: "value",
      name: "万美元",
      axisLabel: {
        formatter: "{value} ml",
      },
      splitNumber: 2,
    },
    tooltip: {
      trigger: "axis",
    },
    series: {
      type: "bar",
      barWidth: 20,
      data: ovj[val].z,
      itemStyle: {
        color: "#1494D4",
      },
    },
  };
  myChart5.setOption(option5);

  var myChart6 = echarts.init(document.getElementById("zhexian"));
  var option6 = {
    grid: {
      bottom: 50,
      left: 60,
      top: 40,
      // right:10
    },
    xAxis: {
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      axisTick: {
        alignWithLabel: true,
        inside: true,
      },
      axisLabel: {
        interval: 0,
        show: true,
      },
    },
    yAxis: [
      {
        name: "万美元",
        type: "value",
        splitNumber: 2,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    series: [
      {
        type: "line",
        data: ovj[val].t,
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#1494D4",
            },
            {
              offset: 1,
              color: "#fff",
            },
          ]), // 区域线条渐变色
        },
      },
    ],
  };
  myChart6.setOption(option6);
}

function tobig() {
  var map = document.getElementById("map");
  var suoxiao = document.getElementById("suoxiao");
  var tobig = document.getElementById("tobig");
  var Report = document.getElementById("Report");
  var TopItem = document.getElementById("TopItem");

  Report.style.display = "none";
  TopItem.style.display = "none";
  tobig.style.display = "none";

  suoxiao.style.display = "block";
  map.style.height = "100%";
  map.style.backgroundImage = "url('./image/background_max.png')";
}
function suoxiao() {
  var map = document.getElementById("map");
  var suoxiao = document.getElementById("suoxiao");
  var tobig = document.getElementById("tobig");
  var Report = document.getElementById("Report");
  var TopItem = document.getElementById("TopItem");

  Report.style.display = "block";
  TopItem.style.display = "flex";
  tobig.style.display = "block";

  suoxiao.style.display = "none";
  map.style.height = "430px";
  map.style.backgroundImage = "url('./image/background_min.png')";
}

// var lunbul = document.getElementById('lunbui')
// lunbul.style.position = 'absolute'

var content = document.getElementById("content");
var content1 = document.getElementById("content1");
var fakeContent = document.getElementById("fakeContent");
var fakeContent1 = document.getElementById("fakeContent1");
var wrapper = document.getElementById("wrapper");
var wrapper1 = document.getElementById("wrapper1");

function roll(t, id, cid, fid) {
  fid.innerHTML = cid.innerHTML;
  // 开始无滚动时设为0
  id.scrollTop = 0;
  // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
  var timer = setInterval(() => {
    rollStart(id, cid, timer, fid);
  }, t);

  // 鼠标移入div时暂停滚动
  id.onmouseover = function () {
    clearInterval(timer);
  };

  // 鼠标移出div后继续滚动
  id.onmouseleave = function () {
    timer = setInterval(() => {
      rollStart(id, cid, timer, fid);
    }, t);
  };
}
// 开始滚动函数
function rollStart(id, cid, timer, fid) {
  // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
  if (id.scrollTop + 222 >= cid.offsetHeight + fid.offsetHeight) {
    id.scrollTop = 0;
    clearInterval(timer);
    timer = null;
    roll(50, id, cid, fid);
  } else {
    id.scrollTop++;
  }
}

window.onload = roll(50, wrapper, content, fakeContent);
window.onload = roll(50, wrapper1, content1, fakeContent1);

// window.onresize = function () {
//   var body = document.getElementsByTagName("body")[0];
//   var modelItems = document.getElementById("modelItems");
//   var modelItems1 = document.getElementById("modelItems1");
//   if (body.clientWidth < 1850) {
//     modelItems.style.display = "none";
//     if (body.clientWidth < 1400) {
//       modelItems1.style.display = "none";
//     } else {
//       modelItems1.style.display = "flex";
//     }
//   } else {
// 	  modelItems.style.display = "flex";
// 	  modelItems1.style.display = "flex";
//   }
// };
