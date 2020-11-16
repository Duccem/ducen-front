import { Module, Mutation, Action, VuexModule } from "vuex-module-decorators";
import { UserJson, User } from '../Models/User';
import { AuthService } from "@/modules/Auth/Services/auth";
import axios from "axios";

@Module({namespaced: true})
export default class AuthStore extends VuexModule {
    user: UserJson | null = null;
    token: string = "";
    authService = new AuthService(axios)
    @Mutation
    [AuthMutations.SET_USER](payload: UserJson): void{
        this.user = payload;
    }

    @Mutation
    [AuthMutations.SET_TOKEN](payload: string): void{
        this.token = payload
    }

    @Action
    async [AuthActions.LOGIN]({ user, password }: any): Promise<void>{
        try {
            const { data } = await this.authService.login(user, password);
            const newUser = new User(data as UserJson)
            this.context.commit(AuthMutations.SET_USER, newUser.toPrimitives())
            this.context.commit(AuthMutations.SET_TOKEN, newUser.access_token);
            localStorage.setItem('user', JSON.stringify(user.toPrimitives()))
            localStorage.setItem('token', newUser.toPrimitives().access_token)
        } catch (error) {
            console.log(error)
            throw new Error("Loggin Error")
        }
    }

    get accessToken(): string {
        return "Barear " + this.token;
    }

    get authenticationService(): AuthService {
        return this.authService;
    }
}

export enum AuthMutations {
    SET_USER = "SET_USER",
    SET_TOKEN = "SET_TOKEN"
}

export enum AuthActions {
    LOGIN = "LOGIN",
    SIGN_UP = "SIGN_UP",
    LOG_OUT = "LOG_OUT"
}