import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
  constructor() {}

  private isMessageBoxOpenValue = new Subject<boolean>();
  private isShowMessageDisabledValue = new Subject<boolean>();
  private isShowMessageValue = new Subject<boolean>();

  isMessageBoxOpen = this.isMessageBoxOpenValue.asObservable();
  isShowMessageDisabled = this.isShowMessageDisabledValue.asObservable();
  isShowMessage = this.isShowMessageValue.asObservable();

  setMessageBoxOpenValue(val: boolean) {
    this.isMessageBoxOpenValue.next(val);
  }
  setShowMessageDisabledValue(val: boolean) {
    this.isShowMessageDisabledValue.next(val);
  }
  setShowMessageValue(val: boolean) {
    this.isShowMessageValue.next(val);
  }
}
