# 知识点归纳以及碰到的问题
## 前言
早就有写一个个人博客的想法了，因为平时遇到的问题或者知识点都随手记在本子上或者发在个人的QQ群，而这些消息要不就不方便随时查看，要不就一下把缓存清空了，伤脑经。这下好了，弄一个博客，还能添加到手机屏幕，妈妈再也不用担心我把东西搞丢了(以下东西纯属平时个人整理)
## HTML、CSS相关
### 1. 三大事件
1. 鼠标事件: click mouseup mouseenter  
2. 键盘事件: keyup keydown keypress  
3. html事件: focus select load change

### 2. 冒泡、捕获、默认行为
1. 冒泡：父子元素都有click事件，当点击子元素的click事件时，父元素的click事件也会触发
    - 阻止冒泡: event.stoppropation() event.cancelbubble()(IE)  
2. 捕获：与冒泡相反   
3. 默认行为: 像form表单的提交等  
    - 阻止默认行为: event.preventDefault() return false  

### 3. 元素
1. 行内元素: a b span img input select strong     
2. 块元素: div ul ol li dt p     
3. 空元素: br hr meta
    - 行内元素不可以设置宽高，不独占一行。但是可以套用块级元素占一行，如span里面套div       
    - 块元素可以设置宽高，独占一行

### 4. CSS sprite
1. 将多个小图片拼在一个图中，通过background-position获取   
2. 优点: 减少http请求，提高页面加载速度，减少图片大小，减少内存   
3. 缺点: 图片合并麻烦，维护麻烦，修改一个图片就要重新布局

### 5. DOCTYPE
因为HTML5不在是SGML的子集，所以不在需要DTD的引入，所以开头只要写DOCTYPE，他的作用是告诉浏览器用什么文档类型的规范来解析该文档

### 6. src、href、@import问题
1. src 会暂停其他资源的加载,直到把src引用的资源加载、编译、执行完(流氓),这就是为什么script标签放页面底部   
2. @import 和src这个流氓一样   
3. href 这个就很好了，加载他引入的同时，还能加载其他的资源，这也是为什么建议用herf而不用@import
    - 重申web标准及wcc标准   
    - 标签闭合 标签小写 外链css/js 结构行为为表现的分离   
    - (插一个知识点)前端页面三大层次 结构层(html) 表现层(css) 行为层(js)

### 7. 浮动与清除浮动
1. 浮动:浮动的框可以向左向右移动，直到触碰到外部包含的边框或另一个浮动的边框   
2. 清除浮动:脱离普通的文档流
    - clear:both 在最后一个标签再加一个标签，加上这个属性   
    - overflow:hidden 父级添加这个属性，触发BFC模式(块格式化上下文)，缺点：容易导致内容被隐藏
    - after伪元素(.clearfix是父级的)
  ```   
    .clearfix:after {
      content:"";
      display:block;
      clear:both;
      visibility:hidden;
    }
    .clearfix {
      *zoom:1; 兼容IE
    }
  ```
- before、after双伪元素清除   
  ```
    .clearfix:before, .clearfix:after {
      content:"";
      display:table;
    }
    .clearfix:after {
      clear:both;
    }
    .clearfix {
      *zoom:1;
    }
  ```

### 8. img的title和alt
1. alt: 图片无法加载显示的文字   
2. title: 图片正常加载，移动到图片上显示的文字

### 9. HTTP请求与用途
1. get: 发送请求来获得服务器的资源   
2. post: 提交数据，指定资源在服务器位置，相比于    get,携带的体积大  
3. put: 提交资源，不能指定位置   
4. delect: 删除服务器资源

### 10. 对网站就行优化
1. content: 减少http请求，合并文件，精灵图，减少dom数量   
2. server: 对组件进行Gzip压缩   
3. cookie: 减少cookie大小   
4. css： 将样式放页面顶部，用link并不用@import   
5. js: 脚本放底部，压缩js，减少DOM   
6. 图片: base64,精灵图

### 11. http状态码
1. 1xx: 信息状态码   
2. 2xx: 成功状态码
    - 200 ok,正确返回信息      
    - 201 请求成功，并且服务器创建了新的资源   
    - 202 服务器接收请求，但没有处理   
3. 3xx 重定向   
    - 301 永久重定向   
    - 302 临时重定向   
    - 303 临时重定向，且总是用get请求   
4. 4xx 服务器错误   
    - 400 服务器无法理解请求的格式   
    - 401 请求未授权   
    - 403 禁止访问   
    - 404 找不到资源   
5. 5xx   
    - 500 服务器端错误   
    - 503 服务器维护中

### 12. 浏览器内核
1. 渲染引擎: 取得网页(html)内容，加入css   
2. js引擎: 解析和执行JS来实现网页动态效果

### 13. html5增加了哪些，删除了哪些
1. 绘画canvas   
2. 媒体audio、vedio   
3. 存储localstorage、sessionstorage   
4. 语义化标签head nav footer article section   
5. 表单控件calendae data email number   
6. 新技术websocket webworker   
7. 移除:font big center frame

### 14. html的全局属性
1. class 设置类   
2. id 文档内唯一   
3. style 行内css样式   
4. title 元素相关的信息   
5. data 自定义属性   

### 15. canvas与svg区别
1. svg: 绘制的每一个图形都是独立的dom节点,可以绑定事件   
2. canvas: 输出的是一块画布   
3. 不同: canvas是画布，放大会失帧，锯齿。svg是矢量图形,可以修改参数来缩放，不失帧

### 16. div+css布局较table好处
1. 修改方便，只要改css文件   
2. 页面加载速度块，结构清晰   
3. 结构、表现分离   
4. 易优化、seo

### 17. 渐进增强和优雅降级
1. 渐进增强: 针对低版本浏览器构建页面，保证最基本的功能，然后对高版本浏览器进行效果、交互等功能的添加   
2. 优雅降级: 一开始就构建完整功能，然后针对低版本浏览器进行兼容   
3. 区别: 优雅降级是从复杂开始，减少用户体验。而渐进增强是从基础开始扩充，增加用户体验。

### 18. 网页制作用到的图片格式
jpg png jpeg svg webp(体检小，质量高，iphone不能用) Apng

### 19. display:none和visibility:hidden
1. display:none: 删除这个dom 和v-if一样   
2. visibility:hidden: 修改css样式，使其不可见，继承属性，子元素要可见要修改样式(v-show)

### 20. 为什么要初始化css样式
不同的浏览器对一些标签的默认值不同，为了让页面在任何一个浏览器显示的效果一样，就要初始化样式

### 21. css3新特性
1. 新增各种选择器   
2. 圆角 border-radius   
3. 渐变   
4. 阴影text-shadow box-shadow   
5. 动画animation:@keyframes   
6. 过渡transition 属性 时间 函数(匀速，快慢快) 延迟   
7. transform rotate(旋转) scale(缩放) translate(移动) 3d父级要加透明属性perspective

### 22. display
1. block: 变成块级元素   
2. inline: 变行内元素   
3. none: 不可见   
4. table: 像表格一样显示   
5. inline-block: 行内块级   
6. inherit: 从父级继承display值

### 23. position
1. absolute: 绝对，相对于外面第一个父元素   
2. fixed: 绝对，相对于浏览器窗口   
3. relative: 相对，相对于本身    
4. inherie: 从父元素继承

### 24. 水平居中
1. 行内元素: 设置text-align：center   
2. 宽度固定: 左右margin:auto   
3. 绝对定位： 上下左右0 margin：auto   
4. flex布局: justify-content:center

### 25. 垂直居中
1. 绝对定位: 上下0 margin:auto   
2. flex布: align-items:center   
3. 文本: line-height:height   
4. 表格: 父display:table 子display:table-ceil vertical-align:middle   

### 26. 重绘和回流(重排)
1. 重排: dom的变化影响到元素的几何属性，浏览器重新计算元素的几何属性，其他元素的几何属性也会受到影响，浏览器就要重新构造渲染树，这就叫重排。   
2. 重绘: 浏览器受到影响的部分重新绘制到屏幕上的过程   
3. 引起重排的原因
    - 添加或删除可见的dom   
    - 元素位置内容尺寸改变   
    - 页面初始化   
    - 浏览器窗口尺寸改变   
4. 重排一定重绘，重绘不一定重排

### 27. 内核
1. 火狐   -moz-   
2. IE     -ms-   
3. opera  -o-   
4. chrome safar -webkit- 

## JS(全是学完自己的归纳总结，可能有些错误)
### 1. 数据类型
1. 基本数据类型: string  number  boolean  null  undefined
2. 引用数据类型: object  function  Array
3. function: 特殊的对象，存储可执行的代码
4. Array: 特殊的对象，里面的数据有序，可以通过下标查找
5. 数据类型判断方法
    - type of: 返回数据类型的字符串表达，即```
    var a
    console(a)  // undefined
    type of(a)  //'undefined'
    ```
    可以判断String undefined boolean number
    - ==/=== 前者会先转换类型在判断是否相等，后者直接判断   
    null通过===判断   
    意思就是基本数据类型除null用===判断之外，其余都可以用 type of判断
    - instance of: A instance of B  B的显示原型是否在A的原型链上，在返回ture   
    引用数据类型都可以通过他判断

### 2. 原型链
1. var a = new person()
    - 构造函数有一个prototype属性
    - 实例对象有一个__proto__属性(尼玛，咋画图，不画图谁搞得清！！！)
    - 构造函数还有一个constructor指向这个实例，即person.constructor = a
    - 构造函数的prototype指向一个空的object对象(这个空object对象也有一个__proto__属性，指向顶级object对象，祖宗)
    - 实列的__proto__也指向这个空的object对象(这个空object对象也有一个__proto__属性，指向顶级object对象，祖宗)  
    意思就是 person.prototype = a.__ proto __    
    当我们var a = new person()时发生了什么呢?```
    var a = {}   
    a.__proto__ = person.prototype  //person.call(a)
    ```
    一目了然，先定义一个空对象，然后让创建的a的__proto__ 指向 person 的prototype   
    当我们给person的prototype赋值会怎么样呢？```
    person.prototype.number = 12```
    显然```
    a.__proto__.num = 12 //不是复制，是指向同一个对象，读值
    ```
    而上文提到他们指向的空object对象的__proto__指向顶级object对象，就是那个祖宗。讲道理，祖宗就一个哈，事实祖宗就是一个，那么就是   
    ```person.prototype.__proto__.age = 108
    ```
    那么，可以得出一个结论```
    a.__proto__.__proto__.age = 108
    ```
    //读取这个age   
    问题来了，程序员不就是为了偷懒嘛！！！不然干嘛封装一个个对象、方法(其实，这个是我现在还没搞懂)   
    那些烦人的__proto__就给省略了，什么意思呢？下面进入有奖竞猜环节，中奖自理
    ``` var a = new b()
      b.prototype.num = 12
      b.prototype.__proto__.age = 108
    ```
    那么问题来了```
    a.num = ?
    a.age = ?```
    给点提示偷懒。。。。。。
    下面公布答案，拿小本本画画吧      
    —————————————————————————————————————
    —————————————————————————————————————   
    ————————————煞费苦心的分割线——————————
    —————————————————————————————————————  
    —————————————————————————————————————   
    根据偷懒算法，显然```
    a.num = 12   
    a.age = 108```   
    有点编不下去了，下面讲变量提升和函数提升





