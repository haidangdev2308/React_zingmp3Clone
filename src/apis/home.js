import axios from "../axios";

//resolve, reject tương tự như return 

export const getHome = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url: '/home',
            method: 'get',
        }) //sau khi lấy dc data, response sẽ hứng được data và resolve cái data trả về
        resolve(response)
    } catch (error) { // bắt được lỗi
        reject(error)
    }
})