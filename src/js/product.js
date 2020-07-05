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
    $(".category-nav-sup").on("mouseenter","li",function(){
        $(this).addClass("hover");
    });
    $(".category-nav-sup").on("mouseleave","li",function(){
       $(this).removeClass("hover");
    });
    class NavSide{
        constructor(data){
            this.data=data;
        }
        init(){
            let ulHtml=this.rendernav();
            $(".category-nav-sup").html($(ulHtml));
        }
        rendernav(){
            let liHtml="";
            for(let i=0;i<this.data.length;i++){
                let top=`<div class="sup-item"> 
                    <a href=""><i></i>${this.data[i].ntitle[0]}</a> 
                    <em> <a href="">${this.data[i].ntitle[1]}</a> / <a href="">${this.data[i].ntitle[2]}</a> </em> 
                </div>`;
                let dl=this.data[i].type1.map((ele,index)=>{
                    let dd=this.data[i].type2[index].map((item)=>{
                        return `<a target="_blank" href=""> <i>${item}</i> </a>`
                    }).join("");
                    return `<dl class="clearflix"> 
                    <dt> 
                     <a target="_blank" href="">${ele}<i>&gt;</i> </a> 
                    </dt> 
                    <dd>${dd}</dd></dl> `
                }).join("")
                let left=`<div class="left">${dl}</div>`;
                let logo=this.data[i].logo.map((ele)=>{
                    return `<a href=""><img src=${ele} /></a>`
                }).join("");
                let logoHtml=`<div class="menu-ad-logo">${logo}</div>`;
                let img=this.data[i].img.map((ele)=>{
                    return `<a href=""><img src=${ele} /></a>`
                }).join("");
                let imgHtml=`<div class="menu-ad-img">${img}</div>`;
                let menu1=`<div class="left">${left}</div>`;
                let menu2=`<div class="menu-ad">${logoHtml}${imgHtml}</div>`;
                let sub=`<div class="sub-item">${menu1}${menu2}`;
                liHtml+=`<li class=${this.data[i].cla}>${top}${sub}</li>`;
            }
            return liHtml;           
        }
    };
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
    $("#810730").text(obj.pname);
    $(".micText").text(obj.pbenefit);
    $(".price em").text(obj.pnowprice);
    $(".oldPrice em").text(obj.poldprice);
    $(".active i").text(obj.pdex.substr(3));
    $("#pharmacyName").text(obj.pharmname);
    $(".shopCart").text(obj.pcar);
    if(obj.pcar=="加入购物车"){
        $(".immediatelybuy").text("立即购买");
    }
    else{
        $(".immediatelybuy").text("需求登记");
        $(".addConsultation").css("display","block");
        $(".prescribed-tip").css("display","block");
    }
    
    //放大镜
    
        $(".pdtImg").on("mouseenter",function(){
            $(".zoomPup").css("display","block");
            $(".zoomWindow").css("display","block");
        });

        $(".pdtImg").on("mousemove",function(e){
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
            var biliX = ($(".zoomWrapperImage img").outerWidth() - $(".zoomWrapperImage").outerWidth())/maxX;
            // 这个比例相当于是 遮罩移动一像素，大图片需要移动的距离
            var biliY = ($(".zoomWrapperImage img").outerHeight() - $(".zoomWrapperImage").outerHeight())/maxY;

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