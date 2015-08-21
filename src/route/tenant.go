package route

import (
    "github.com/hefju/RentPro/src/model"
//    "github.com/hefju/RentPro/src/vars"
    "github.com/gin-gonic/gin"

    "net/http"
//    "fmt"
//    "log"
)
type Tenant struct {

}

func (page Tenant)Get(c *gin.Context){
//   tenants:=make([]model.Tenant,0)
//    id:=c.Params("id")
//    fmt.Println("Params:",id)
//    err:=vars.Db.Where("id>0").Find(&tenants)
//    if err!=nil{
//        log.Println(err)
//    }
  tenant:=model.Tenant{Id:10,Name:"hefju520",Phone:"13929961332",Desc:"测试返回json"}
    c.JSON(http.StatusOK, tenant)
}



