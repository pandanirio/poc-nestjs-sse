import { Injectable, MessageEvent } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
  private eventsSubject = new Subject<MessageEvent>();

  get events$() {
    return this.eventsSubject.asObservable();
  }

  sendEvent(data: any) {
    this.eventsSubject.next({ data });
  }
}
