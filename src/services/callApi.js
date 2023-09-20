import axios from "axios";

const basicHeaders = {
    token: "HELLO",
};
const domain = 'http://nodejs.edu.vn/api/'

const callApi = {

    nguoiDung: async (method, endPoint, data) => {
        try {
            const response = await axios({
                method,
                url: domain + endPoint,
                headers: basicHeaders,
                data,
            })
            return response.data

        } catch (error) {
            return error

        }
    },

    sanPham: async (method, endPoint, headers, data) => {
        try {
            const response = await axios({
                method,
                url: domain + endPoint,
                headers,
                data
            })
        } catch (error) {
            return error
        }
    }









};

export { callApi };
