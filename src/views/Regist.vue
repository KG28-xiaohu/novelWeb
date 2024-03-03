<template>
  
  <div class="regist">
    <!-- <top></top> -->
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
                    v-model="user.account"
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
                    v-model="user.password"
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
                  Email<span class="hottext"></span>
                </td>
                <td class="even">
                  <input
                    type="text"
                    class="text"
                    v-model="user.email"
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
                <td class="odd" >性别</td>
                <td class="even">
                  <input type="radio" class="radio" name="sex" value="1" />男
                  <input type="radio" class="radio" name="sex" value="2" />女
                  <input
                    type="radio"
                    class="radio"
                    v-model="user.sex"
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
                    v-model="user.QQ"
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
                    v-model="user.personalWeb"
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
                  <button
                    type="submit"
                    class="button"
                    id="submit"
                    @click="login()"
                  >提交</button>&nbsp;
                  <button @click="$router.push('/')" class="button">返回</button>
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
import  Header  from "../views/Header.vue";
export default {
  components:{
    'top':Header,
    
  },
  data() {
    // 验证账号
    var checkUserName = (value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
      }else{
        callback();
      }
    }
    var checkPassword = (value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    }
    return {
      // 登录账户
      user: {
        account:"",
        password: "",
        email:"",
        sex:"",
        QQ:"",
        personalWeb:"",
      },
    };
  },
  methods: {
    login(){
      axios.post("/user/enroll",this.user,
      {headers:{"Content-Type":"application/json"}})
      .then((res) => {
        if(res.data.code===200){
          localStorage.setItem("token",res.data.data)
          this.$router.push("/")
        }else{
          alert(res.data.msg)
        }
      })
    },
    
  },
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
}

.regist {
    
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
    background: radial-gradient(circle at center, #ebeff0, #18e567);
}
</style>