import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-Show-Message',
  template: `<button (click)="showMessage()" [disabled]="isMessageBoxDisable" 
  [ngStyle]="{
    'backgroundColor': isMessageBoxDisable ? 'gray': 'blue'
  }">Show message</button>`,
  styleUrls: ['../app.component.css'],
})
export class ShowMessageComponent {
  isMessageBoxOpen: boolean;
  isMessageBoxDisable: boolean;
  isShowMessage: boolean;

  constructor(private msgSvc: MessageService) {
    this.msgSvc.isShowMessageDisabled.subscribe(
      (x) => (this.isMessageBoxDisable = x)
    );
  }

  showMessage() {
    this.msgSvc.setShowMessageDisabledValue(true);
    this.msgSvc.setShowMessageValue(true);
  }
}
