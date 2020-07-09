$(()=>{
    $.ajax({
        type: "get",
        url: "../server/getList.php",
        dataType: "json",
        success: function (navdata) {
            let navside=new NavSide(navdata);
            navside.init();
        }
    });
    
       
   
    $(".category").mouseenter(function(){
        $(".category-nav-wrap").css("display","block");
    });
    $(".category").mouseleave(function(){
        $(".category-nav-wrap").css("display","none");
    });
    $(".category-nav-wrap").mouseenter(function(){
        $(".category-nav-wrap").css("display","block");
    });
    $(".category-nav-wrap").mouseleave(function(){
        $(".category-nav-wrap").css("display","none");
    });
    $(".imgzoom-thumb-main").on("mouseenter","li",function(){
        $(this).addClass("current");
    });
    $(".imgzoom-thumb-main").on("mouseleave","li",function(){
       $(this).removeClass("current");
    });
    class NavSide{
        constructor(data){
            this.data=data;
        }
    }
    //获取商品详细信息
    let search=decodeURI(window.location.search.slice(1));
    function objString(str){
        let arr=str.split("&");
        let o={};
        arr.forEach(function(ele) {
            let item=ele.split("=");
            let key=item[0];
            var value=item[1];
            o[key]=value;
        });
        return o;
    }
    let obj=objString(search);
    console.log(obj);
    $(".jqzoom").attr("href",obj.psrc);
    console.log($("img"));
    let img=$("img");
    for (let i=0;i<img.length;i++){
        img[i].src=obj.psrc
    }
   
    
    
//     //放大镜
    
        $(".view-img").on("mouseenter",function(){
            $(".imgzoom-pop").css("display","block");
            $(".zoomWindow").css("display","block");
        });

        $(".view-img").on("mousemove",function(e){
            console.log(e.clientY, $(".pdtImg").offset().top);
            let moveX = e.pageX - $(".zoomPad").offset().left - $(".zoomPup").outerWidth()/2;
            let moveY = e.pageY - $(".zoomPad").offset().top - $(".zoomPup").outerHeight()/2;
            // 遮罩可以运动的最大X方向的距离
            var maxX = $(".zoomPad").outerWidth() - $(".zoomPup").outerWidth(); 
            // 遮罩可以运动的最大Y方向的距离
            var maxY =$(".zoomPad").outerHeight() - $(".zoomPup").outerHeight(); 
             
            // 设置最大可以移动距离
            if(moveX>= maxX) {
                moveX = maxX;
            }
            if(moveY>= maxY) {
                moveY = maxY;
            }

            // 设置最小可以移动距离
            if(moveX <=0){
                moveX = 0;
            }

            if(moveY<=0){
                moveY = 0;
            }

            // 大图片可以移动的最大距离
            var biliX = ($(".imgzoom-pop img").outerWidth() - $(".zoomWrapperImage").outerWidth())/maxX;
            // 这个比例相当于是 遮罩移动一像素，大图片需要移动的距离
            var biliY = ($(".zoomWimgzoom-poprapperImage img").outerHeight() - $(".zoomWrapperImage").outerHeight())/maxY;

            // 给遮罩添加移动
            $(".zoomPup").css("top",moveY);
            $(".zoomPup").css("left",moveX);
            $(".zoomWrapperImage img").css("top",-moveY*biliY);
            $(".zoomWrapperImage img").css("left",-moveX*biliX);

        });

        $(".pdtImg").on("mouseleave",function(){
            $(".zoomPup").css("display","none");
            $(".zoomWindow").css("display","none");
        });
    
    
})