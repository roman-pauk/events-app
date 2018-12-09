import axios from 'axios'
import config from '../config'

const { apiUrl } = config

export default axios.create({
    baseURL: apiUrl
})