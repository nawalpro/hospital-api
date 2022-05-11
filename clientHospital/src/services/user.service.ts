import { user } from "../types/types";
import http from "./config";

export const signIn = async (user: Omit<user, "access_token">): Promise<any> => {
    return await http.post('/users/auth', user);
}

export const getAll = async () : Promise<any> => {
    return await http.get('/users');
}