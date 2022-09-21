import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise } from "axios";
import { stringify } from 'qs';


export class Request{
    
    public static axiosInstance:AxiosInstance;

    public static init(){
        //创建axios实例
        Request.axiosInstance = axios.create({
            baseURL:import.meta.env.VITE_BASE_API,
            timeout: 8000
        });
        this.initInterceptors();
        return axios;
    }

    //初始化拦截器
    public static initInterceptors(){

        //设置post请求头
        //this.axiosInstance.defaults.headers.post['Content-type'] = "";
        
        /**
         * 请求拦截器
         * 每次请求前, 在请求头携带token
         */
        this.axiosInstance.interceptors.request.use(
            (config: AxiosRequestConfig)=>{
                //从本地获取token, 请求时携带判断是否过期
                const token = localStorage.getItem('ACCESS_TOKEN');

                //headers是可选参数 需要判断是否存在
                if(token && config?.headers){
                    config.headers.Authorization = 'Bearer' + token;
                }
                return config;
            }
        );
        
        //响应拦截器
        this.axiosInstance.interceptors.response.use(
            //请求成功
            (response: AxiosResponse)=>{
                if(response.status === 200){ 
                }else{
                    Request.errorHandle(response);
                }
                return response;
            },
            //请求失败
            (error:any)=>{
                const {response} = error;
                if(response){
                    //请求响应不在2xx的范围
                    Request.errorHandle(response);
                    return Promise.reject(response.data);
                }else{
                    //处理断网的情况
                    //处理断网组件的状态,设置弹出提示框内容
                    console.log('网络连接异常,请稍后再试!'); 
                }
            }
        );
    }
    
    //错误处理
    public static errorHandle(res:any){
         // 状态码判断
         switch (res.status) {
            case 401:
                break;
            case 403:
                break;
            case 404:
                console.log('请求的资源不存在');
                break;
            default:
                console.log('连接错误');
        }

    }
}

//响应体格式
interface IApiResponse {
    returnCode:number,
    returnMsg:string
}


/**
 * 封装post请求,在api模块直接调用
 *  -url 请求地址
 *  -params 参数
 *  -isQs 是否将参数序列化
 */
export const postApi = (url: string, params?: any, isQs?: boolean): AxiosPromise<IApiResponse> => {
    return Request.axiosInstance({
      url,
      method: 'post',
      data: isQs ? stringify(params) : params
    })
  }

  /**
 * 封装get请求,在api模块直接调用
 *  -url 请求地址
 *  -query 参数
 */
export const getApi = (url: string, query: any): AxiosPromise<IApiResponse> => {
    return Request.axiosInstance({
      url,
      method: 'get',
      params: query
    })
  }