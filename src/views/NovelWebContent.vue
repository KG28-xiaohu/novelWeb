<template>
  <div class="novelwebcontent" style="background-color: rgb(204, 232, 207)">
    <div id="banner" style="display: none"></div>
    <div class="content_read">
      <div class="box_con">
        <div class="con_top">
          <div id="page_set">
            <select
              onchange="javascript:setFont(this.options[this.selectedIndex].value);"
              id="bcolor"
              name="bcolor"
            >
              <option value="宋体">字体</option>
              <option value="方正启体简体">默认</option>
              <option value="黑体">黑体</option>
              <option value="楷体_GB2312">楷体</option>
              <option value="微软雅黑">雅黑</option>
              <option value="方正启体简体">启体</option>
              <option value="宋体">宋体</option>
            </select>
            <select
              onchange="javascript:setColor(this.options[this.selectedIndex].value);"
              id="bcolor"
              name="bcolor"
            >
              <option value="#000">颜色</option>
              <option value="#000">默认</option>
              <option value="#9370DB">暗紫</option>
              <option value="#2E8B57">藻绿</option>
              <option value="#2F4F4F">深灰</option>
              <option value="#778899">青灰</option>
              <option value="#800000">栗色</option>
              <option value="#6A5ACD">青蓝</option>
              <option value="#BC8F8F">玫褐</option>
              <option value="#F4A460">黄褐</option>
              <option value="#F5F5DC">米色</option>
              <option value="#F5F5F5">雾白</option>
            </select>
            <select
              onchange="javascript:setSize(this.options[this.selectedIndex].value);"
              id="bcolor"
              name="bcolor"
            >
              <option value="#E9FAFF">大小</option>
              <option value="19pt">默认</option>
              <option value="10pt">10pt</option>
              <option value="12pt">12pt</option>
              <option value="14pt">14pt</option>
              <option value="16pt">16pt</option>
              <option value="18pt">18pt</option>
              <option value="20pt">20pt</option>
              <option value="22pt">22pt</option>
              <option value="25pt">25pt</option>
              <option value="30pt">30pt</option>
            </select>
            <select
              name="scrollspeed"
              id="scrollspeed"
              onchange="javascript:setSpeed(this.options[this.selectedIndex].value);"
            >
              <option value="5">滚屏</option>
              <option value="1">最慢</option>
              <option value="2">慢2</option>
              <option value="3">慢3</option>
              <option value="4">中4</option>
              <option value="5">中5</option>
              <option value="6">中6</option>
              <option value="7">快7</option>
              <option value="8">快8</option>
              <option value="9">快9</option>
              <option value="10">最快</option></select
            ><select
              onchange="javascript:setBGColor(this.options[this.selectedIndex].value);"
              id="bcolor"
              name="bcolor"
            >
              <option value="#E9FAFF" style="background-color: #e9faff">
                背景
              </option>
              <option value="#E9FAFF" style="background-color: #e9faff">
                默认
              </option>
              <option value="#FFFFFF" style="background-color: #ffffff">
                白雪
              </option>
              <option
                value="#000000"
                style="background-color: #000000; color: #ffffff"
              >
                漆黑
              </option>
              <option value="#FFFFED" style="background-color: #ffffed">
                明黄
              </option>
              <option value="#EEFAEE" style="background-color: #eefaee">
                淡绿
              </option>
              <option value="#CCE8CF" style="background-color: #cce8cf">
                草绿
              </option>
              <option value="#FCEFFF" style="background-color: #fcefff">
                红粉
              </option>
              <option value="#EFEFEF" style="background-color: #efefef">
                深灰
              </option>
              <option value="#F5F5DC" style="background-color: #f5f5dc">
                米色
              </option>
              <option value="#D2B48C" style="background-color: #d2b48c">
                茶色
              </option>
              <option value="#C0C0C0" style="background-color: #e7f4fe">
                银色
              </option>
            </select>
            <select
              onchange="javascript:setWidth(this.options[this.selectedIndex].value);"
              id="bcolor"
              name="bcolor"
            >
              <option value="95%">宽度</option>
              <option value="95%">默认</option>
              <option value="85%">85%</option>
              <option value="76%">75%</option>
              <option value="67%">65%</option>
              <option value="53%">50%</option>
              <option value="41%">40%</option>
            </select>
            翻页<input
              type="checkbox"
              name="autopage"
              id="autopage"
              onchange="javascript:setAutopage();"
              value=""
            />&nbsp;夜间<input
              type="checkbox"
              name="night"
              id="night"
              onchange="javascript:setNight();"
              value=""
            />
          </div>
          <a href="https://www.mayiwsk.com/">蚂蚁文学</a> &gt;
          <a href="https://www.mayiwsk.com/123_123192/index.html"
            >女尊原神：胡桃卖棺材本只为娶我</a
          >
          &gt; 第87章 众女齐聚
        </div>
        <div class="bookname">
          <h1>第87章 众女齐聚</h1>
          <div class="bottem1">
            <a href="javascript:;" onclick="showpop(false, &#39;123192&#39;);"
              >投推荐票</a
            >
            <a href="https://www.mayiwsk.com/123_123192/50485774.html"
              >上一章</a
            >
            ←
            <a href="https://www.mayiwsk.com/123_123192/index.html">章节目录</a>
            →
            <a href="https://www.mayiwsk.com/123_123192/50506986.html"
              >下一章</a
            >
          </div>
        </div>

        <div id="content" style="font-size: 20pt; width: 95%">
          <div id="center_tip"><b>最新网址：www.mayiwsk.com</b></div>
          【烟绯】<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;【身份：律法咨询师】<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;【白银宝箱进度：0％】<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;那一是位头戴红色法冠的粉发女生，五官秀丽，穿着也是尤为清凉。<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;对于白明来说，这位同样也是熟悉的游戏角色。<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;活跃在璃月港的知名律法咨询师，混有仙兽血脉的精明少女。<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;今天出现在这种场合，准备做什么自然是不言而喻。<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;“欢迎大家来到本届璃月厨王争霸赛决赛现场，我<br />&nbsp;&nbsp;&nbsp;&nbsp;《女尊原神：胡桃卖棺材本只为娶我》第87章
          众女齐聚<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;正在手打中，请稍等片刻，内容更新后，请重新刷新页面，即可获取最新更新！<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;《<b>女尊原神：胡桃卖棺材本只为娶我</b>》蚂蚁文学全文字更新,牢记网址:www.mayiwsk.com
          <br />
          <div id="center_tip"><b>最新网址：www.mayiwsk.com</b></div>
        </div>

        <div class="bottem2">
          <a href="javascript:;" onclick="showpop(false, &#39;123192&#39;);"
            >投推荐票</a
          >
          <a href="https://www.mayiwsk.com/123_123192/50485774.html">上一章</a>
          ←
          <a href="https://www.mayiwsk.com/123_123192/index.html">章节目录</a> →
          <a href="https://www.mayiwsk.com/123_123192/50506986.html">下一章</a>
        </div>
        <div id="hm_t_125039"></div>

        <p align="center"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 设置页面背景颜色 */
body {
  background-color: #f2f2f2;
  
}



/* 内容区域样式 */
.content_read {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.bookname h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
}
.bottem1 ,
.bottem2 {
  text-align: center;
}

.bottem1 a,
.bottem2 a {
  text-decoration: none;
  color: #4caf50;
  margin-right: 10px;
}

#content {
  line-height: 1.6;
  font-size: 16px;
  color: #333;
  text-align: center;
}

#center_tip {
  text-align: center;
  margin-top: 10px;
  color: #999;
}

/* 底部样式 */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
.nri{margin-left: 1350px;
}
#page_set{
  text-align: right;;
}

</style>