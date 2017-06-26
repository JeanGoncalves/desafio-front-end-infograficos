import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    message: ["", Validators.required]
  })

  constructor(
    public formBuilder: FormBuilder
  ) { }

  sendContact(event) {
    console.log(`Nome: ${this.contactForm.value.name} \nE-mail: ${this.contactForm.value.email}\nMensagem: ${this.contactForm.value.message}`);
    alert("Sua mensagem foi enviada. Verifique o Console de seu navegador.");
  }

  ngOnInit() {
  }

}
