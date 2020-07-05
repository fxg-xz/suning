 $(()=>{
  $(".placeholder").click(function(){
    $(this).toggle().siblings("#mobileAliasRSA").toggle();
  });
  $("#mobileAlias").click(function(){
    $(this).parents(".input-box").siblings(".error-msg").text("验证完成后，您可以使用该手机登录或者找回密码").css("color","#cacaca"); 
  });
  $("#mobileAlias").keyup(function () { 
    let val = $(this).val().trim();
        if (/^1[3-9]\d{9}$/.test(val)) { 
            $(this).parents(".input-box").siblings(".error-msg").text("");   
        }else {
            $(this).parents(".input-box").siblings(".error-msg").text("格式不正确，请您输入正确的手机号码");
            
        }
    });
    $("#mobileAlias").blur(function(){
        let val = $(this).val().trim();
        if(val.length==0){
            $(this).parents(".input-box").siblings(".error-msg").text("请输入注册手机!").css("color","red");
        }else if(/^1[3-9]\d{9}$/.test(val)&&val.length==11){
            $(this).siblings(".ok").addClass(".ok");
        }
    });
//  验证码
let id;
    $(".send-msg").click(function() {
        $("#mobileAlias").trigger("keyup");
        let flag = $(".error-msg").hasClass(".error-msg");
        /* 如果flag的值是flase,那么我们就调用第三方平台发请求 发短信 */
        
        if (flag) return;
        id = 1234;
        $.ajax({
            type: 'post',
            url: 'http://route.showapi.com/28-1',
            dataType: 'json',
            data: {
                "showapi_appid": '91032', //这里需要改成自己的appid
                "showapi_sign": 'd57b19c8d2d44aef94aee464768a38d8', //这里需要改成自己的应用的密钥secret
                "mobile": $("#phoneID").val(),
                "content": `{"name":"文顶顶","code":${id},"minute":"3","comName":"脑子进水集团"}`,
                "tNum": "T150606060601",
            },
            success: (result) => console.log(result)
        });
    });

    $("#setPsw").keyup(function() {
        let val = $(this).val().trim();
        /*密码长度6-20字符（大小写字母和数字）  */
       
        $("#setPsw_rank").removeClass("hide")
        if(/([0-9]|[a-zA-Z]|\S){6,}/.test(val)){
            $(".level1").css("background","#fa0")
        }else if(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-z]|[A-Z]|[0-9]){6,}$/
        .test(val)){
            $(".level2").css("background","#fa0")
        }else if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/.test(val)){
            $(".level3").css("background","#fa0")
        }
    })
    $("#setPsw").blur(function() {
        
        let val = $(this).val().trim();
        $("#setPswTip").css("display","block");
        if (/^\w{6,20}$/.test(val)) {
            $(this).parents(".input-box").siblings(".error_warp").children("#setPswTip").text("");
        }else if(/^\d{6,20}$/.test(val)){
            $(this).parents(".input-box").siblings(".error_warp").children("#setPswTip").text("不能为纯数字！");
        }else if(/^[a-zA-Z]{6,20}$/.test(val)){
            $(this).parents(".input-box").siblings(".error_warp").children("#setPswTip").text("不能为纯字母！");
        };
    });
    // 注册按钮
    $(".submit-btn").click(function() {

        $("#mobileAlias").trigger("keyup");
        $(".send-msg").trigger("keyup");
        $("#setPsw").trigger("keyup");
        $("#setPsw").trigger("blur");

        if ($(".form-group-error").length != 0) return;
        
        if ($("#smsCode").val() != id) {
            alert("手机验证码不正确!");
            return;
        }



        /* 发请求给服务器  注册： */
        let username=$("#mobileAlias").val();
        let password=$("#setPsw").val();
        $.ajax({
            type: "post",
            url: "../server/register.php",
            data: `username=${username}&password=${password}`,
            // dataType: "json",
            success: function(response) {
                console.log(response);
                if(response == "error"){
                    alert("用户已存在，请重新注册！")
               }
               else if(response=="success"){
                    //成功
                   window.location.href="login.html";
                   
               }
               else{
                   /* 注册失败： */
                   alert("注册失败！！");
               }
            }
        });
    })


 })


    
