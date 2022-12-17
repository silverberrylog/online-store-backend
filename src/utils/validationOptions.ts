import { ValidationPipeOptions } from "@nestjs/common";

export const validationOptions: ValidationPipeOptions = {
    skipUndefinedProperties: false,
    skipNullProperties: false,
    skipMissingProperties: false,
    whitelist: true,
    stopAtFirstError: true,
}
