import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import { SubmenuItemComponent } from "./submenu-item/submenu-item.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    SubmenuItemComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
