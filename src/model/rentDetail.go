package model
//交租明细
type RentDetail struct {
    Id         int64
    Customer   string //租客名
    Rent_time  string //收入时间段
    RentAll    string //应收总额
    Income     string //已收金额
    RentRemain string //未收金额
    Deposit    string //押金
    Handler    string //经手人
    Desc       string //备注
    Status     int    //0表示正常，-1表示删除，1表示更新
    // CreatedAt  int64  `xorm:"created"`  //c#不支持
    // UpdatedAt  int64  `xorm:"updated"`
}