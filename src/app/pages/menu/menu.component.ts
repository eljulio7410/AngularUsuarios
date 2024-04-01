import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  get isUserLoggedIn(): boolean{
    return this.authService.loggedIn;
  }

  @Output() closeMenu = new EventEmitter<void>();
  @HostListener('click') onClick(): void{
    this.closeMenu.emit();
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logOut(): void{
    this.authService.logOut();
  }

}
