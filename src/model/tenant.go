package model
//租客
type Tenant struct {
    Id         int64
    Name       string //姓名
    Phone      string //电话
    Desc       string //备注
    RentAll    string //所欠租金
    RentRemain string //尚欠租金
    Status     int    //0表示正常，-1表示删除
}