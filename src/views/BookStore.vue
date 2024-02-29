<template>
  <div id="app">
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