import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;
  captcha: string;

  constructor(private formBuilder: FormBuilder) {
    this.appointmentForm = new FormGroup({});
    this.captcha = '';
  }

  ngOnInit() {
    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      preferred_contact: ['phone', Validators.required],
      issue: [[], Validators.required],
      notes: [''],
    });
  }

  submitAppointment() {
    console.log(this.appointmentForm);
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      // Send the form data to your backend service for processing
    } else {
      this.markFormGroupTouched(this.appointmentForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  resolved(res: any) {
    this.captcha = res;
  }

  // Getter for name control
  get nameCtrl(): FormControl {
    return this.appointmentForm.get('name') as FormControl;
  }

  // Getter for email control
  get emailCtrl(): FormControl {
    return this.appointmentForm.get('email') as FormControl;
  }

  // Getter for phone control
  get phoneCtrl(): FormControl {
    return this.appointmentForm.get('phone') as FormControl;
  }

  // Getter for preferred_contact control
  get preferredContactCtrl(): FormControl {
    return this.appointmentForm.get('preferred_contact') as FormControl;
  }

  // Getter for issue control
  get issueCtrl(): FormControl {
    return this.appointmentForm.get('issue') as FormControl;
  }

  // Getter for notes control
  get notesCtrl(): FormControl {
    return this.appointmentForm.get('notes') as FormControl;
  }
}
