<template>
  <div class="app">
    <div id="main">
      <div id="content" style="width: 800px;margin-left: 400px;">
        <br />
          <table class="grid" width="580" align="center">
            <caption>
              新用户注册
            </caption>
            <tbody>
              <tr>
                <td class="odd" >
                  用户名<span class="hottext">(必填)</span>
                </td>
                <td class="even">
                  <input
                    type="text"
                    class="text"
                    name="SignupForm[username]"
                    id="regusername"
                    size="25"
                    maxlength="30"
                    style="width: 160px"
                  />
                  <span id="usermsg"></span>
                </td>
              </tr>
              <tr>
                <td class="odd" >
                  密码<span class="hottext">(必填)</span>
                </td>
                <td class="even">
                  <input
                    type="password"
                    class="text"
                    name="SignupForm[password]"
                    id="regpassword"
                    size="25"
                    maxlength="20"
                    style="width: 160px"
                  />
                  <span id="passmsg"></span>
                </td>
              </tr>
              <tr>
                <td class="odd" >
                  重复密码<span class="hottext">(必填)</span>
                </td>
                <td class="even">
                  <input
                    type="password"
                    class="text"
                    name="repassword"
                    id="regrepassword"
                    size="25"
                    maxlength="20"
                    style="width: 160px"
                  />
                  <span id="repassmsg"></span>
                </td>
              </tr>
              <tr>
                <td class="odd" >
                  Email<span class="hottext">(必填)</span>
                </td>
                <td class="even">
                  <input
                    type="text"
                    class="text"
                    name="SignupForm[email]"
                    id="regemail"
                    size="25"
                    maxlength="60"
                    style="width: 160px"
                  />
                  <span id="mailmsg"></span
                  >
                </td>
              </tr>
              <tr>
                <td class="odd" >
                  验证码<span class="hottext">(必填)</span>
                </td>
                <td class="even">
                  <input
                    type="text"
                    class="text"
                    name="SignupForm[captcha]"
                    id="captcha"
                    size="25"
                    maxlength="60"
                    style="width: 160px"
                  />
                </td>
              </tr>
              <tr>
                <td class="odd" >性别</td>
                <td class="even">
                  <input type="radio" class="radio" name="sex" value="1" />男
                  <input type="radio" class="radio" name="sex" value="2" />女
                  <input
                    type="radio"
                    class="radio"
                    name="sex"
                    value="0"
                    checked="checked"
                  />保密
                </td>
              </tr>
              <tr>
                <td class="odd" >QQ</td>
                <td class="even">
                  <input
                    type="text"
                    class="text"
                    name="qq"
                    id="qq"
                    size="25"
                    maxlength="15"
                    style="width: 160px"
                    value=""
                  />
                </td>
              </tr>
              <tr>
                <td class="odd">个人网站</td>
                <td class="even">
                  <input
                    type="text"
                    class="text"
                    name="url"
                    id="url"
                    size="25"
                    maxlength="100"
                    style="width: 160px"
                    value=""
                  />
                </td>
              </tr>

              <tr>
                <td class="odd" >
                  &nbsp;<input
                    type="hidden"
                    name="action"
                    id="action"
                    value="newuser"
                  />
                </td>
                <td class="even">
                  <input
                    type="submit"
                    class="button"
                    name="submit"
                    id="submit"
                    value="提 交"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../hooks/request.js"
export default {
  data() {
    // 验证账号
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
      }else{
        callback();
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    }
    return {
      // 登录账户
      user: {
        // 账号
        username:"",
        // 密码
        password: "",
      },
      // 验证
      rules: {
        username: [{ validator: checkUserName, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    login(){
      axios.post("/user/login",{
        account:this.user.username,
        pwd:this.user.password
      },{headers:{"Content-Type":"application/x-www-form-urlencoded"}})
      .then((res) => {
        if(res.data.code===200){
          localStorage.setItem("token",res.data.data)
          this.$router.push("/layout")
        }else{
          alert(res.data.msg)
        }
      })
    },
    resetForm(formName){
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
}

.app {
    
    width: 100%;;

    background-color: #fff;

    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ywtop_con {
    text-align: right;
}
.nri{
    margin-top: 10px;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
}

.nri a {
    color: #333;
    text-decoration: none;
    margin-right: 10px;
}

.header_search {

    text-align: center;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
}

.search {
    padding: 5px;
    width: 60%;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.nav{
    display: flex;
    justify-content: space-evenly;
    
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
}

#sss {
    padding: 6px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.nav ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
}

.nav ul li {
    display: inline-block;
    margin-right: 50px;
}

.nav ul li a {
    color: #333;
    text-decoration: none;
}

.grid {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
}

.grid caption {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
}

.grid td {
    padding: 5px;
}

.text {
    padding: 5px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.button {
    padding: 8px 16px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
#main{
    border-top: 2px solid;
    background: radial-gradient(circle at center, #e7161d, #18e567);
}
/* body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
}

.app {
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ywtop_con {
    text-align: right;
}

.nri a {
    color: #333;
    text-decoration: none;
    margin-right: 10px;
}

.header_search {
    margin-top: 20px;
}

.search {
    padding: 5px;
    width: 70%;
    border: 1px solid #ccc;
    border-radius: 3px;
}

#sss {
    padding: 6px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.nav ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
}

.nav ul li {
    display: inline-block;
    margin-right: 10px;
}

.nav ul li a {
    color: #333;
    text-decoration: none;
}

.grid {
    border-collapse: collapse;
    width: 100%;
}

.grid caption {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
}

.grid td {
    padding: 5px;
}

.text {
    padding: 5px;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.button {
    padding: 8px 16px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
} */
</style>