$(()=>{
    
    //获取商品详细信息
    // let search=decodeURI(window.location.search.slice(1));
    // function objString(str){
    //     let arr=str.split("&");
    //     let o={};
    //     arr.forEach(function(ele) {
    //         let item=ele.split("=");
    //         let key=item[0];
    //         var value=item[1];
    //         o[key]=value;
    //     });
    //     return o;
    // }
    // let obj=objString(search);
    // console.log(obj);
    // $(".view-img").attr("href",obj.psrc);
    // console.log($("img"));
    // let img=$("img");
    // for (let i=0;i<img.length;i++){
    //     img[i].src=obj.psrc
    // }
   
    
    
//     //放大镜
    
        $(".imgzoom-main").on("mouseenter",function(){
            $(".imgzoom-pop").css("display","block");
            $(".imgzoom-shot").css("opacity","0.5")
        });

        $(".imgzoom-main").on("mousemove",function(e){
            // console.log(e.clientY, $(".imgzoom-main").offset().top);
            let moveX = e.pageX - $(".view-img").offset().left - $(".imgzoom-shot").outerWidth()/2;
            let moveY = e.pageY - $(".view-img").offset().top - $(".imgzoom-shot").outerHeight()/2;
            // 遮罩可以运动的最大X方向的距离
            var maxX = $(".view-img").outerWidth() - $(".imgzoom-shot").outerWidth(); 
            // 遮罩可以运动的最大Y方向的距离
            var maxY =$(".view-img").outerHeight() - $(".imgzoom-shot").outerHeight(); 
             
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
            var biliX = ($(".imgzoom-pop img").outerWidth() - $(".imgzoom-pop").outerWidth())/maxX;
            // 这个比例相当于是 遮罩移动一像素，大图片需要移动的距离
            var biliY = ($(".imgzoom-pop img").outerHeight() - $(".imgzoom-pop").outerHeight())/maxY;

            // 给遮罩添加移动
            $(".imgzoom-shot").css("top",moveY);
            $(".imgzoom-shot").css("left",moveX);
            $(".imgzoom-pop img").css("top",-moveY*biliY);
            $(".imgzoom-pop img").css("left",-moveX*biliX);

        });

        $(".imgzoom-main").on("mouseleave",function(){
            $(".imgzoom-pop").css("display","none");
            $(".imgzoom-shot").css("opacity","0")
        });
        $(".imgzoom-thumb-main").on("mouseenter","li",function(){
           $(this).addClass("current").siblings().removeClass("current");
         
        });
    
})