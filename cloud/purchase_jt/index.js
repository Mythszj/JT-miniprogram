// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()

    let des = 'total_data.carbon_reduction'

    await db.collection('user_collection_jt')
        .where({
            user_id: wxContext.OPENID
        })
        .update({
            data: {
                [des]: _.inc(-event.price)
            }
        })
}