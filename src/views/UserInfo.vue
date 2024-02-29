<template>
  <div id="app"> 
    <div id="main">
      <div id="content">
        <center>
          <div id="admin">
            欢迎您：
            admin
            User &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>书架</b>:
            <a
              href="https://www.mayiwsk.com/modules/article/bookcase.php?uid=213"
              >会员书架</a
            >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>资料</b>:
            <a href="https://www.mayiwsk.com/userdetail.php?uid=213"
              >查看资料</a
            >&nbsp;
            <a href="https://www.mayiwsk.com/useredit.php?uid=213">修改资料</a>
            <p>修改密码</p>
          </div>
        </center>
        <table class="grid" width="88%" align="center">
          <caption>
            用户信息
          </caption>

          <tbody>
            <tr align="left">
              <td class="odd" width="33%">帐号：</td>
              <td class="even">
               username
                User
              </td>
            </tr>
            <tr align="left">
              <td class="odd">昵称：</td>
              <td class="even">
                username
                User
              </td>
            </tr>
            <tr align="left">
              <td class="odd">等级：</td>
              <td class="even">
                <span class="hottext">新手上路</span>（注：等级越高，权限越大）
              </td>
            </tr>
            <tr align="left">
              <td class="odd">性别：</td>
              <td class="even">保密</td>
            </tr>
            <tr align="left">
              <td class="odd">Email：</td>
              <td class="even">
                <a
                  href="mailto:%3Cscript%3Edocument.writeln(get_cookie_value(&#39;username&#39;))%3C/script%3E@q.com"
                ></a>
              </td>
            </tr>
            <tr align="left">
              <td class="odd">QQ：</td>
              <td class="even"></td>
            </tr>
            <tr align="left">
              <td class="odd">博客/微博：</td>
              <td class="even">
                <a
                  href="https://www.mayiwsk.com/userdetail.php?uid=213"
                  target="_blank"
                ></a>
              </td>
            </tr>
            <tr align="left">
              <td class="odd">注册日期：</td>
              <td class="even">2019-04-02</td>
            </tr>
            <tr align="left">
              <td class="odd">现有积分：</td>
              <td class="even">13（注：积分越多，等级越高）</td>
            </tr>
            <tr align="left">
              <td class="odd">信箱消息收容量：</td>
              <td class="even">0</td>
            </tr>
            <tr align="left">
              <td class="odd">书架最大收藏量：</td>
              <td class="even"><span class="hottext">20</span></td>
            </tr>
            <tr align="left">
              <td class="odd">每天拥有推荐票数：</td>
              <td class="even"><span class="hottext">1</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
/* 设置背景颜色 */
body {
  background-color: #f7f7f7;
}

/* 设置标题文字颜色和字体 */
h1 {
  color: #ff6347;
  font-family: 'Arial', sans-serif;
}

/* 设置链接文字颜色和悬停效果 */
a {
  color: #008080;
  text-decoration: none;
  transition: color 0.3s ease;
}
a:hover {
  color: #ff4500;
}

/* 设置按钮样式 */
button {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #ff1493;
}

/* 设置输入框样式 */
input[type="text"] {
  width: 300px;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ff69b4;
  border-radius: 5px;
}

/* 设置导航栏样式 */
.nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ff4500;
  display: flex;
  justify-content: space-evenly;
}
.nav li {
  float: left;
}
.nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.nav li a:hover {
  background-color: #dc143c;
}

/* 设置表格样式 */
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
  background-color: #ff6347;
  color: white;
}
.nri{
  text-align: right;
}
.header{
  text-align: center;
}
</style>