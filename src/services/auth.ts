import { AxiosInstance } from 'axios'

export class AuthService {
    private url = "";
    constructor(private http: AxiosInstance) {}

    public async login(user: string, password: string){
        const { data } = await this.http.post(this.url, { user, password });
        return data
    }

    public async signup(payload:any){
        const { data } = await this.http.post(this.url, payload)
        return data
    }
}