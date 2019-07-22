import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

export default class AxiosWrapper {
  private instance: AxiosInstance;
  
  private defaultOptions: AxiosOptions = {
    use500Interceptor: false,
    useCache: false,
  };

  constructor(options?: AxiosOptions) {
    this.instance = axios.create();
    this.instance.interceptors.response.use(this.successInterceptor, this.errorInterceptor);
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.instance.get<T>(url, config);
  }

  post<T>(url: string, data: any, config?: AxiosRequestConfig) {
    return this.instance.post<T>(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.instance.delete(url, config);
  }

  request<T>(config: AxiosRequestConfig) {
    return this.instance.request<T>(config);
  }

  head(url: string, config?: AxiosRequestConfig) {
    return this.instance.head(url, config);
  }

  put<T>(url: string, data: any, config?: AxiosRequestConfig) {
    return this.instance.put<T>(url, data, config);
  }

  patch<T>(url: string, data: any, config?: AxiosRequestConfig) {
    return this.instance.patch<T>(url, data, config);
  }

  private successInterceptor = (response: AxiosResponse) => response.data;
  private errorInterceptor = (response: AxiosResponse) => console.log('response error');
}

export interface AxiosOptions {
  useCache?: boolean;
  use500Interceptor?: boolean;
}
