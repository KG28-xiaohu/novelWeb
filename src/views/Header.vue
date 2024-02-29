<template>
  <div class="app">
    <div>
      <div class="navigation">
        <div v-if="username != null && username != ''" class="ywtop1">
          <div class="nri">
            Hi,{{ username }} &nbsp;&nbsp;<router-link
              :to="{
                name: 'BookStore',
                param: { username: username },
              }"
              >我的书架</router-link
            >
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="../views/UserInfo.vue">查看资料</a>
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a>退出登录</a>&nbsp;
          </div>
        </div>
        <div v-if="username == null || username == ''" class="ywtop2">
          <form name="frmlogin" id="frmlogin" method="post" action="/login.php">
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
              <input type="submit" class="int" value=" " />
            </div>
            <div class="ccc">
              <div class="txtt"><a href="/getpass.php">忘记密码</a></div>
              <div class="txtt"><a href="/register.php">用户注册</a></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li><router-link :to="{ name: 'Index.vue' }">首页</router-link></li>
        <li>
          <router-link
            :to="{ name: 'BookStore', param: { username:username } }"
            >我的书架</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'BookStore',
              param: {
                type: BookList.type,
              },
            }"
            >玄幻小说</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'RankingForm.vue',
              param: {
                type: BookList.type,
              },
            }"
            >修真小说</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'RankingForm.vue',
              param: {
                type: BookList.type,
              },
            }"
            >都市小说</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'RankingForm.vue',
              param: {
                type: BookList.type,
              },
            }"
            >穿越小说</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'RankingForm.vue',
              param: {
                type: BookList.type,
              },
            }"
            >网游小说</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'RankingForm.vue',
              param: {
                type: BookList.type,
              },
            }"
            >科幻小说</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'RankingForm.vue',
              param: {
                type: BookList.type,
              },
            }"
            >排行榜单</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'RankingForm.vue',
              param: {
                state: BookList.state,
              },
            }"
            >完本小说</router-link
          >
        </li>
      </ul>
    </div>

    <div class="header_search">
      <form
        name="form"
        action="https://www.mayiwsk.com/modules/article/search.php"
        id="sform"
      >
        <select id="stype" name="searchtype" style="displany: none">
          <option value="articlename" selected="">书名</option>
          <option value="type">类型</option>
        </select>
        <input
          type="text"
          value="可搜书名和作者，请您少字也别输错字。"
          name="searchkey"
          class="search"
          id="searchkey"
          onclick="ttt()"
          baidusug="2"
        /><button id="sss" type="submit" @click="search()">搜 索</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../hooks/request";

export default {
  data() {
    return {
      username: "User",
      imgPath: "D:/Sainthood thief Web/src/assets/index/626s.jpg",
      BookList: {
        type:"wad"
      },
    };
  },
  // created() {
  //   this.getUserInfo();

  // },
  // methods: {
  //   getUserInfo() {
  //     axios.get("user/function/getUserInfo", {}).then((res) => {
  //       var BookList = res.data.data;
  //       this.username = BookList.username;
  //       this.imgPath = "http://localhost:8090/" + BookList.imgPath;
  //     });
  //   },
  //   exit() {
  //     if (confirm("确定退出吗？")) {
  //       localStorage.removeItem("token");
  //       this.$router.push("/");
  //     }
  //   },
  // },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 70%;
  margin-bottom: 10px;
}

.ywtop1,
.ywtop2 {
  margin-top: 10px;
}

.nri {
  display: flex;
  /* align-items: center; */
}

.frmlogin {
  margin-top: 10px;
}

.cc {
  margin-bottom: 10px;
}

.txt {
  font-weight: bold;
}

.inp input {
  width: 100%;
  padding: 5px;
  font-size: 14px;
}

.int {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
.nav{width: 100%;}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

li {
  margin-right: 10px;
}

.nav a {
  text-decoration: none;
  color: #333;
}

.nav a:hover {
  color: #007bff;
}

.header_search {
  margin-top: 20px;
  text-align: center;
}

.search {
  padding: 8px;
  width: 23%;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

</style>