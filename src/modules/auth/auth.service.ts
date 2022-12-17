import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/utils/prisma.service'
import * as bcrypt from 'bcrypt'
import { authErrors } from './auth.errors'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async createUser(email: string, password: string) {
        const userExists = await this.prisma.users.findFirst({
            where: { email },
        })
        if (userExists) throw new Error(authErrors.createUser.emailIsInUse)

        const hashedPassword = await bcrypt.hash(password, 8)
        await this.prisma.users.create({
            data: { email, password: hashedPassword },
        })
    }
}
