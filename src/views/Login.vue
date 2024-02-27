<template>
  <div id="app">
    <div class="ywtop">
      <div class="ywtop_con">
        <div class="nav">
      <ul>
        <li><a href="https://www.mayiwsk.com/">首页</a></li>
        <li>
          <a href="https://www.mayiwsk.com/modules/article/bookcase.php"
            >我的书架</a
          >
        </li>
        <li>
          <a href="https://www.mayiwsk.com/xuanhuanxiaoshuo/">玄幻小说</a>
        </li>
        <li><a href="https://www.mayiwsk.com/xiuzhenxiaoshuo/">修真小说</a></li>
        <li><a href="https://www.mayiwsk.com/dushixiaoshuo/">都市小说</a></li>
        <li>
          <a href="https://www.mayiwsk.com/chuanyuexiaoshuo/">穿越小说</a>
        </li>
        <li><a href="https://www.mayiwsk.com/wangyouxiaoshuo/">网游小说</a></li>
        <li><a href="https://www.mayiwsk.com/kehuanxiaoshuo/">科幻小说</a></li>
        <li><a href="https://www.mayiwsk.com/paihangbang/">排行榜单</a></li>
        <li><a href="https://www.mayiwsk.com/wanben/">完本小说</a></li>
      </ul>
    </div>
    <div class="header">
      <div class="header_search">

        <select id="stype" name="searchtype" style="displany: none">
            <option value="articlename" selected="">书名</option>
            <option value="author">作者</option>
          </select>
          <input
            type="text"
            value="可搜书名和作者，请您少字也别输错字。"
            name="searchkey"
            class="search"
            id="searchkey"
            onclick="ttt()"
            baidusug="2"
          /><button id="sss" type="submit">搜 索</button
          >
      </div>
    </div>
        <div class="nri">
            <div class="cc">
              <div class="txt">账号：</div>
              <div class="inp">
                <input type="text" name="LoginForm[username]" />
              </div>
            </div>
            <div class="cc">
              <div class="txt">密码：</div>
              <div class="inp">
                <input type="password" name="LoginForm[password]" />
              </div>
            </div>
            <div class="frii">
              <input type="submit" class="int" value="登录" />
            </div>
            <div class="ccc">
              <div class="txtt" style="margin-left: 90px;">
                <a href="https://www.mayiwsk.com/getpass.php">忘记密码</a>
              </div>
              <div class="txtt">
                <a href="https://www.mayiwsk.com/register.php">用户注册</a>
              </div>
            </div>
         
        </div>
      </div>
    </div>


    
  </div>
</template>

<script setup>
var d = document;
if (d.ready === undefined) {
  var ie = !!(window.attachEvent && !window.opera);
  var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && RegExp.$1 < 525;
  var fn = [];
  var run = function () {
    for (var i = 0; i < fn.length; i++) fn[i]();
  };
  d.ready = function (f) {
    if (!ie && !wk && d.addEventListener)
      return d.addEventListener("DOMContentLoaded", f, false);
    if (fn.push(f) > 1) return;
    if (ie)
      (function () {
        try {
          d.documentElement.doScroll("left");
          run();
        } catch (err) {
          setTimeout(arguments.callee, 0);
        }
      })();
    else if (wk)
      var t = setInterval(function () {
        if (/^(loaded|complete)$/.test(d.readyState)) clearInterval(t), run();
      }, 0);
  };
}

d.ready(reloadcode);

function reloadcode() {
  var verify = document.getElementById("showcode");
  verify.setAttribute("src", "/code.php?" + Math.random());
}
const colors = ["#0077FF", "#00BBFF", "#80FFAA", "#FFD580", "#FFAA00", "#FF5500", "#FF0055"];

function changeBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 2000);

</script>

<style>
/* 设置页面字体样式 */
body {
  font-family: Arial, sans-serif;
  font-size: 14px;
  
}

/* 设置登录表单样式 */
.ywtop_con {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.cc {
  display: flex;
  margin-bottom: 20px;
}

.txt {
  width: 80px;
  text-align: right;
  margin-right: 10px;
}

.inp input[type="text"],
.inp input[type="password"] {
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 14px;
  width: 200px;
}

.frii {
  margin-top: 20px;
  margin-left: 242px;
}

.int {
  background-color: #007fff;
  color: #fff;
  padding: 5px 10px;
  border: none;
  font-size: 14px;
}

.ccc {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.txtt a {
  color: #000000;
  font-size: 14px;
}

/* 设置搜索框样式 */
.header_search {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.search {
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 14px;
  width: 400px;
}

#sss {
  background-color: #007fff;
  color: #fff;
  padding: 5px 10px;
  border: none;
  font-size: 14px;
}

/* 设置导航栏样式 */
.nav {
  background-color: #007fff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  margin-right: 20px;
}

.nav a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}

.nav a:hover {
  text-decoration: underline;
}
.nri{
  margin-top: 20px;
}

</style>

