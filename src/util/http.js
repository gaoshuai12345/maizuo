// // 对于数据请求的封装
// import axios from 'axios'
// function httpForList(){
//     return axios({
//         url: "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9850948",
//         headers: {
//           "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.0","e":"16448067665423384053678081","bc":"310100"}',
//           "X-Host": "mall.film-ticket.film.list",
//         }
//       })
//     }
// function httpForDetail(params){
//     return  axios({
//         url:"https://m.maizuo.com/gateway?filmId=${params}&k=5501344",
//         headers:{
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16448067665423384053678081","bc":"310100"}',
//             'X-Host': 'mall.film-ticket.film.info'
//         }
//     })
// }

// export default {
//     httpForDetail,
//     httpForList
// }
import axios from 'axios'
const http =axios.create({
    baseURL:'https://m.maizuo.com',
    // timeout:10000,
    headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16526046151300344298536961","bc":"310100"}'
    }
})
export default http