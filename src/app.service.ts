import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Manual maker works!<br><a href="/api/swagger">Go to api list</a>';
  }
}
