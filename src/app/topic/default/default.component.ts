import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topic-default',
  templateUrl: './default.component.html'
})
export class TopicDefaultComponent {
  @Input() isSubscribing = false;
  @Output() publish = new EventEmitter<any>();
  private message: any;

  publishMessage(message: any) {
    this.publish.emit(JSON.parse(message));
  }

  @Input()
  set onNewMessage(message: any) {
    this.message = JSON.stringify(message);
  }
}