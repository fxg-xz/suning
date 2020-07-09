// const { data } = require("jquery");

$(()=>{
    //用户登录状态
    load_data();
    function load_data(){
        var theme=localStorage.getItem("user");
        if(theme==null||theme==""){
           $(".username-handle").hide();
           $("#reg-bar-node").show();
            $("#usernameHtml02").html('');
        }else{
            $(".username-handle").show(); 
            $("#reg-bar-node").hide(); 
            $("#usernameHtml02").html(theme);
           $(".ng-username-slide").mouseenter(()=>{
                $(".ng-username-slide").css("display","block");
                $(".username-bar-node").addClass("ng-bar-node-hover")
            });
            $(".ng-username-slide").mouseleave(()=>{
                 $(".ng-username-slide").css("display","none");
                 $(".username-bar-node").removeClass("ng-bar-node-hover");
             });
        }
   } 
   //退出登录
   $(".ng-username-slide").on("click","a",function(){
       exitu();
   })
    function exitu(){
        localStorage.removeItem("user"); 
        //刷新部分
        load_data();
    }
//     header
    //登录、注册
    // $(".reg-bar-node").on("click", ".login",function(){
    //     console.log("666");
        
    //     window.location.href="./login.html"
    // });
    $(".reg-bar-node").on("click",".reg-bbb",function(){

        window.location.href="./register.html"
    });
    // 二级菜单栏
    $.ajax({
        type: "get",
        url: "../server/nav1.json",
        dataType: "json",
        success: function (data) { 
          nav(data);

              
        }
    });
      function  nav(data){ 
           var html='';
            for(var i=0;i<5;i++){
                var nav2 = '';   
                var len=data[i].tab_title.length;  

               for(var j=0;j<len;j++){
                    nav2 +=`
                    <p><a>${data[i].tab_title[j]}</a></p>
                    `
                };  
                 html+=`
                <dl class="sn-site-list">
                    <dt>${data[i].title}</dt>
                    <dd>${nav2}</dd>
                    </dl>
                        `        
        };
        $(".site-nav-child").html(html);
        var shop='';
        var service='';
        var len2=data[5].tab_title.length;
        var len3=data[6].tab_title.length;
        for(var m=0;m<len2;m++){
            shop+=`<a href="###"  rel="nofollow" target="_blank">${data[5].tab_title[m]}</a>`;    
        };
        for(var n=0;n<len3;n++){
            service+=`<a href="###"  rel="nofollow" target="_blank">${data[6].tab_title[n]}</a>`;    
        };
        $(".shop-center-child").html(shop);
        $(".service-center-child ").html(service);
    };

   $(".site-nav-child").mouseenter(()=>{
       $(".site-nav-child").css("display","block");
       $(".ng-bar-node-site").addClass("ng-bar-node-hover")
   })
   $(".site-nav-child").mouseleave(()=>{
       $(".site-nav-child").css("display","none");
       $(".ng-bar-node-site").removeClass("ng-bar-node-hover");
     
   });
    $(".ng-bar-node-site").mouseenter(()=>{
        $(".ng-sn-site-nav").css("display","block");
        $(".ng-bar-node-site").addClass("ng-bar-node-hover")
    });
    $(".ng-bar-node-site").mouseleave(()=>{
         $(".ng-sn-site-nav").css("display","none");
         $(".ng-bar-node-site").removeClass("ng-bar-node-hover");
     });
     $(".ng-bar-node-shop").mouseenter(()=>{
        $(".shop-center-child").css("display","block");
        $(".ng-bar-node-shop").addClass("ng-bar-node-hover")
    });
    $(".ng-bar-node-shop").mouseleave(()=>{
         $(".shop-center-child").css("display","none");
         $(".ng-bar-node-shop").removeClass("ng-bar-node-hover");
     });
     $(".ng-bar-node-service").mouseenter(()=>{
        $(".service-center-child").css("display","block");
        $(".ng-bar-node-service").addClass("ng-bar-node-hover")
    });
    $(".ng-bar-node-service").mouseleave(()=>{
         $(".service-center-child").css("display","none");
         $(".ng-bar-node-service").removeClass("ng-bar-node-hover");
     });
    //  $(".touch-href").mouseenter(()=>{
    //     $(".mysuning-child").css("display","block");
    //     $(".touch-href").addClass("ng-bar-node-hover")
    // });
    // $(".touch-href").mouseleave(()=>{
    //      $(".mysuning-child").css("display","none");
    //      $(".touch-href").removeClass("ng-bar-node-hover");
    //  });
    $(".ng-bar-node-mini-cart").mouseenter(()=>{
        $(".ng-bar-node-mini-cart").addClass("ng-bar-node-hover");
        $(".cart-child").css("display","block");
    });
    $(".ng-bar-node-mini-cart").mouseleave(()=>{
       $(".ng-bar-node-mini-cart").removeClass("ng-bar-node-hover");
       $(".cart-child").css("display","none");
    });
    $(".mb-suning").mouseenter(()=>{
        $(".mb-suning").addClass("ng-bar-node-hover");
        $(".mb-down-child").css("display","block");
    });
    $(".mb-suning").mouseleave(()=>{
       $(".mb-suning").removeClass("ng-bar-node-hover");
       $(".mb-down-child").css("display","none");
    });


    // 
    $.ajax({
        type: "get",
        url: "../server/nav3.json",
        dataType: "json",
        success: function (data) { 
          nav3(data);
     console.log(data);
     
        }
    });
      function  nav3(data){ 
           var html='';
            for(var i=0;i<5;i++){
                var navThree = '';   
                var len=data[i].tab_title.length;  
               for(var j=0;j<len;j++){
                    navThree +=`
                    <a href="###"_blank"  data-hot="" data-color="">${data[i].tab_title[j]}</a>
                    `
                };  
                 html+=`
                 <li class="sort-item">
                 <em class="iconfont tubiao cate${i+1}"></em>
                 <span class="sort-item-title">${data[i].title}</span><i class="iconfont arrow"></i>
                 <span class="sort-item-list">${navThree}</span>
                 </li>
                        `           
        };
        $(".sort-list").html(html);
        
    };
    // 轮播图
   

    //侧边楼层导航条事件
    $(document).ready(function(){//在文档加载完毕后执行
        //使用jq获取各个元素
        let $list = $(".ECode-floatBar ul .floor-nav"); 
        let $topLi = $(".return"); 
        let $floorDiv = $(".main-floor"); 
        let flag = true; 
        $list.click(function () { 
            flag = false;
            // /点击时，滚动条不可以被操作
            //使用jq改变当前的li的样式
            // let res="cur"+$(this).index();
            // console.log(res,"++++");
            $(this).addClass("hover").siblings().removeClass("hover"); 
            //获取当前操作的楼层号的下标
            let index = $(this).index();
            //根据下标获取对应的楼层
            let $floor = $floorDiv.eq(index);
            //获取该楼层相对于body的距离
            let bTop = $floor.offset().top;
            //设置页面滚走的距离 为 bTop
            $("body,html").animate({
                scrollTop: bTop
            }, 1000, function () {
                flag = true;
            });
        })
        $(".return").click(function(){
            $(this).addClass("hover").siblings().removeClass("hover")
        })

    // //回到顶部
        $topLi.click(function () {
            flag = false;
            $("body,html").animate({
                scrollTop: 0
            }, 1000, function () {
                flag = true;
            });
        });
        //
        $(".sn-sidebar-to-top").click(function () {
            flag = false;
            $("body,html").animate({
                scrollTop: 0
            }, 1000, function () {
                flag = true;
            });
        })

    //     //操作滚动条显示对应的楼层号
        $(window).scroll(function () {
            if (flag) {
                //获取页面滚走的距离
                let sTop = $(document).scrollTop();
                if(sTop>=$floorDiv.eq(0).offset().top-400){
                    $(".ECode-floatBar").css("display","block");
                }
                else {
                    $(".ECode-floatBar").css("display","none");
                }          
                var num = 0;        
                for(var i = 0; i < $list.length;i++){        
                    if(sTop >= $floorDiv.eq(i).offset().top){ 
                        num = i;
                        $list.eq(num).removeClass();
                    }  
                }            
                // let str="cur"+num;
                $list.eq(num).addClass("hover").siblings().removeClass("hover");               
            }
        })
    })
    
   

    //最后楼层渲染
    $.ajax({
        type: "get",
        url: "../server/floor.json",
        dataType: "json",
        success: function (data) { 
          render(data);  
          renderR(data);                
        //   console.log(data);
        }
    });
  function render(data){
      
        let Li=data[0].topFloor.map((ele)=>{
            return `<li >
            <a  target="_blank"  title=${ele.title}>
            <img class="lazy-loading" src=${ele.src}>
            <p class="name">${ele.name}</p>
            <p class="price"><em class="price-number" style="display:block;">${ele.price==null?"售罄":ele.price}</em><em class="price-last" style="display: none;">售罄</em></p>
            </a>
            <p class="cartBtn soldout"></p>
            <em class="num num1"></em></li>`
        }).join("");
        let title1=`<div class="title">
        <i class="dot dot1"></i>
        <div class="info-box">
        <p class="lg"><em>/</em><span>热销排行</span><em>/</em></p>
        <p class="sm">TOP SELLING</p>
        </div>
        <i class="dot dot2"></i>
        </div>
        <ul class="clearfix">${Li}</ul> `
        $(".main-floor ").eq(0).html(title1);    
    };

    function renderR(data){
        for(var i=1;i<4;i++){
        var floor = '';  
        $.each(data[i].products,function(key,val){
            floor +=`
            <li >
             <a  target="_blank"  title=${data[i].products[key].title}>
             <img class="lazy-loading" src=${data[i].products[key].src}>
             <p class="name">${data[i].products[key].name}</p>
             <p class="price"><em class="price-number" style="display:block;">${data[i].products[key].price==null?"售罄":data[i].products[key].price}</em><em class="price-last" style="display: none;">售罄</em></p>
             </a>
             <p class="cartBtn soldout"></p>
            
            `
        });  
        let  html=`<div class="col1">
            <a href=""  target="_blank">
            <img alt=${data[i].Ltitle} class="lazy-loading" src=${data[i].Lsrc}>
            </a>
            </div> 
            <div class="col2">
                <ul class="clearfix">${floor}
                 </ul>
                </div>
                ` 
            $(".good-floor").eq(i-1).html(html);
            
    }
    };
     
 
    //右侧工具条
    
    $(".sn-sidebar-tab-message").mouseenter(()=>{    
        $(".sn-sidebar-tab-message").addClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","-47px")
    });
    $(".sn-sidebar-tab-message").mouseleave(()=>{
        $(".sn-sidebar-tab-message").removeClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","0px");
    });
    $(".sn-sidebar-tab-finance").mouseenter(()=>{    
        $(".sn-sidebar-tab-finance").addClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","-47px")
    });
    $(".sn-sidebar-tab-finance").mouseleave(()=>{
        $(".sn-sidebar-tab-finance").removeClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","0px");
    });
    $(".sn-sidebar-tab-history").mouseenter(()=>{    
        $(".sn-sidebar-tab-history").addClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","-47px")
    });
    $(".sn-sidebar-tab-history").mouseleave(()=>{
        $(".sn-sidebar-tab-history").removeClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","0px");
    });
    $(".sn-sidebar-tab-sign").mouseenter(()=>{    
        $(".sn-sidebar-tab-sign").addClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","-47px")
    });
    $(".sn-sidebar-tab-sign").mouseleave(()=>{
        $(".sn-sidebar-tab-sign").removeClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","0px");
    });
    $(".sn-sidebar-service").mouseenter(()=>{    
        $(".sn-sidebar-service").addClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","-47px")
    });
    $(".sn-sidebar-service").mouseleave(()=>{
        $(".sn-sidebar-service").removeClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","0px");
    });
    $(".sn-sidebar-feedback").mouseenter(()=>{    
        $(".sn-sidebar-feedback").addClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","-47px")
    });
    $(".sn-sidebar-feedback").mouseleave(()=>{
        $(".sn-sidebar-feedback").removeClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","0px");
    });
 
    $(".sn-sidebar-code").mouseenter(()=>{
        $(".sn-sidebar-code").parents().siblings(".tab-tip-code-warp").toggle().css("left","-160px");
    });
    $(".sn-sidebar-code").mouseleave(()=>{
        $(".sn-sidebar-code").parents().siblings(".tab-tip-code-warp").toggle().css("left","0px");
    });
  
 
    $(".sn-sidebar-to-top").mouseenter(()=>{
        $(".sn-sidebar-to-top").addClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","-47px")
    });
    $(".sn-sidebar-to-top").mouseleave(()=>{
    $(".sn-sidebar-to-top").removeClass("sn-sidebar-tab-hover").children(".tab-icon-msg").css("left","0px");
    });
    $(".tab-cart-tip-warp").click(()=>{
       window.location.href="cart.html";
    });
 
    $(".main-floor").children(".cartBtn").click(()=>{
        window.location.href="cart.html";
     });
})