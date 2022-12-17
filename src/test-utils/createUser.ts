import { faker } from '@faker-js/faker'
import { AuthController } from 'src/modules/auth/auth.controller'

export const createUser = async (
    authController: AuthController,
    email?: string
) => {
    const inputData = {
        email: email || faker.internet.email(),
        password: faker.internet.password(
            faker.datatype.number({ min: 12, max: 32 })
        ),
    }

    const res = await authController.createUser(inputData)

    return { res, inputData }
}
