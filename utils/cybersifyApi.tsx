import _superagent, { search } from "superagent";
const SuperagentPromise = require("superagent-promise");
const superagent = SuperagentPromise(_superagent, global.Promise);

const API_ROOT = "https://test.cybersify.tech/Eswag/public/api/"; // local & dev

const BUCKET_ROOT = `https://ethical3.s3.ca-central-1.amazonaws.com/images/`; // local % dev

const API_FILE_ROOT_MEDIUM = `${BUCKET_ROOT}medium/`;
const API_FILE_ROOT_ORIGINAL = `${BUCKET_ROOT}original/`;
const API_FILE_ROOT_SMALL = `${BUCKET_ROOT}small/`;
const API_FILE_ROOT_AUDIO = `${BUCKET_ROOT}audio/`;
const API_FILE_ROOT_VIDEO = `${BUCKET_ROOT}video/`;
const API_FILE_ROOT_DOCUMENTS = `${BUCKET_ROOT}documents/`;

const encode = encodeURIComponent;
const responseBody = (res: any) => res.body;
let Language = "";
const language = (req: any) => {
  Language = req;
};
let token: any = null;

const tokenPlugin = (req: any) => {
  if (token) {
    // req.set('authorization', `Bearer ${token}`);
    req.set("token", token);
  }
};
const requests = {
  del: (url: string) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url: string) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  getDirect: (url: string) =>
    superagent.get(url).use(tokenPlugin).then(responseBody),
  put: (url: string, body: any) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  patch: (url: string, body: any) =>
    superagent
      .patch(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url: string, body: any) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  file: (url: string, key: string, file: any) =>
    superagent
      .post(`${API_ROOT}${url}`)
      .attach(key, file)
      .use(tokenPlugin)
      .then(responseBody),
};


const dashboard={
  getDashboardData: () =>
    requests.get(`category`),
  getBlogs:(page:any)=>requests.get(`sadm/all-blog-article?page=${page}`)
  // getDashboardData: (page: number, limit: number, q: string) =>
  //   requests.get(`chat/users?pagination=${page}&limit=${limit}${q || ''}`),
}

const FILES = {
  audio: (filename: string) =>
    filename?.startsWith("http")
      ? filename
      : `${API_FILE_ROOT_AUDIO}${filename}`,
  video: (filename: string) =>
    filename?.startsWith("http")
      ? filename
      : `${API_FILE_ROOT_VIDEO}${filename}`,
  imageOriginal: (filename: string) =>
    filename?.startsWith("http")
      ? filename
      : `${API_FILE_ROOT_ORIGINAL}${filename}`,
  imageMedium: (filename: string) =>
    filename?.startsWith("http")
      ? filename
      : `${API_FILE_ROOT_MEDIUM}${filename}`,
  imageSmall: (filename: string) =>
    filename?.startsWith("http")
      ? filename
      : `${API_FILE_ROOT_SMALL}${filename}`,
};

const cybersifyApi = {
  token,
  dashboard,
  API_ROOT,
  API_FILE_ROOT_SMALL,
  API_FILE_ROOT_MEDIUM,
  API_FILE_ROOT_ORIGINAL,
  API_FILE_ROOT_VIDEO,
  API_FILE_ROOT_DOCUMENTS,
  FILES,
  language,
  encode,
  setToken: (_token?: string) => {
    token = _token;
  },
};

export default cybersifyApi;
