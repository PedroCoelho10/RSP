import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://localhost:5001/'
})

 module.exports = {
    devServer: {
      proxy: 'https://localhost:5001'
    }
  }

  