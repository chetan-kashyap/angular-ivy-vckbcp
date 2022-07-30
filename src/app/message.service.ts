import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
  constructor() {}

  private isShowMessageDisabledValue = new Subject<boolean>();
  private isShowMessageValue = new Subject<boolean>();

  isShowMessageDisabled = this.isShowMessageDisabledValue.asObservable();
  isShowMessage = this.isShowMessageValue.asObservable();

  setShowMessageDisabledValue(val: boolean) {
    this.isShowMessageDisabledValue.next(val);
  }
  setShowMessageValue(val: boolean) {
    this.isShowMessageValue.next(val);
  }
}
