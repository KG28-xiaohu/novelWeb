<template>
  <div class="login">
    <div class="nri">
      <form action="">
        <div class="cc">
          <div class="txt">账号：</div>
          <div class="inp">
            <input  v-model="user.account" />
          </div>
        </div>
        <div class="cc">
          <div class="txt">密码：</div>
          <div class="inp">
            <input
              v-model="user.password"
            />
          </div>
        </div>
      </form>
      <div class="frii">
        <button type="submit" class="int" @click="login()">登录</button>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="frii">
        <router-link type="submit" class="int" to="/">返回</router-link>
      </div>

      <div class="ccc">
        <div class="txtt" style="margin-left: 10px">
          <router-link to="/ChangePwd">忘记密码</router-link>
        </div>
        <div class="txtt">
          <router-link to="/Regist">用户注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// var d = document;
// if (d.ready === undefined) {
//   var ie = !!(window.attachEvent && !window.opera);
//   var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && RegExp.$1 < 525;
//   var fn = [];
//   var run = function () {
//     for (var i = 0; i < fn.length; i++) fn[i]();
//   };
//   d.ready = function (f) {
//     if (!ie && !wk && d.addEventListener)
//       return d.addEventListener("DOMContentLoaded", f, false);
//     if (fn.push(f) > 1) return;
//     if (ie)
//       (function () {
//         try {
//           d.documentElement.doScroll("left");
//           run();
//         } catch (err) {
//           setTimeout(arguments.callee, 0);
//         }
//       })();
//     else if (wk)
//       var t = setInterval(function () {
//         if (/^(loaded|complete)$/.test(d.readyState)) clearInterval(t), run();
//       }, 0);
//   };
// }

// d.ready(reloadcode);

// function reloadcode() {
//   var verify = document.getElementById("showcode");
//   verify.setAttribute("src", "/code.php?" + Math.random());
// }
// const colors = ["#0077FF", "#00BBFF", "#80FFAA", "#FFD580", "#FFAA00", "#FF5500", "#FF0055"];

// function changeBackgroundColor() {
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   const randomColor = colors[randomIndex];
//   document.body.style.backgroundColor = randomColor;
// }

// setInterval(changeBackgroundColor, 2000);
import axios from "../hooks/request.js";
export default {
  data() {
    // 验证账号
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      // 登录账户
      user: {
        // 账号
        account: "",
        // 密码
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post(
          "/user/login",
          {
            account: this.user.account,
            password: this.user.password,
          },
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        )
        .then((res) => {
          if (res.data.code === 200) {
            localStorage.setItem("token", res.data.data);
            alert(res.data.msg)
            this.$router.push('/')
          } else {
            alert(res.data.msg);
          }
        });
    },
  },
};
</script>

<style scoped>
/* 基本样式 */
.login {
  text-align: center;
  width: 300px;
  margin: 0 auto;
}

.cc {
  margin-bottom: 10px;
}

.txt {
  display: inline-block;
  width: 60px;
}

.inp input {
  width: 200px;
  padding: 5px;
  border: 1px solid #ccc;
}

.frii {
  text-align: center;
  display: inline-block;
  margin-top: 10px;
}

.int {
  padding: 10px 20px;
  background-color: #337ab7;
  color: #fff;
  border: none;
  cursor: pointer;
}

.ccc {
  margin-top: 10px;
  /* text-align: center; */
}

.txtt {
  display: inline-block;
  margin-right: 20px;
}

/* 链接样式 */
.txtt a {
  color: #337ab7;
  text-decoration: none;
}

.txtt a:hover {
  text-decoration: underline;
}
</style>

