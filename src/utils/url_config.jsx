// url_config.js
const isProd = import.meta.env.PROD;

export const API_BASE_URL = isProd ? "https://api.bucxai.com" : import.meta.env.VITE_API_BASE_URL;

export const CDN_BASE_URL = isProd ? "https://cdn.bucxai.com" : import.meta.env.VITE_CDN_BASE_URL;

export const BASE_URL = isProd ? "https://bucxai.com" : import.meta.env.VITE_BASE_URL;

