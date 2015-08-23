package main
import (
    "fmt"
//    "net/http"
//    "log"
//    "github.com/gin-gonic/gin"
    //"github.com/hefju/RentPro/src/model"
    "github.com/hefju/RentPro/src/route"
//    "os"
//    "./src/model"
   "github.com/hefju/RentPro/src/vars"
//    "time"
)
func main(){
    //new( vars.App).InitApp()
    vars.InitApp()
    route.Run()

    fmt.Println("end")
}
