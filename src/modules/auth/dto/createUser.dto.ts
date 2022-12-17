import { IsEmail, Length } from 'class-validator'

export class CreateUserBody {
    @IsEmail() email: string
    @Length(12, 32) password: string
}
