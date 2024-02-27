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
        <form
          name="form"
          action="https://www.mayiwsk.com/modules/article/search.php"
          id="sform"
          method="post"
        ><select id="stype" name="searchtype" style="displany: none">
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
        <div id="tops_nav">
          <ol>
            <li>
              <input
                type="button"
                value="小说推荐排行榜"
                onclick="window.location=&#39;allvote.html&#39;"
              />
            </li>
            <li>
              <input
                type="button"
                value="小说收藏排行榜"
                onclick="window.location=&#39;goodnum.html&#39;"
              />
            </li>
            <li>
              <input
                type="button"
                value="小说新书入库榜"
                onclick="window.location=&#39;newbook.html&#39;"
              />
            </li>
          </ol>
        </div>
        <div class="box b1">
          <h3>玄幻·奇幻小说推荐排行榜</h3>
          <ul>
            <li>
              18<a href="https://www.mayiwsk.com/53_53090/index.html"
                >纵横天下从铁布衫开始</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/7_7658/index.html">诡秘之主</a>
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/13_13734/index.html"
                >完美世界</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/xuanhuanxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              18<a href="https://www.mayiwsk.com/46_46768/index.html"
                >仙武帝尊</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/75_75207/index.html"
                >我这么天才为何还要收徒弟</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/83_83132/index.html"
                >我代管的宗门有点强，能自动升级</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/xuanhuanxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              18<a href="https://www.mayiwsk.com/12_12634/index.html"
                >奥术神座</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/1_1046/index.html">伏天氏</a>
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/75_75207/index.html"
                >我这么天才为何还要收徒弟</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/xuanhuanxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              17<a href="https://www.mayiwsk.com/78_78477/index.html"
                >阿尔夫海姆森林之主</a
              >
            </li>

            <li>
              18<a href="https://www.mayiwsk.com/25_25485/index.html">神墓</a>
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/51_51143/index.html"
                >叶尘池瑶小说全文免费阅读</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/83_83224/index.html"
                >洪荒万界帝尊</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/xuanhuanxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
        </div>

        <div class="box b2">
          <h3>修真·仙侠小说推荐排行榜</h3>
          <ul>
            <li>
              18<a href="https://www.mayiwsk.com/79_79349/index.html"
                >我用闲书成圣人</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/0_994/index.html">飞剑问道</a>
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/16_16187/index.html">武谪仙</a>
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/xiuzhenxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              18<a href="https://www.mayiwsk.com/63_63193/index.html"
                >洪荒之鲲鹏绝不让位</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/69_69853/index.html"
                >我的师傅每到大限才突破</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/41_41998/index.html"
                >封神第一帝</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/xiuzhenxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              17<a href="https://www.mayiwsk.com/76_76385/index.html"
                >我从战斗余波中提取属性</a
              >
            </li>

            <li>
              18<a href="https://www.mayiwsk.com/50_50035/index.html"
                >从灵气复苏到末法时代</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/16_16121/index.html">大梦主</a>
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/62_62777/index.html">弃宇宙</a>
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/xiuzhenxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              18<a href="https://www.mayiwsk.com/69_69853/index.html"
                >我的师傅每到大限才突破</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/79_79129/index.html"
                >洪荒：咸鱼的我，被通天偷听心声</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/81_81445/index.html"
                >延荒山头儿有尊神</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/xiuzhenxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
        </div>

        <div class="box b3">
          <h3>都市·青春小说推荐排行榜</h3>
          <ul>
            <li>
              18<a href="https://www.mayiwsk.com/52_52475/index.html"
                >席爷每天都想官宣</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/23_23320/index.html"
                >韩三千苏迎夏全文免费阅读</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/10_10070/index.html"
                >很纯很暧昧</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/dushixiaoshuo/">更多</a></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              18<a href="https://www.mayiwsk.com/52_52475/index.html"
                >席爷每天都想官宣</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/80_80478/index.html"
                >回到2002当医生</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/67_67739/index.html"
                >打篮球太厉害了怎么办</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/dushixiaoshuo/">更多</a></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              17<a href="https://www.mayiwsk.com/10_10066/index.html"
                >一世辉煌</a
              >
            </li>

            <li>
              18<a href="https://www.mayiwsk.com/34_34848/index.html"
                >变成血族是什么体验</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/67_67525/index.html"
                >1991从芯开始</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/25_25223/index.html"
                >都市极品医神</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/dushixiaoshuo/">更多</a></span
              >
            </li>
          </ul>
        </div>

        <div class="box b4">
          <h3>历史·穿越小说推荐排行榜</h3>
          <ul>
            <li>
              18<a href="https://www.mayiwsk.com/48_48445/index.html"
                >大理寺卿的宠妻日常</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/62_62382/index.html"
                >三国从忽悠刘备开始</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/4_4528/index.html"
                >抗日之精英特战队</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/chuanyuexiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              18<a href="https://www.mayiwsk.com/1_1128/index.html"
                >民国之文豪崛起</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/9_9542/index.html"
                >回到明朝做千户</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/44_44158/index.html"
                >从今天开始捡属性</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/chuanyuexiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              18<a href="https://www.mayiwsk.com/60_60732/index.html"
                >贞观憨婿</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/17_17492/index.html">偷香</a>
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/69_69038/index.html"
                >我大明武德充沛但选择文化胜利</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/chuanyuexiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              18<a href="https://www.mayiwsk.com/45_45712/index.html"
                >神医富豪</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/44_44212/index.html"
                >我能看到准确率</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/83_83905/index.html"
                >太子怀里的小祖宗惹不起</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/chuanyuexiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
        </div>

        <div class="box b1">
          <h3>网游·竞技小说推荐排行榜</h3>
          <ul>
            <li>
              18<a href="https://www.mayiwsk.com/51_51671/index.html"
                >我在东京创造都市传说</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/78_78245/index.html"
                >斗罗之开局签到女神小舞</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/72_72363/index.html"
                >因为怕输就全点攻击力了</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/wangyouxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              17<a href="https://www.mayiwsk.com/84_84789/index.html"
                >斗罗之双子斗罗</a
              >
            </li>

            <li>
              18<a href="https://www.mayiwsk.com/10_10285/index.html"
                >球王万岁</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/50_50917/index.html"
                >奥特曼之迪迦临诸天</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/40_40031/index.html"
                >霍格沃茨之血脉巫师</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/wangyouxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              17<a href="https://www.mayiwsk.com/63_63805/index.html"
                >摊牌了我真是封号斗罗</a
              >
            </li>

            <li>
              18<a href="https://www.mayiwsk.com/9_9422/index.html"
                >重生之贼行天下</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/66_66273/index.html"
                >斗罗之开局即是封号斗罗</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/37_37334/index.html"
                >精灵之性格大师</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/wangyouxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              17<a href="https://www.mayiwsk.com/35_35512/index.html"
                >我在火影开直播</a
              >
            </li>

            <li>
              18<a href="https://www.mayiwsk.com/78_78411/index.html"
                >我居然有一半的时间要变成女生</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/85_85648/index.html"
                >从斗罗开始俘获女神</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/58_58347/index.html"
                >我真不是魔神</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/wangyouxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
        </div>

        <div class="box b2">
          <h3>科幻·灵异小说推荐排行榜</h3>
          <ul>
            <li>
              17<a href="https://www.mayiwsk.com/10_10674/index.html"
                >恐慌沸腾</a
              >
            </li>

            <li>
              18<a href="https://www.mayiwsk.com/43_43831/index.html"
                >万界圆梦师</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/0_124/index.html">阴阳鬼术</a>
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/14_14167/index.html"
                >文明之万界领主</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/kehuanxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              16<a href="https://www.mayiwsk.com/60_60336/index.html"
                >某美漫的英雄联盟</a
              >
            </li>

            <li>
              17<a href="https://www.mayiwsk.com/78_78604/index.html"
                >第四天灾的史诗游戏</a
              >
            </li>

            <li>
              18<a href="https://www.mayiwsk.com/76_76830/index.html"
                >全球灾变：开局建造浮空岛</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/1_1068/index.html">杀神永生</a>
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/25_25470/index.html"
                >超级巨龙进化</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/kehuanxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              17<a href="https://www.mayiwsk.com/5_5465/index.html">踏星</a>
            </li>

            <li>
              18<a href="https://www.mayiwsk.com/74_74708/index.html"
                >小世界求生：我能预测吉凶</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/59_59053/index.html"
                >电影黑科技</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/17_17403/index.html"
                >九星毒奶</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/kehuanxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              18<a href="https://www.mayiwsk.com/24_24720/index.html"
                >儒道诸天</a
              >
            </li>

            <li>
              19<a href="https://www.mayiwsk.com/7_7183/index.html"
                >我的末世超级战车</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/56_56180/index.html"
                >诸天演道</a
              >
            </li>

            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/kehuanxiaoshuo/"
                  >更多</a
                ></span
              >
            </li>
          </ul>
        </div>

        <div class="box b3">
          <h3>全本小说推荐排行榜</h3>
          <ul>
            <li>
              19<a href="https://www.mayiwsk.com/4_4018/index.html"
                >江山美人谋</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/2_2345/index.html"
                >悠哉兽世：种种田，生生崽</a
              >
            </li>

            <li>
              21<a href="https://www.mayiwsk.com/0_483/index.html"
                >农家子的古代科举生活</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/dushixiaoshuo/">更多</a></span
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              19<a href="https://www.mayiwsk.com/2_2897/index.html"
                >童养媳之桃李满天下</a
              >
            </li>

            <li>
              20<a href="https://www.mayiwsk.com/83_83905/index.html"
                >太子怀里的小祖宗惹不起</a
              >
            </li>

            <li>
              21<a href="https://www.mayiwsk.com/0_488/index.html">撒野</a>
            </li>
          </ul>
          <ul style="display: none">
            <li>
              20<a href="https://www.mayiwsk.com/2_2924/index.html"
                >我是要成为boss的存在</a
              >
            </li>

            <li>
              21<a href="https://www.mayiwsk.com/2_2897/index.html"
                >童养媳之桃李满天下</a
              >
            </li>
          </ul>
          <ul style="display: none">
            <li>
              20<a href="https://www.mayiwsk.com/0_487/index.html"
                >人渣反派自救系统</a
              >
            </li>

            <li>
              21<a href="https://www.mayiwsk.com/4_4115/index.html"
                >冷帝魅皇：贵女宠后</a
              >
            </li>
          </ul>
        </div>

        <div class="box b4">
          <h3>全部小说推荐排行榜排行榜</h3>
          <ul>
            <li>
              20<a href="https://www.mayiwsk.com/59_59539/index.html"
                >没钱上大学的我只能去屠龙了</a
              >
            </li>

            <li>
              21<a href="https://www.mayiwsk.com/57_57516/index.html"
                >老祖宗她又美又飒</a
              >
            </li>
            <li class="more">
              <span
                ><a href="https://www.mayiwsk.com/dushixiaoshuo/">更多</a></span
              >
            </li>
          </ul>
         
        </div>
      </div>
    </div>
</template>

<script setup>
</script>

<style>
/* Reset默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 页面整体布局 */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3px;
}

/* 导航栏样式 */
.ywtop {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

.ywtop a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

.header {
  background-color: #f4f4f4;
  padding: 10px 0;
  text-align: center;
}

.header_search {
  margin-bottom: 20px;
}

.search {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

.nav {

  color: #fff;
  padding: 10px;
  font-size: 20px;
}

.nav ul {
  list-style-type: none;
  padding: 0;

  display: flex;
  justify-content: space-evenly;
}

.nav li {
  display: inline-block;
  margin-right: 10px;
}

/* 排行榜样式 */
.box {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 10px;
}

.more {
  text-align: right;
}

.more a {
  text-decoration: none;
  color: #333;
}
#tops_nav ol{
  display: flex;
  justify-content: space-around;
}

/* 当鼠标悬停在小说标题上时，标题会变成红色 */
.box ul li a:hover {
  color: red;
}
/* 在每行之间添加虚线作为间隔 */
.box ul li {
  border-bottom: 1px dashed #ccc; /* 设置虚线样式和颜色 */
  padding-bottom: 5px; /* 可以根据需要调整下方间距 */
}

/* 设置小说标题的字体样式 */
.box ul li a {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
}
.nri{
  margin-left: 850px;
}
</style>