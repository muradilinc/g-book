import {AuthService} from "./auth.service";
import {Body, Controller, Post, Req, Res} from "@nestjs/common";
import {Request, Response} from "express";
import {AuthDto} from "./auth.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    async login(@Req() request: Request, @Res() response: Response, @Body() loginDto: AuthDto) {
        try {
            const result = await this.authService.login(loginDto);
            return response.status(200).json({
                status: 'Ok!',
                message: 'Login success',
                result,
            });
        } catch (error) {
            return response.status(500).json({
                status: 'Error!',
                message: 'Login error',
            });
        }
    }

    @Post('register')
    async register(@Req() request: Request, @Res() response: Response, @Body() registerDto: AuthDto) {
        try {
            const result = await this.authService.register(registerDto);
            return response.status(200).json({
                status: 'Ok!',
                message: 'Register success',
                result,
            });
        } catch (error) {
            return response.status(500).json({
                status: 'Error!',
                message: 'Register error',
            });
        }
    }
}