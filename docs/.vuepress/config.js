module.exports={
  title:"周心的技术博客",
  head:[
    ['link',{rel:'icon',href:`/avatar.PNG`}],
    ['link',{rel:'manifest',href:`/spider.PNG`}],
    ['link',{rel:'apple-touch-icon',href:`/spider.PNG`}],
  ],
  serviceWorker:true,
  themeConfig:{
    logo:'/avatar.PNG',//左上角logo
    nav:[//导航栏配置
      {text:'首页',link:'/'},
      {text:'技术文档',link:'/tech/'}

    ],
    sidebar:'auto',//侧边栏配置
    sidebarDepth:2
  }

};