import axios from "axios";

//tạo instance
const instance = axios.create({
    baseURL: 'https://api-zingmp3-vercel.vercel.app/api'
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent //xử lý trước khi gửi yêu cầu đi
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data // xử lý khi phản hồi chưa tới client
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance //gọi thằng instance này chứ ko gọi thư viện axios