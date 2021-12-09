import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import router from "@/router";
import { getToken } from "@/libs/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 15 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const token = getToken();
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    const token = response.headers.token;
    if (token) {
      store.dispatch("user/saveToken", token);
    }
    return res;
  },
  error => {
    console.log("err", error); // for debug
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      console.log("timeout");
      return Promise.reject(error);
    }
    const { status } = error.response;
    // 401 未登录, 403 权限不足
    if (status === 401) {
      store.dispatch("user/logout").then(
        router.replace(`/login`)
      );
    }

    const { disableErrorMessage } = error.config;
    if (!disableErrorMessage) {
      const message = error.response.data && error.response.data.message ? error.response.data.message : error.message;
      Message({
        message: message,
        type: "error",
        duration: 5 * 1000
      });
    }
    return Promise.reject(error);
  }
);

export default service;
