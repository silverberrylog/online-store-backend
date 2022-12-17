import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserBody } from './dto/createUser.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('create-user')
    async createUser(@Body() body: CreateUserBody) {
        await this.authService.createUser(body.email, body.password)
    }
}
