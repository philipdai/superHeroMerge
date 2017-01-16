import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Hero Merge App!';
  submitted = false;


  onSubmit() {
    this.submitted = true;
  }

  cancel() {
    this.submitted = false;
  }
}
