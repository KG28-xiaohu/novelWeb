<template>
  <div id="app">
    <div class="ywtop">
      <div class="ywtop_con">
        <div class="ywtop_sethome">
        </div>
        <div class="nri">
          Hi,<a
            href="https://www.mayiwsk.com/userdetail.php?uid=213"
            target="_top"
            >User</a
          >&nbsp;&nbsp;<a
            href="https://www.mayiwsk.com/modules/article/bookcase.php"
            target="_top"
            >我的书架</a
          >
          |
          <a href="https://www.mayiwsk.com/userdetail.php?uid=213" target="_top"
            >查看资料</a
          >
          |
          <a href="https://www.mayiwsk.com/logout.php" target="_self"
            >退出登录</a
          >&nbsp;
        </div>
      </div>
    </div>
    <div class="header">
      <div class="header_search">
        <form
          name="form"
          action="https://www.mayiwsk.com/modules/article/search.php"
          id="sform"
          method="post"
        >
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
            autocomplete="off"
          /><button id="sss" type="submit">搜 索</button
          >
        </form>
      </div>
    </div>
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
        <li>
          <a href="https://www.mayiwsk.com/xiuzhenxiaoshuo/">修真小说</a>
        </li>
        <li>
          <a href="https://www.mayiwsk.com/dushixiaoshuo/">都市小说</a>
        </li>
        <li>
          <a href="https://www.mayiwsk.com/chuanyuexiaoshuo/">穿越小说</a>
        </li>
        <li>
          <a href="https://www.mayiwsk.com/wangyouxiaoshuo/">网游小说</a>
        </li>
        <li>
          <a href="https://www.mayiwsk.com/kehuanxiaoshuo/">科幻小说</a>
        </li>
        <li><a href="https://www.mayiwsk.com/paihangbang/">排行榜单</a></li>
        <li><a href="https://www.mayiwsk.com/wanben/">完本小说</a></li>
      </ul>
    </div>
    <div id="banner" style="display: none"></div>

    <div id="main">
      <div id="content">
        <!-- <style type="text/css"></style> -->
        <form
          action="https://www.mayiwsk.com/modules/article/bookcase.php"
          method="post"
          name="checkform"
          id="checkform"
          onsubmit="return check_confirm();"
        >
         
          <table class="grid" width="100%" align="center">
            <tbody>
              <tr align="center">
                <th width="26%">文章名称</th>
                <th width="30%">最新章节</th>
                <th width="30%">书签</th>
                <th width="7%">更新</th>
                <th width="7%">操作</th>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
/* 设置页面背景色 */
body {
  background:  #f2f2f2
}
.header {
  background-color: #17cf2c;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* 设置搜索框样式 */
.header_search {
  background-color: #9802f5;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.search {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  
}

#sss {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

#sss:hover {
  background-color: #0056b3;
}


/* 设置页头样式 */
.ywtop {
  background-color: #4b33ff;
  color: #ffffff;
  padding: 5px;

}

.nri a {
  color: #ffffff;
  text-decoration: none;
}
.nri{
  position: relative;
  margin-left: 1280px;
}

.search {
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
.nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right,#ff0062, #f2ff00);
}

.nav li {
  padding: 0 20px;
  line-height: 40px;
}

.nav a {
  color: #1a1a8e;
  text-decoration: none;
}

/* 设置页脚样式 */
.footer {
  background: linear-gradient(to top, #ffff00, #00ff00); /* 渐变色 */
  height: 100px;
  text-align: center;
  line-height: 100px;
}

</style>