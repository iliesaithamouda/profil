import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;

  constructor(private fb: FormBuilder) { }

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
    console.log('trying to submit a contact form'); 
  }

  get contactF(): any {
    return this.contactForm.controls;
  }


}
