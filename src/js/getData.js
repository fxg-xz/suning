var oLis = $(".general").children(".item-wrap");
var data = [];
oLis.each(function(index) {
    let o = {};
    o.good_id = index + 1;
    o.src = this.getElementsByTagName("img")[0].src;
    o.title = this.getElementsByTagName("img")[0].alt;
    o.price = this.getElementsByClassName("def-price")[0].innerText.substr(1) * 1;
    o.disCount = this.getElementsByClassName("info-evaluate")[0] ? this.getElementsByClassName("info-evaluate")[0].innerText : 1000;
    o.shopName = this.getElementsByClassName("store-name")[0] ? this.getElementsByClassName("store-name")[0].innerText : "皮皮虾";
    data.push(o);
});


var oDl = $(".ng-sn-site-nav ").children(".sn-site-list");
var data = [];
oDl.each(function(index) {
    let o = {};
    o.title=$(".sn-site-list").children("dt").eq(index).text();
        var op=$(".sn-site-list").children("dd").children("p");
        var arr=[];
    op.each(function(index){
       var tab=$(".sn-site-list").eq(index).children("dd").children("p").eq(index).text();
       arr.push(tab);
    })
    o.tab_title=arr; 
    data.push(o);
});



    