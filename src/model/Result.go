package model

type Result struct{
    Ret int         //0表示失败, 1表示成功.
    Reason string   //失败时候输出的字符串
    Data interface{}//成功时返回数据
}