import axios from "axios";

export default  class Service {
    static  async getUsers () {
        try {
            const response = await  axios.get('https://d3hhim2ddjqlcy.cloudfront.net/media/custom_file/6f1abf6e-3e7d-48b9-8ec9-995891be310a/MG_test.json');
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
}