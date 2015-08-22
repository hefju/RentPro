package route
import(
    "github.com/gin-gonic/gin"
    "github.com/hefju/RentPro/src/model"
    "fmt"
    "strconv"
    "net/http"
    "github.com/hefju/RentPro/src/vars"
    "log"
)
type RentDetail struct {

}

func (page *RentDetail)Get(c *gin.Context){
    list:=make([]model.RentDetail,0)
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

    err=vars.Db.Where(where).Find(&list)
    if err!=nil{
        log.Println(err)
    }
    fmt.Println(list)
    //  tenant:=model.Tenant{Id:10,Name:"hefju520",Phone:"13929961332",Desc:"测试返回json"}
    c.JSON(http.StatusOK, list)
}