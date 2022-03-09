import axios from 'axios';
import md5 from 'md5';

// const baseURL = 'http://gateway.marvel.com/v1/public/characters?';
const publicKey = '93959d5e4a47847bae9590342986ccaf';
const privateKey = '4919d2bd78eabd3cffabec30c60530570a074901';

const timeStamp = Number(new Date());
const hash = md5(timeStamp + privateKey + publicKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts: timeStamp,
    apikey: publicKey,
    hash: hash
  },
})

export default api;