import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listMenu = [{
    name: 'Início',
    link: '#',
    select: true
  }, {
    name: 'Brasil',
    link: '#',
    submenu: [{
      name: 'Submenu 01',
      link: '#'
    }, {
      name: 'Submenu 02',
      link: '#'
    }, {
      name: 'Submenu 03',
      link: '#'
    }, {
      name: 'Submenu 04',
      link: '#'
    }, {
      name: 'Submenu 05',
      link: '#'
    }]
  }, {
    name: 'Mundo',
    link: '#'
  }, {
    name: 'Blogs',
    link: '#'
  }, {
    name: 'Assine',
    link: '#'
  }];

  constructor() { }

  ngOnInit() {
  }

}
