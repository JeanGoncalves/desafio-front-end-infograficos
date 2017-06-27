import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() arrMenu = [];
  
  constructor() { }

  ngOnInit() {
    console.log(this.arrMenu);
  }

  hasSubmenu(menu) {
    return menu.hasOwnProperty('submenu');
  }

  toggleMenu() {
    var menu = document.getElementsByClassName('menu')[0];
    if (menu.className === 'menu') {
      menu.className += ' responsive';
    } else {
      menu.className = 'menu';
    }
    console.log('menu toggle')
  }

}
