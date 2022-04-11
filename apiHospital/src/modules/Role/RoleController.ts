import { Response, Request, NextFunction } from "express";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import JwtService from "../../libs/jwt";
import { IRoleService } from './RoleService';
import { auth } from "../../middlewares";

@Controller('user')
class RoleController {
    private roleService;
    private jwtService;
    constructor(roleService: IRoleService, jwtService: JwtService) {
        this.roleService = roleService;
        this.jwtService = jwtService;
    }

    @Get()
    @Middleware(auth.isAuth)
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let users = await this.roleService.getAll();
            res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    }
}

export default RoleController;