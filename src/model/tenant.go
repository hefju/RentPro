package model
//租客
type Tenant struct {
    Id         int64`json:"id"`
    Name       string `json:"name"` //姓名
    Phone      string`json:"phone"`  //电话
    Desc       string`json:"desc"`  //备注
//    RentAll    string`json:"id"`  //所欠租金
//    RentRemain string `json:"id"` //尚欠租金
    Status     int   `json:"status"`  //0表示正常，-1表示删除
}