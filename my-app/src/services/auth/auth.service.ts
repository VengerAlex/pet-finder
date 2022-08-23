import axios from "../../api";

import {IAuthResponse} from "../../redux/reducers/user/user.interface";
import {API_URL, getAuthUrl} from "../../configs/api.config";

class AuthService {
    async register(email: string, password: string, fullName: string){
        const response = await axios.post<IAuthResponse>(
            `${API_URL}${getAuthUrl("registration")}`,
            {
                email,
                password,
                fullName
            }
        )

        if (response.data.token) {
            localStorage.setItem("token", response.data.token)
        }

        return response
    }

    async login(email: string, password: string){
        const response = await axios.post<IAuthResponse>(
            `${API_URL}${getAuthUrl("login")}`,
            {
                email,
                password
            }
        )

        if (response.data.token) {
            localStorage.setItem("token", response.data.token)
        }

        return response
    }

    async checkAuth(){
        const response = await axios.get<IAuthResponse>(`${API_URL}${getAuthUrl("check")}`)

        return response
    }
}

export default new AuthService();