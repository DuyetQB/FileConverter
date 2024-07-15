import { UserPayload } from "../types/User";
import axios from "axios"

export const signIn = async (payload: UserPayload) => {
    const result = await axios.post("http://localhost:4000/signIn", payload);
    return result.data

}
export const register = async (payload: UserPayload) => {
    const result = await axios.post("http://localhost:4000/register", payload)
    return result.data
}
