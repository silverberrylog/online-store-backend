import { Test, TestingModule } from '@nestjs/testing'
import { createUser } from 'src/test-utils/createUser'
import { AuthController } from './auth.controller'
import { authErrors } from './auth.errors'
import { AuthModule } from './auth.module'

describe('/auth', () => {
    let authController: AuthController

    beforeEach(async () => {
        const auth: TestingModule = await Test.createTestingModule({
            imports: [AuthModule],
        }).compile()

        authController = auth.get<AuthController>(AuthController)
    })

    describe('POST /create-user', () => {
        it('should create a user', async () => {
            const { res } = await createUser(authController)

            expect(res).toBeUndefined()
        })

        it('should not create a user when the email is already in use', async () => {
            const { inputData } = await createUser(authController)
            const createUserFn = createUser.bind(
                null,
                authController,
                inputData.email
            )

            await expect(createUserFn).rejects.toThrow(
                authErrors.createUser.emailIsInUse
            )
        })
    })
})
