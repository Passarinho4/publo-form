import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'publo-form';
  files: File[] = [];
  previews: any[] = [];

  onFileChanged(event) {
    if(this.files.length < 5) {
    this.files.push(event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      this.previews.push(reader.result);
    })
    reader.readAsDataURL(event.target.files[0]);
  } else {
   alert("Too many files.") 
  }
  }
}
