import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="form-wrapper">
      <form [formGroup]="form">
        <div>
          <label for="firstName">First name</label>
          <input
            formControlName="firstName"
            type="text"
            name="firstName"
            id="firstName"
            class="userFirstname"
          />
        </div>
        <div>
          <label for="lastName">Last name</label>
          <input
            formControlName="lastName"
            type="text"
            name="lastName"
            id="lastName"
            class="userLastname"
          />
        </div>
        <div>
          <label for="phoneNumber">Phone number</label>
          <input
            formControlName="phone"
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            class="userPhone"
          />
        </div>
        <div>
          <input
            (click)="submit()"
            type="button"
            value="submit"
            class="submitButton"
          />
        </div>
      </form>
      <div class="informationTable">
        <ng-container *ngFor="let row of list; let i = index">
          <div class="element-{{ i }}">
            <div>{{ row.firstName }} {{ row.lastName }} {{ row.phone }}</div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'Angular-Phone-Book';

  form!: FormGroup;
  list: any[] = [];

  person = {
    firstName: 'Coder',
    lastName: 'Byte',
    phone: 8885559999,
  };

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });

    this.form.setValue(this.person);
  }

  submit() {
    if (this.form.valid) {
      this.list.push({
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        phone: this.form.value.phone,
      });

      this.list.sort((a, b) => a.lastName.localeCompare(b.lastName));

      this.form.reset(this.person);
    }
  }
}
