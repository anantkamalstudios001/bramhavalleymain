import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menuOpen = false;
  isSmallScreen = false;

  ngOnInit() {
    this.updateScreenSize();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // @HostListener('window:resize')
  // onWindowResize() {
  //   this.updateScreenSize();
  // }

  updateScreenSize() {
    this.isSmallScreen = window.innerWidth < 1420;
    if (!this.isSmallScreen) {
      this.menuOpen = false;
    }
  }
}
// function HostListener(arg0: string): (target: HomeComponent, propertyKey: "onWindowResize", descriptor: TypedPropertyDescriptor<() => void>) => void | TypedPropertyDescriptor<() => void> {
//   throw new Error('Function not implemented.');
// }

