import axios from "axios";
import { InterceptorRequest, InterceptorResponse } from "./interceptor";

// 设置超时时间
axios.defaults.timeout = 120 * 1000;

axios.interceptors.request.use(InterceptorRequest, (res) => Promise.reject(res));
axios.interceptors.response.use(InterceptorResponse, (res) => Promise.reject(res));

export const Axios = axios;
