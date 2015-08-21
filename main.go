package main
import (
    "fmt"
    "net/http"
    "log"
    "github.com/gin-gonic/gin"
    "time"
)
func main(){
    router := gin.Default()
    router.GET("/", func(c *gin.Context) {//测试，获取数据表信息
        // log.Println("visit homepage\r\n")
        log.Println("visit homepage")
        c.String(http.StatusOK, "Welcome to RenPro...")
    })

//    router.GET("/getbill", GetBill)//测试，获取昨天数据表信息

    //获取服务器时间
    router.GET("/time", func(c *gin.Context) {
        c.String(http.StatusOK,time.Now().Format("2006-01-02 15:04:05"))
    })

//    router.POST("/upload",uploaddata)//批量上传数据
//    router.POST("/uploadone",uploaddataone)//上传单条数据

    router.Run(":8088")
    fmt.Println("end")
}
