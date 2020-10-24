import {
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();

    const { method, url } = req;

    return next.handle().pipe(
      tap(() => {
        if (url !== '/') {
          Logger.log(
            `(${method}) ${url} - ${Date.now() - now}ms`,
            context.getClass().name,
          );
        }
      }),
      catchError(err => {
        // console.log(context);
        Logger.error(
          `(${method}) ${url} - ${Date.now() - now}ms`,
          `(${err.status}) message : ${err.message}`,
          context.getClass().name,
          true,
        );
        return throwError(err);
      }),
    );
  }
}
