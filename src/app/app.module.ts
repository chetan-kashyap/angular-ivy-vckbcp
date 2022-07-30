import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import { ClearMessageComponent } from './clear-message/clear-message.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ClearMessageComponent,
    ShowMessageComponent,
    MessagePanelComponent,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
