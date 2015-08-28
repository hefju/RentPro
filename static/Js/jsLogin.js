
$(function(){
    $("#divMsg").ajaxStart(function(){
    $(this).show().html("sent request");
    })

    $("#divMsg").ajaxStop(function(){
    $(this).show().html("received request");
    })
    $("#btnLogin").click(function(){
        var $name=$("#txtname");
        var $pass=$("#txtpwd");
        UserLogin($name.val(),$pass.val());
    })

 $("#btnRedirect").click(function(){
        window.location="index.html";
    })

});

function UserLogin(name,pass){
 $("#dvError").html("");
    $.ajax({
         type:"Post",
         url:"/login",
         data:{username:name,password:pass},
         success:function(data){
             if(data.Ret===1){
                    //  $("#dvError").html("登录成功:"+data.Reason);
              window.location.assign(data.Data);
             }else{
                 $("#dvError").html("登录失败:"+data.Reason);
                return false;
             }
         }
     });
 }