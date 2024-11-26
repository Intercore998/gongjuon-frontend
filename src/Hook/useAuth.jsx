import axios from "axios";
import {useNavigate} from "react-router";


export default function useAuth() {
    const API_URL = import.meta.env.VITE_API_URL;
    const useLogin = async (username, password) => {
        console.log(import.meta.env)
        console.log(API_URL);
        const response = await axios.post(`${import.meta.BASE_URL+'/api/login'}`, {username, password});
        if(response.status) {
            alert("Login successfull");
            useNavigate("/")
        }
    }


    return [useLogin,];
}

