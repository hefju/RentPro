package route
import (
    "github.com/gin-gonic/gin"
//    "net/http"
//    "fmt"
    "github.com/lunny/tango"
    "fmt"
)
type Login struct {
    tango.Ctx
}

func (l *Login) Get() {
//    l.Title("Login")
  //  l.Render("login.tmpl")
}
func (login *Login) Post() {
   fmt.Println(login.Form("username"))
    fmt.Println("login post")
}

/* js登录代码
function getEncryption(password, uin, vcode, isMd5) {
var str1 = hexchar2bin(isMd5 ? password : md5(password));
var str2 = md5(str1 + uin);
var str3 = md5(str2 + vcode.toUpperCase());
return str3
}
*/

func (login *Login)LoginJSON(c *gin.Context){
//    fmt.Println("LoginJSON")
//    var json Login
//    fmt.Println( c.PostForm("user"))
//    if c.Bind(&json) == nil {
//        fmt.Println(json)
//        if json.User == "manu" && json.Password == "123" {
//            c.JSON(http.StatusOK, gin.H{"status": "you are logged in"})
//        } else {
//            c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
//        }
//    }else{
//        fmt.Println("nothing")
//    }

}
