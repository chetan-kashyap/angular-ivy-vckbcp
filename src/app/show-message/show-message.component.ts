import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-Show-Message',
  template: `<button (click)="showMessage()" [disabled]="isMessageBoxDisable" class="show-msg-btn">Show message</button>`,
  styleUrls: ['../app.component.css'],
})
export class ShowMessageComponent {
  isMessageBoxOpen: boolean = true;
  isMessageBoxDisable: boolean = false;
  isShowMessage: boolean;

  constructor(private msgSvc: MessageService) {}

  showMessage() {
    this.msgSvc.setShowMessageDisabledValue(true);
    this.msgSvc.setShowMessageValue(true);
    this.msgSvc.isShowMessageDisabled.subscribe(
      (x) => (this.isMessageBoxDisable = x)
    );
  }
}
