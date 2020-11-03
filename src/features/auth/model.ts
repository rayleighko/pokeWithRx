type AuthModel = {
    email: string;
    username?: string;
    password: string;
    remember?: boolean;
    accessToken?: string;
    refreshToken?: string;
} | {}

export type { AuthModel }