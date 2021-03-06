$(() => {
    $.ajax({
        type: "get",
        url: "../server/nav.json",
        dataType: "json",
        success: function (data) {
         render(data);
        }
    });
    function render(data) {
        console.log(data);

        let html = data.map((ele) => {
            return `
            <li class="s-brand X" filter_value="${ele.name}" filter_pinyin="ximeihaichan" filter_firstquanpin="xmhc" title=${ele.name} id="禧美海产" filter_id="brand_Name_FacetAll">
            <a href=${ele.href} filter_value="禧美海产" filter_id="brand_Name_FacetAll" name="">
            <img src=${ele.src} alt="${ele.name}">
            <span class="brand-name">${ele.name}</span>
            <div class="b-text" style="left: -100%; top: 0px;">
            <i></i><span class="t-name">${ele.name}</span>
            <div class="b-bg"></div>
            </div>
            <b class="icon-bottom"></b>
            </a>
            </li>
            `
        }).join("");
        $(".brands").html(html);
    };



    new Promise(function(resolve, reject) {
        $.ajax({
            type: "get",
            url: "../server/getPageCount.php",
            dataType: "json",
            success: (data) => {
                let res = "";
                for (let i = 0; i < data.count; i++) {
                    res += `<a href="javascript:;">${i + 1}</a>`
                }
                $(".search-page").html(res);
                $(".search-page").children().eq(0).addClass("active");

                resolve();
            }
        });
    }).then(function() {
        getDataWithPage(1, 0);
    })


    /* type ==0 默认排序  id */
    /* type ==1 升序排列  价格 */
    /* type ==2 降序排列  价格 */
    function getDataWithPage(page, type) {
        $.ajax({
            type: "get",
            url: "../server/getGoodsData.php",
            data: `page=${page}&sortType=${type}`,
            dataType: "json",
            success: (data) => renderUI(data)
        });
    }

    function renderUI(data) {
        console.log(data);

        let html = data.map((ele) => {
            return `
    <li  class="item-wrap" >
        <div class="item-bg">
            <div class="product-box">
                <div class="res-img">
                    <div class="img-block" tempindex="01">
                        <a target="_blank" title=""  class="sellPoint">
                            <img alt="" src=${ele.src} picpriority="2">
                        </a>
                    </div>
                </div>
                <div class="res-info">
                    <div class="price-box">
                        <span class="def-price" ><i>¥</i> ${ele.price}<i>.00</i></span>
                    </div>
                    <div class="title-selling-point">${ele.title}</div>
                    <div class="evaluate-old clearfix">
                        <div class="info-evaluate">${ele.disCount}</div>
                    </div>
                    <div class="store-stock">${ele.shopName}</div>
                    <div class="sales-label" ishotbrief="false">
                    <span class="lq"><i>领券196-118</i><em>满196用118</em></span>
                    </div>
                </div>
                <div class="res-opt one-third" data-id=${ele.good_id}>
                    <a rel="nofollow"  class="btn-db"><i></i><em>取消</em>对比</a>
                    <a rel="nofollow"  class="btn-sc"><i></i><em>已</em>关注</a>
                    <a rel="nofollow"  class="btn-gwc"><i></i>加入购物车</a>
                </div>
            </div>
        </div> 
    </li>
               
            `
        }).join("");
        $(".general").html(html);
    };

    // $(".item-wrap").mouseenter(function(){
    //     console.log("000");
        
    //     $(".item-wrap").addClass("on").siblings().removeClass("on");
    // })
    // $(".item-wrap").mouseleave(function(){
    //     $(".item-wrap").removeClass("on");
    // })
    /* 2、加入购物车的点击事件 */
    $(document).on("click",".btn-gwc", function() {
        // console.log("++")
            /* user_id user_name */
        
        let user_id = localStorage.getItem("user_id") || "";
        let user_name = localStorage.getItem("user_name") || "";
        let good_id = $(this).parent().attr("data-id");

        console.log( $(this).parent().attr("data-id"));
        if (user_id && user_name) {
            /* 发请求，执行添加到购物车 */
            $.ajax({
                url: "../server/addCart.php",
                data: { user_id, good_id }
            }).done(data => {
                console.log("返回值:", data);
            })

        } else {
            /* 跳转去登录 */
            location.href = "./login.html"
        }
    });

    /* 3、点击按钮的时候加入购物车 */
    // $(".btn-gwc").click(function() {
    //     location.href = "./cart.html"
    // });
    $(document).on("click",".sellPoint",function(){
        //  console.log("0000");
        location.href = "./product-detail.html"
    })
    
       
        
        
    
    /* 4、排序功能 */
    $(".sort >span").click(function() {

        /* 设置选中状态 */
        $(this).addClass("cur").siblings().removeClass("cur");
        // let sortType = $(this).attr("data-sort");
        let sortType = $(this).data().sort;
        // console.log("sortType", sortType);

        renderUI(sortType);

        
    })

    /* 5、分页功能 */
    $(".search-page").on("click", "a", function(e) {

        /* 排除上一页和下一页的页面点击事件 */
        // if ($(this).parent()[0].id == "prevPage" || $(this).parent()[0].id == "nextPage") return;

        /* 设置选中状态的切换 */
        $(this).addClass("active").siblings().removeClass("active");
        let page = $(this).text() * 1 - 1;
        // console.log(page);
        renderUI($(".cur").data().sort, page)
    });


    /* 上一页和下一页的功能 */
    $("#prePage,#nextPage").click(function() {

        /* 设置选中状态 */
        let page = $(".search-page").children("a").text() * 1 - 1;
        if (this.id == "prePage") {
            page--;
        } else if (this.id == "nextPage") {
            page++;
        }

        $(".search-page ").eq(page).addClass("cur").siblings().removeClass("cur")
        renderUI($(".cur").data().sort, page)
    });
    $(".tab-cart-tip-warp").click(()=>{
        // console.log("0000");
        
        location.href ="./cart.html"
    });
    $(".more-btn ").click(()=>{
        $(".height-adaption").addClass("height-adaption");
        $(".more-btn ").text("收起");
    })
});

 