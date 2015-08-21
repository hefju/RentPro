package route

import (
    "github.com/hefju/RentPro/src/model"
    "github.com/hefju/RentPro/src/vars"
    "github.com/gin-gonic/gin"

    "net/http"
    "fmt"
    "log"
    "strconv"
)
type Tenant struct {

}

func (page Tenant)Get(c *gin.Context){
   tenants:=make([]model.Tenant,0)
    idstr:=c.Query("id")
    //id:=c.Param("id")
    fmt.Println("Params:",idstr)
    id,err:=strconv.Atoi(idstr)
    if err!=nil{
        c.JSON(http.StatusBadRequest, gin.H{"status": "Params err"})
    }
    where:=""
    if id>0{
        where="Id="+idstr
    }else{
        where="Id>0"
    }

    err=vars.Db.Where(where).Find(&tenants)
    if err!=nil{
        log.Println(err)
    }
    fmt.Println(tenants)
//  tenant:=model.Tenant{Id:10,Name:"hefju520",Phone:"13929961332",Desc:"测试返回json"}
    c.JSON(http.StatusOK, tenants)
}



