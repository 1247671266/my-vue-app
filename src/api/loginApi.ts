import { postApi } from "@/service/request";

export const loginApi = (params:any)=>postApi('/auth/login',params,true);
