//使用的web框架, 在route/route.go中使用
package vars
import "github.com/gin-gonic/gin"
var(
Server *gin.Engine
)
func init(){
    Server= gin.Default()
}