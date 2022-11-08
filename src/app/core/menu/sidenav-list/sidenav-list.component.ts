import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LangService} from '../../../services/lang.service';
import {environment} from '../../../../environments/environment';



@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  public baseLink = environment.userBaseUrl;

  @Input() public navItem;
  @Input() sideNavMenuList: any[];
  activeLang: string = null;
  browserLanguage: string = null;

  isExpanded = true;
  isShowing = true;

  constructor(
    private langService: LangService,
    public translateService: TranslateService
  ) {
  }

  ngOnInit() {
    this.langService.languageChanged$.subscribe(data => {
      this.activeLang = data;
    });

    this.translateService.addLangs(['en', 'bn']);
    this.translateService.setDefaultLang('en');
    this.browserLanguage = this.translateService.getDefaultLang();
    this.translateService.use(this.browserLanguage.match(/en|bn/) ? this.browserLanguage : 'en');
  }


  // Open Close Toggle with device width
  sideLinkClick() {
    if (window.innerWidth > 599) {
      this.navItem.open();
    } else {
      this.navItem.close();
    }
  }

  selectLang(lang: string) {
    this.langService.setLanguage$(lang);
    this.translateService.use(this.activeLang);
  }
}
