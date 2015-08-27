$(function(){
    $("#divMsg").ajaxStart(function(){
    $(this).show().html("sent request");
    })

    $("#divMsg").ajaxStop(function(){
    $(this).show().html("received request");
    })
    $("#btnLogin").click(function(){
        var $name=$("#txtName");
        var $pass=$("#txtPwd");
        UserLogin($name.val(),$pass.val());
    })
});

function UserLogin(name,pass){
console.log("method:   UserLogin ");
    $.ajax({
        type:"Post",
        url:"/login",
        data:{username:name,password:pass},
        success:function(data){
            if(data=="1"){
            window.location="index.html"
            }else{
                console.log("password error.")
            //alert("password error.")
            return false;
            }
        }
    });
}