//使用的web框架, 在route/route.go中使用
package vars
//import "github.com/gin-gonic/gin"
import "github.com/lunny/tango"
var(
//Server *gin.Engine
Server *tango.Tango
)
func init(){
   // Server= gin.Default()
    Server=tango.Classic()
}