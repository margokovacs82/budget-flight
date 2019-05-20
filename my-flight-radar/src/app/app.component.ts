import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'my-flight-radar';
  mobile: boolean;

  ngOnInit() {
    if (window.screen.width < 530) { // 768px portrait
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
}
