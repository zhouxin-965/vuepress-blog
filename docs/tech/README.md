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

#### 垂直水平居中
```
<style>
  html,body{
    height:100%;
  }
  #box{
    box-sizing: border-box;
    height: 50px;
    width: 100px;
  }
</style>

<body>
  <div id="box"></div>
</body>
```
  - 定位方法
  1. 让他在屏幕中间，然后左移一半，上移一半，这必须要知道宽高
    ```
    body{
      position:relative;
    }
    #box{
      position:absolute;
      top: 50%;
      left: 50%;
      margin-top: -25px;
      margin-left: -50px;
    }
    ```
    2. 这个是必须要有宽高
    ```
    body{
      position:relative;
    }
    #box{
      position:absolute;
      top: 0;
      left: 0;
      right:0;
      bottom:0;
      margin:auto;
    }
    ```
    3. css3
    ```
    body{
      position:relative;
    }
    #box{
      position:absolute;
      top: 50%;
      left: 50%;
      transform:transition(-50%，-50%)
    }
    ```
    - flex，让body里面的内容居中
     ```
      body{
        display:flex;
        align-items: center;
        justify-content: center;
      }
     ```
    - JS 前提父元素 realtive
    ```
    <script>
      let win = document.documentElement
      winH =win.clientHeight
      winW = win.clientWidth


      boxH=box.offsetHeight
      boxW=box.offsetWidth

      box.style.position="absolute"
      box.style.top=(winH-boxH)/2 + 'px'
      box.style.left=(winW-boxW)/2 + 'PX'
    </script>
    ```

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

### 28. 一次url请求的过程
- 域名解析 --> 发起TCP的3次握手 --> 建立TCP连接后发起http请求 --> 服务器响应http请求，浏览器得到html代码 --> 浏览器解析html代码，并请求html代码中的资源（如js、css、图片等） --> 浏览器对页面进行渲染呈现给用户    
1. 域名解析   当我们访问www.baidu.com时，首先浏览器会先解析这个域名(主机)的IP地址
   先是浏览器看自身的dns缓存，看有没有对应的IP地址，有且没过期就进入2，没有就查找操作系统的dns缓存，看有没有，有且没过期也进入2，还没找到查找host文件夹，有没过期进入2，没有就请求运营商的dns缓存，让他给你。
2. TCP连接通过三次握手建立，释放通过四次挥手。  什是三次握手？当你去要一个女孩子微信的时候，你说：“美女，能加个微信吗？”，女孩子打量了你一眼，能接收你的长相的时候，就问“你有钱吗？你有车吗？你有房吗？”，然后你说说并拿出证据，那么恭喜你，勾搭成功了，然后过起了没羞没臊的生活。
3. 发送http请求  如我们要打开www.baidu.com, 客户端就向服务端请求访问这个页面
4. 服务端响应这个页面，客户端就能得到请求的资源，如www.baidu.com的html代码。就像女孩子觉得你长得还可以，还有钱时，就把微信给你了。
5. 客户端解析请求到的资源，如解析html代码，并请求html代码里的资源如图片等。就像你知道了女孩子的微信，你知道他的三围吗？还得厚着脸皮继续问嘛？(有感觉自己是老司机)
6. 当上面的工作做完后，浏览器就能把这个页面呈现在我们眼前了。

### 29. http与tcp
1. TCP 运输层协议 传输数据
2. http 应用层协议 怎么传输数据

### 30. 跨域
1. 

## JS(全是学完自己的归纳总结，可能有些错误)
### 1. 数据类型
1. 基本数据类型: string  number  boolean  null  undefined
2. 引用数据类型: object  function  Array
3. function: 特殊的对象，存储可执行的代码
4. Array: 特殊的对象，里面的数据有序，可以通过下标查找
5. 数据类型判断方法
    - type of: 返回数据类型的字符串表达，即
    ```
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
1. `function person(){}`   
   `var a = new person()` 
    - 构造函数有一个prototype属性
    - 实例对象有一个__proto__属性(尼玛，咋画图，不画图谁搞得清！！！)
    - 每个原型都有一个 constructor 属性指向关联的构造函数 实例原型指向构造函数 person.prototype.constructor=person
    - 构造函数的prototype指向一个空的object对象(这个空object对象也有一个__proto__属性，指向顶级object对象，祖宗，上面没人了，在__proto__ = null)
    - 实列的__proto__也指向这个空的object对象(这个空object对象也有一个__proto__属性，指向顶级object对象，祖宗，上面没人了，在__proto__ = null)  
    意思就是 `person.prototype = a.__ proto __  `  
    当我们`var a = new person()`时发生了什么呢?
    ```
      var a = {}   
      a.__proto__ = person.prototype  //person.call(a)
    ```
    一目了然，先定义一个空对象，然后让创建的a的__proto__ 指向 person 的prototype   
    当我们给person的prototype赋值会怎么样呢？   
    `person.prototype.number = 12`   
    显然 `a.__proto__.num = 12` //不是复制，是指向同一个对象，读值
    而上文提到他们指向的空object对象的__proto__指向顶级object对象，就是那个祖宗。讲道理，祖宗就一个哈，事实祖宗就是一个，那么就是   
    `person.prototype.__proto__.age = 108`   
    那么，可以得出一个结论  `a.__proto__.__proto__.age = 108`  //读取这个age   
    问题来了，程序员不就是为了偷懒嘛！！！不然干嘛封装一个个对象、方法(其实，这个是我现在还没搞懂)   
    那些烦人的__proto__就给省略了，什么意思呢？下面进入有奖竞猜环节，中奖自理
    ```
      var a = new b()
      b.prototype.num = 12
      b.prototype.__proto__.age = 108
    ```
    那么问题来了`  a.num = ?   a.age = ?`
    给点提示偷懒。。。。。。
    下面公布答案，拿小本本画画吧      
    —————————————————————————————————————
    —————————————————————————————————————   
    ————————————煞费苦心的分割线——————————
    —————————————————————————————————————  
    —————————————————————————————————————   
    根据偷懒算法，显然`a.num = 12  a.age = 108`
    终极大招，Function也是一个函数，他也是new Function产生的      
    Object也是一个函数,也是 new Function产生的，即      
    ` Function = new Function()     
      Object = new Function()`      
    此外，有句话叫做万物皆对象   
    `
    Function = new Object()   
    Object = new Object()   
    `
    根据这几句代码，可以得出   
    ```
    Function.__proto__ = Function.prototype   
    Object.__proto__ = Function.prototype   

    Function.__proto__ = Object.prototype   
    Object.__proto__ = Object.prototype   
    ```

### 3. 变量提升、执行上下文
1. 当一个页面被加载时会发生什么呢？   
- 首先-->页面被加载-->创建windows全局对象-->生成全局作用域-->生成执行上下文-->变量提升-->生成全局变量对象   
  - 在执行全局代码之前，先将windows确定为全局执行上下文
  - var 定义的全局变量和函数，添加到windows上为windows的属性，并赋值为null   
  即 ```
    console.log(a)   
    var a=3
    得到的结论是 undefined，即  console.log(a) ==> undefined   
    ```   
    这其中涉及到什么呢   
    根据上文所说，先将windows确定为执行上下文   
    然后 var  定义的变量，赋值为undefined, 且在windows上   
    可以这样理解   
    ```
    var a;
    console.log(a);
    a=3;
    ```
    看到上面的代码可以知道 定义了a，但是喂赋值，所以为undefined   
    所以```
    console.log(fn)
    var fn = function(){
      console.log('a')
    }
    ```
    这里`console.log(fn)`是什么呢？   
    根据上面所说，是 undefined   
    那么函数声明呢？函数声明和函数定义有什么区别？   
    ```
    console.log(gn)   
    function gn(){
      console.log('b')
    }
    console.log(gn)==>function gn(){
      console.log('b')
    }
    ```
    windows会把函数声明的所有数据添加到他的属性里   
    所以可以通过windows获取   
    console.log(windows.a) = 3   
    并且函数提升是优先于变量提升的   
    看下面这段代码   
    ```
      console.log(a)  //f a(){console.log('11111)}  这里不是undefined的原因就是函数提升优先于变量提升
      console.log(a()) // undefined
      var a = 3
      function a(){
        console.log('11111')
      }
      console.log(a)  //3
      a=6
      console.log(a()) //a is not a function  这里被覆盖了，上一句代码赋值了
      ```   
      原理
      ```
        var a = function(){
          console.log('11111')
        }
        var a
        console.log(a)
        console.log(a())

        a=3
        console.log(a) //3
        a=6
        console.log(a()) // a is not a function
      ```
      函数提升优先级比变量提升优先级高，不会被变量声明覆盖。但会被变量赋值覆盖

### 4. Cookie Session token
- 由于Http是无状态信息的(当时的硬件与效率原因)，无法保存信息，而随着用户需求的增加，与服务器效率，用cokie session token来记录信息    
    - cookie 明文 保存在客户端，不消耗服务器资源，不安全，是一个在硬盘的文件，有缓存作用，用来 存一些不敏感的消息
    - 客户端发送信息(账号，密码),正确且用了session技术的话服务器会发送一个包含sesion id的cookie给客户端，客户端下次进入，向服务端发送这个cookie，如果服务端的session id 有这一个就成功了(cookie可以单独使用，sesson必须配合cookie使用)，最大的缺点就是服务器要记录session id，在现在，一些app的人数爆炸，如果存几万个，几十万个，就得返回500了
    - token 不存储  会把header头以及保存用户信息得俩部分通过某种算法变成一个签名（加密后得一种验证码），在加密变成一串字符串。验证时解析这个字符串，得到header以及保存得信息部分及签名，在比较俩签名是否相同，相同那么header与信息是正确的

### 5. MVC 与 MVVM
1. MVC model + view + controller MVC的思想：一句话描述就是Controller负责将Model的数据用View显示出来
    - model 数据存放的地方，提供接口供controller使用
    - controller c处理应用程序中用户交互的部分 从视图层读取存在模型层，或者从模型层读取，渲染到视图层
    - view 能看到的，一般都是模型层的数据   
  view 与 model是单向的，不会直接交互，必须通过controller
2. MVVM 以前，由于页面功能的操作不是那么的频繁，所以mvc完全应付的过来。而随着功能逐渐的丰富，view或model频繁的更改，dom被频繁的操作，controller就有点力不从心了。为了解决这个问题，就出现了MVVM，MV还是熟悉的配方，管理者自己的事，而区别就是VM,他能沟通MV，通过数据绑定将model转化为view,通过事件监听将view转化为model,从而对数据进行双向数据绑定(vue的object.defineProperty的set\get)

### 6. 浅拷贝 深拷贝
1. 浅拷贝 对原对象的引用，当你修改了某些值，原对象对应的值也会改变   
  var obj = {
    a:1;
    arr:[2,3]
  }
  var cloneobj = clone(obj)

  function clone(obj){
    let newobj = {}
    for(let item in obj){
      if(obj.hasOwnProperty(item))  // 如果obj有item这个属性
      {
        newobj[item] = obj[item]
      }
    }
    return newobj
  }
  newobj.arr[1]=100;
  console.log(obj.arr[1])  //100
  ```   
  这里遍历的只是最前排，若对象里面只是基本数据类型，那么这也算是深拷贝了，包括obj.spice() obj.contact   
  但如果里面包含引用数据类型，就行不通了

2. 深拷贝 开辟一片新内存，将值拷贝过去
    - Json.parse(Json.stringify())  最简单粗暴的一种方法
    - 递归
    ```
      var obj = {
       name:'周心',
       age:22,
       BirthPlace:['中国', '江西',  宜春']
      }
      let deepobj = deepClone(obj)
      deepobj.BirthPlace[1]="湖南"
      deepobj.BirthPlace[2]="长沙"
      console.log(obj)  // ... 中国 江西 宜春
      console.log(deepobj)  // ... 中国 湖南 长沙


      function deepClone(obj){
        var src = obj.constructor = Array?[]:{} // 判断obj属于啥子类型，并创建该空类型

        for(let item in obj){
          if(typeof obj[item]==="object"){
            src[item]=deepClone(obj[item]);
          }else{
            src[item]=obj[item];
         }
        }
        return src
      }
  ```

    







