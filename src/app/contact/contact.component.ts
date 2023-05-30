import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  messageText: string = '';
  maxLength: number = 5000;
  characterCount: number = this.maxLength;

  updateCharacterCount() {
    this.characterCount = this.maxLength - this.messageText.length;
  }
}
