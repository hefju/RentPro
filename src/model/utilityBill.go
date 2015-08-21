package model
//水电费
type UtilityBill struct {
    Id          int64
    Customer    string //客户名
    Code        string //类型, 水还是电
    ReadingDate string //抄表日期
    LastMonth   string //上月读数
    ThisMonth   string //本月读数
    Amount      string //数量
    UnitPrice   string //单价
    TotalValue  string //总价
    ReceiptDate string //收款日期
    Handler     string //经手人
    Desc        string //备注
    Status      int    //0表示正常，-1表示删除，1表示更新
    // CreatedAt   int64  `xorm:"created"`
    // UpdatedAt   int64  `xorm:"updated"`
}
