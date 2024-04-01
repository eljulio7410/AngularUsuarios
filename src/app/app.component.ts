import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isContactVisible = false;
  isMenuOpened = false;

  toggleContactVisibility(): void{
    this.isContactVisible = !this.isContactVisible;
  }

  showMenu(): void{
    this.isContactVisible = false;
    this.isMenuOpened = true;
  }

  hideMenu(): void {
    this.isMenuOpened = false;
    
  }
}
