import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, finalize } from 'rxjs';


@Injectable()
export class LoggingInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        const handler = context.switchToHttp();
        const req = handler.getRequest<Request>();
        const res = handler.getResponse<Response>();

        const { method, ip, url } = req;

        const start = performance.now();

        return next.handle().pipe(
            finalize(() => {
                const finish = performance.now();
                const duration = (finish - start).toFixed(2);
                const { statusCode } = res;
                console.log(`🥳 ${method} : ${url} ----> ${statusCode} \nruntime: ${duration}ms`)
            }),
        );
    }
}
