package route
import (
    "github.com/gin-gonic/gin"
    "net/http"
)
type Login struct {
    User     string `form:"user" json:"user" binding:"required"`
    Password string `form:"password" json:"password" binding:"required"`
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
    var json Login
    if c.BindJSON(&json) == nil {
        if json.User == "manu" && json.Password == "123" {
            c.JSON(http.StatusOK, gin.H{"status": "you are logged in"})
        } else {
            c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
        }
    }
}
