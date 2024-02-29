<template>
  <div id="app">
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

<script>
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