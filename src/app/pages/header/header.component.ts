import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleContactVisibility = new EventEmitter<void>();
  @Output() toggleMenu = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }
  
  onContactClicked(): void{
    this.toggleContactVisibility.emit();
  }
  onMenuClicked(): void{
    this.toggleMenu.emit();
  }
}
