type UserModel = {
    id?: string;
    email: string;
    username: string;
    password: string;
    token?: string;
} | {}

type UsersModel = UserModel[]

type LoginResponseModel = {
    accessToken: string;
    refreshToken: string;
}

export type { UserModel, UsersModel, LoginResponseModel }