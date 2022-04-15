export type CredentialsType = {
    password: string;
    email: string;
    firstname?: string;
    credentials?: string;
}; 

export type ToggleFormType = {
    formTitle: string;
};

export type user = {
    email: string,
    password: string,
    access_token: string
}