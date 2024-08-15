import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ResponseConstants from 'src/constants/response.constants';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest();
    const app_secret: string = request.headers['x-app-secret'];

    // check for app secret in headers

    if (app_secret === undefined) {
      throw new UnauthorizedException(ResponseConstants.Common[400]);
    }

    if (app_secret !== this.configService.get<string>('APP_SECRET')) {
      throw new UnauthorizedException(ResponseConstants.Common[403]);
    }

    return true;
  }
}
