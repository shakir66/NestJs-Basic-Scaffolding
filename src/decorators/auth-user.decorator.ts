import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AuthUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        console.log(data);
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    },
);
