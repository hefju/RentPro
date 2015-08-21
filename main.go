package main
import (
    "fmt"
    "net/http"
    "log"
    "github.com/gin-gonic/gin"
    //"github.com/hefju/RentPro/src/model"
    "github.com/hefju/RentPro/src/route"
    "os"
//    "./src/model"
   // "github.com/hefju/RentPro/src/vars"
    "time"
)
func main(){
    router := gin.Default()
    router.GET("/home", func(c *gin.Context) {//测试，获取数据表信息
        // log.Println("visit homepage\r\n")
        log.Println("visit homepage")
        c.String(http.StatusOK, "Welcome to RenPro...")
    })
    router.Static("/index", "static")
   // router.GET("/tenant", )


    // This handler will match /user/john but will not match neither /user/ or /user
    router.GET("/user/:name", func(c *gin.Context) {
        name := c.Param("name")
        c.String(http.StatusOK, "Hello %s", name)
    })

    // However, this one will match /user/john/ and also /user/john/send
    // If no other routers match /user/john, it will redirect to /user/join/
    router.GET("/user/:name/*action", func(c *gin.Context) {
        name := c.Param("name")
        action := c.Param("action")
        message := name + " is " + action
        c.String(http.StatusOK, message)
    })

    router.GET("/tenant/:id",route.Tenant.Get)

//    router.GET("/getbill", GetBill)//测试，获取昨天数据表信息

    //获取服务器时间
    router.GET("/time", func(c *gin.Context) {
        c.String(http.StatusOK,time.Now().Format("2006-01-02 15:04:05"))
    })

//    router.POST("/upload",uploaddata)//批量上传数据
//    router.POST("/uploadone",uploaddataone)//上传单条数据
    port:="8088"
    if len(os.Args)>1{
        port= os.Args[1]
    }
   // port := os.Args[1]
    router.Run(":"+port)
    fmt.Println("end")
}
