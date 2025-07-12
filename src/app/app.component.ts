import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import emailjs from 'emailjs-com';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  public model: any = {};
  constructor() { }

  sendEmail(form: NgForm) {
    debugger;
    if (this.model != null)
    {
      emailjs.send('service_dcjzjb9', 'template_vlfboma', this.model, 'Xob0I7u0oLyPnmcRJ')
        .then(response => {
          this.model.reset();
        })
        .catch((error: HttpErrorResponse) => {
          if (error.error && error.error.errors) {

          }
        })
    } else {

    }
  }
}
