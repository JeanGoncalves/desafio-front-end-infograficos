import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu-item',
  templateUrl: './submenu-item.component.html',
  styleUrls: ['./submenu-item.component.scss']
})
export class SubmenuItemComponent implements OnInit {

  submenuState = 'none';
  submenu = document.getElementsByClassName('submenu');

  constructor() { }

  ngOnInit() {
    /*this.submenu[0]['style'].display = this.submenuState;*/
  }

  toggle () {

    /*if (this.submenuState === 'none') {
      this.submenuState = '';
    } else {
      this.submenuState = 'none';
    }

    this.submenu[0]['style'].display = this.submenuState;*/
  }

}
