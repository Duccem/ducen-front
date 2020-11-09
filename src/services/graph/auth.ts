import { AxiosInstance } from "axios";

export class AuthService {
    private url = "http://localhost:3000/graph/";
    constructor(private http: AxiosInstance) {
    }

    public async login(user: string, password: string){
        let query: string = `
            query{
                login(user:${user}, password:${password}){
                    data{
                        username,
                        email
                        roles
                    }
                    token
                }
            }
        `
        const { data } = await this.http.post(this.url, { query });
        return data;
    }

    public async signup(payload:any){
        const { data } = await this.http.post(this.url, payload);
        return data;
    }
}