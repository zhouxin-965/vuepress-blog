# 知识点归纳以及碰到的问题
## 前言
早就有写一个个人博客的想法了，因为平时遇到的问题或者知识点都随手记在本子上或者发在个人的QQ群，而这些消息要不就不方便随时查看，要不就一下把缓存清空了，伤脑经。这下好了，弄一个博客，还能添加到手机屏幕，妈妈再也不用担心我把东西搞丢了(以下东西纯属平时个人整理)
## HTML相关
### 1.三大事件
1.鼠标事件: click mouseup mouseenter
2.键盘事件: keyup keydown keypress
3.html事件: focus select load change

### 2.冒泡、捕获、默认行为
1.冒泡：父子元素都有click事件，当点击子元素的click事件时，父元素的click事件也会触发
  阻止冒泡: event.stoppropation() event.cancelbubble()(IE)
2.捕获：与冒泡相反
3.默认行为: 像form表单的提交等
  阻止默认行为: event.preventDefault() return false  

### 3.元素
1.行内元素: a b span img input select strong
2.块元素: div ul ol li dt p
3.空元素: br hr meta
  *行内元素不可以设置宽高，不独占一行。但是可以套用块级元素占一行，如span里面套div
  *块元素可以设置宽高，独占一行

### 4.CSS sprite
将多个小图片拼在一个图中，通过background-position获取
优点: 减少http请求，提高页面加载速度，减少图片大小，减少内存
缺点: 图片合并麻烦，维护麻烦，修改一个图片就要重新布局

### 5.DOCTYPE
因为HTML5不在是SGML的子集，所以不在需要DTD的引入，所以开头只要写DOCTYPE，他的作用是告诉浏览器用什么文档类型的规范来解析该文档

### 6.src、href、@import问题
1.src 会暂停其他资源的加载,直到把src引用的资源加载、编译、执行完(流氓),这就是为什么script标签放页面底部
2.@import 和src这个流氓一样
3.href 这个就很好了，加载他引入的同时，还能加载其他的资源，这也是为什么建议用herf而不用@import
  **重申web标准及wcc标准
    * 标签闭合 标签小写 外链css/js 结构行为为表现的分离
    *(插一个知识点)前端页面三大层次 结构层(html) 表现层(css) 行为层(js) 