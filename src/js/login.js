$(() => {
  $(".tab-item").click(function(){ 
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parents(".login-tab").siblings().toggle()

    });
    $(".login-switch").click(function(){ 
        // $(this).addClass("on").siblings().removeClass("on");
        $(this).parents(".username-login").toggle().siblings().toggle()

    });
    $(".input-box").children("label").click(function(){
      
        $(this).toggle().parents(".input-box").addClass("input-focus");
        
    })


    $("#submit").click(function() {
        let username = $.trim($("#userName").val());
        let password = $.trim($("#password").val());
        console.log(password);
        
        if (username.length == 0) {
            alert("请输入用户名");
            return;
        }

        if (password.length == 0) {
            alert("请输入密码");
            return;
        }

        if (username==undefined) {

          $(".username-box").siblings().children(".login-error").toggle().addClass("login-error").children("span").text("该用户名不存在！");
        }
        if(password.length<6){
            $(".username-box").siblings().children(".login-error").toggle().addClass("login-error").children("span").text("请输入6-20位密码！");
        }
        $(".login-switch").click(function(){
            $(".username-login").toggle().siblings(".phone-login").toggle();
        })
        
      

            /* 给登录按钮添加点击事件 */
            $("#submit").click(function() {
                let username = $.trim($("#userName").val());
                // let username = $.trim($("#phoneNumber").val());
                let password = $.trim($("#password").val());
        
                $.ajax({
                    type: "post",
                    url: "../server/login.php",
                    data: { username, password },
                    dataType: "json",
                }).done(data => {
                    // console.log(data);
                    if (data.status == "success") {
                        /* ..登录成功.. */
                        /* (1) 要把用户的id和名字保存起来 */
                        localStorage.setItem("user_id", data.data.userId);
                        localStorage.setItem("user_name", data.data.username);
        
                        /* (2) 跳转回列表页 */
                        location.href = "./index.html";
                    } else {
                        alert(data.data.msg);
                    }
                })
        
            })
      
       
      

    })

})