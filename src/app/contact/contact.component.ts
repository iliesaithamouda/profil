import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from './contact.service';
import { AppMessageService } from '../shared/app-message/app-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;
  onValidation : boolean = false;

  constructor(private fb: FormBuilder, private contactService: ContactService, private messageService: AppMessageService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  submitForm() {
    if (this.onValidation) return;
    if (this.contactForm.invalid ) return;

    this.onValidation = !this.onValidation;
    
    this.contactService.sendEmail(this.contactForm.get('email').value, this.contactForm.get('name').value, this.contactForm.get('message').value )
      .subscribe(response => { 
        this.contactForm.reset();
        this.messageService.displayMessage('success', 'your message has been sent successfully, thank you for your interest!');
        this.onValidation = !this.onValidation;
      }, error => {
        this.onValidation = !this.onValidation;
        this.messageService.displayMessage('error', 'an error occured while trying to send the message, please retry later!');
      }, ()=> {
        this.onValidation = !this.onValidation;
      });  
  }

  get contactF(): any {
    return this.contactForm.controls;
  }


}
