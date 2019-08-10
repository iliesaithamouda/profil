import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.invalid ){
      return;
    }

    this.contactService.sendEmail(this.contactForm.get('email').value, this.contactForm.get('name').value, this.contactForm.get('message').value )
      .subscribe(response => { /* TODO: add success message */});  
  }

  get contactF(): any {
    return this.contactForm.controls;
  }


}
