import { Component } from '@angular/core';
import { FormBuilder, FormControl } from "@angular/forms";
import { FizzBuzzService } from "./fizzbuzz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FizzBuzzService]
})
export class AppComponent {

  constructor(
    private fizzBuzzService: FizzBuzzService,
    private formBuilder: FormBuilder) {

  }

  numberFormControl = new FormControl();
  numberFormGroup = this.formBuilder.group(this.numberFormControl);

  fizzBuzzStr = '';

  onSubmit(): void {
    this.fizzBuzzService.getString(this.numberFormControl.value)
      .subscribe(data => this.fizzBuzzStr = data);
  }
}
