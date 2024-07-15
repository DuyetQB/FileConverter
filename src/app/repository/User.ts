import { register, signIn } from "../services/Authentication";
import { UserPayload } from "../types/User";

 class UserRepository {
    static userSignIn (payload:UserPayload) {
        return signIn(payload)
    }

    static userRegister (payload:UserPayload) {
        return register(payload)
    }
}

export default UserRepository