import axios, { AxiosError } from "axios";

const client = axios.create({
  baseURL: "https://api.alquran.cloud/v1/",
});

const requestSurah = async function (options: any, token?: string) {
  let data: any;

  const onSuccess = (response: any) => {
    data = response.data;
    return data;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response!.data);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default requestSurah;
