import { IsEmail } from 'class-validator'

export class DeleteUserBody {
    @IsEmail()
    email: string
}
