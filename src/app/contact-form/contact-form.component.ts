import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

    contacts = [{ id: 1, name: "Phone" }, { id: 2, name: "Email" }];

    log(x) {
        console.log(x);
    }

    submit(f) {
        console.log(f);
    }

}
