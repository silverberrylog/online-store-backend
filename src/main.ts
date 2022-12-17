import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { getCorsOptions } from './utils/getCorsOptions'
import { validationOptions } from './utils/validationOptions'

async function bootstrap() {
    const app = await NestFactory.create(module)
    app.useGlobalPipes(new ValidationPipe(validationOptions))
    app.enableCors(getCorsOptions)

    await app.listen(3000)
}
bootstrap()
