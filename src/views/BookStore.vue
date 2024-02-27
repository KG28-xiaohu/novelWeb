<template>
  <div id="app">
    <div class="ywtop">
      <div class="ywtop_con">
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
        <!-- <div class="_17mb_searchtype"><span>书名</span></div> -->
        <form
          name="form"
          action="https://www.mayiwsk.com/modules/article/search.php"
          id="sform"
          method="post"
        >
          <select
            id="stype"
            name="searchtype"
            style="displany: none; margin-right;: 10px"
          >
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
            style="margin-left: 10px;"
          /><button id="sss" type="submit">搜 索</button>
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

    <div id="main">
      <div id="content">
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
                <th></th>
                <th width="29%">文章名称</th>
                <th width="38%">最新章节</th>
                <th width="15%">更新</th>
                <th width="14%">操作</th>
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
/* 设置全局样式 */
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}

/* 头部样式 */
.ywtop {
  background-color: #ff3366;
  color: #fff;
  padding: 5px;

}

.nri a {
  color: #fff;
  text-decoration: none;
}
.nri{
  position: relative;
  margin-left: 1280px;
}

.header {
  background-color: #ff6699;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

#sss {
  background-color: #ff3366;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

/* 导航菜单样式 */
.nav {
  background-color: #ab66ff;
  color: #fff;
  padding: 10px;
}

.nav ul {
  list-style-type: none;
  padding: 0;
  margin-left: 50px;
  display: flex;
  justify-content: space-evenly;
}

.nav li {
  display: inline-block;
  margin-right: 10px;
}

.nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px;
}

.nav a:hover {
  text-decoration: underline;
}

.grid {
  width: 100%;
  border-collapse: collapse;
}

.grid th,
.grid td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.grid th {
  background-color: #ffcccc;
}

.grid tbody tr:nth-child(even) {
  background-color: #ffd9e6;
}

.grid tbody tr:hover {
  background-color: #ffc2d6;
}
</style>