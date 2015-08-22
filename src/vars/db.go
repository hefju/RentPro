//数据库模块,支持多种数据库
package vars
import (
    "github.com/go-xorm/xorm"
    "github.com/go-xorm/core"
//    "github.com/hefju/RentPro/src/model"
_ "github.com/mattn/go-sqlite3"
    "log"
)

var Db *xorm.Engine
func init() {
    log.Println("xorm.Engine init()")
    var err error
    // engine, err = xorm.NewEngine("odbc", "driver={SQL Server};Server=192.168.1.200; Database=JXC; uid=sa; pwd=123;")
    //engine, err = xorm.NewEngine("odbc", "driver={SQL Server};server=.;database=charge;integrated security=SSPI;")
    Db, err = xorm.NewEngine("sqlite3", "./RentDb.db")

    if err != nil {
        log.Fatalln("xorm create error", err) //log.Fatalln("xorm create error", err)
    }
    // engine.ShowSQL = true
    Db.SetMapper(core.SameMapper{})
    // engine.CreateTables(new(tp_charge_billing))

//    err = Db.Sync2(new(model.Tenant), new(model.UtilityBill), new(model.RentDetail)) //, new(Group)) ,new(StockPrice)
    if err != nil {
        log.Fatalln("xorm sync error", err) //	log.Fatalln("xorm sync error", err)
    }
}