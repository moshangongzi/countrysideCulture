// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (e, context) => {
    return cloud.database().collection('user').add({
        data: {
            _id: e.id,
            uname:e.uname,
            userImg:e.userImg
        }
    })
}