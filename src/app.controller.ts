import { Body, Controller, Post, Sse } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly eventsService: AppService) {}

  @Sse('stream')
  sendEvents() {
    return this.eventsService.events$;
  }

  @Post('send')
  sendMessage(@Body() body: { message: string }) {
    this.eventsService.sendEvent({ message: body.message });
  }
}
