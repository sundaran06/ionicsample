import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  demoForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.demoForm = this.formBuilder.group({
      
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        address: ['', Validators.required]
    });
}

// convenience getter for easy access to form fields
get f() { return this.demoForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.demoForm.invalid) {
        return;
    }

    // display form values on success
    alert('get value in json!! :-)\n\n' + JSON.stringify(this.demoForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.demoForm.reset();
}

}
