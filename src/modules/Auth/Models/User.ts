import { Entity, EntityJson } from '@/modules/shared/Models/Entity';

export class User extends Entity {
    public _id: string;
    public name: string;
    constructor(data: UserJson){
        super();
        this._id = data._id;
        this.name = data.firstname + ' ' + data.lastname;
    }
    public fromPrimitives(data: any): User {
        return new User(data as UserJson);
    }

    public toPrimitives(): UserJson {
        return {
            "_id": this._id,
            "username":"",
            "firstname": "",
            "lastname":"",
            "email":"",
            "birthdate":"",
            "photo":"",
            "money":0,
            "roles":["",""],
            "access_token":""
        }
    }
}

export type UserJson = EntityJson & {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    birthdate: string;
    sex?: string;
    age?: number;
    photo: string;
    money: number;
    roles: string[];
    address?: {
        city?: string;
        street?: string;
        country?: string;
    };
    access_token: string;
}