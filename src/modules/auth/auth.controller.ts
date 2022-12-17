import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserBody } from './dto/createUser.dto'
import { DeleteUserBody } from './dto/deleteUser.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('create-user')
    async createUser(@Body() body: CreateUserBody) {
        await this.authService.createUser(body.email, body.password)
    }

    @Post('delete-user')
    async deleteUser(@Body() body: DeleteUserBody) {
        console.log('body.email', body.email)
        await this.authService.deleteUser(body.email)
    }
}
