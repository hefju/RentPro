//路由入口,从vars/web.go取得web引擎,然后设置路由
package route
import (
//    "github.com/gin-gonic/gin"
    "github.com/hefju/RentPro/src/vars"
//    "log"
//    "net/http"
    "github.com/lunny/tango"
//    "time"
    "os"
)

func Run(){
   // t := tango.Classic()
    router :=vars.Server// gin.Default()

//    router.GET("/home", func(c *gin.Context) {//测试，获取数据表信息
//        log.Println("visit homepage")
//        c.String(http.StatusOK, "Welcome to RenPro...")
//    })
  //  router.Static("/index", "static")
    var filterExts []string
    router.Use(tango.Static( tango.StaticOptions{
        RootPath:   "./static",
        ListDir:    false,
        FilterExts: filterExts,
    }))

    router.Post("/login",new(Login))


   // router.GET("/tenant/:id",new(Tenant).Get)

//    router.GET("/tenant",new(Tenant).Get)
//    router.GET("/rentdetail",new(RentDetail).Get)
//    router.GET("/utilitybill",new(UtilityBill).Get)

//   router.POST("/loginJSON",new(Login).LoginJSON)
    //    router.GET("/getbill", GetBill)//测试，获取昨天数据表信息

    //获取服务器时间
//    router.GET("/time", func(c *gin.Context) {
//        c.String(http.StatusOK,time.Now().Format("2006-01-02 15:04:05"))
//    })

    //    router.POST("/upload",uploaddata)//批量上传数据
    //    router.POST("/uploadone",uploaddataone)//上传单条数据
    port:="8088"
    if len(os.Args)>1{
        port= os.Args[1]
    }
    // port := os.Args[1]
   // gin.SetMode(gin.DebugMode)
    router.Run(":"+port)
}
