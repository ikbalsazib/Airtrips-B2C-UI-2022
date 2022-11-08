import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {HeaderComponent} from './header/header.component';
import {SidenavListComponent} from './sidenav-list/sidenav-list.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
// import {LangTranslateModule} from '../lang-translate/lang-translate.module';
import {MaterialModule} from '../../material/material.module';
import {FormsModule} from '@angular/forms';
import {MegaMenuComponent} from './mega-menu/mega-menu.component';
import {BottomNavbarMobileComponent} from './bottom-navbar-mobile/bottom-navbar-mobile.component';


@NgModule({
  declarations: [
    MenuComponent,
    SidenavListComponent,
    MegaMenuComponent,
    BottomNavbarMobileComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        // LangTranslateModule,
        MaterialModule,
        FormsModule
    ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {
}
