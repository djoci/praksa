import axios from 'axios'

const API_URL = process.env.API_URL || 'https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api'

export default axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})