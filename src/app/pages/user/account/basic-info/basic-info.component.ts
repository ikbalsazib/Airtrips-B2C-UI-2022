import {Component, Inject, OnInit} from '@angular/core';
import {UserDataService} from '../../../../services/user-data.service';
import {User} from '../../../../interfaces/user';
import {FormBuilder} from '@angular/forms';
import {UiService} from '../../../../services/ui.service';
import {ReloadService} from '../../../../services/reload.service';
import {EditBasicInfoComponent} from '../../../../shared/dialog-view/edit-basic-info/edit-basic-info.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UtilsService} from '../../../../services/utils.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  user: User = null;

  constructor(
    private dialog: MatDialog,
    protected userDataService: UserDataService,
    private reloadService: ReloadService
  ) { }

  ngOnInit(): void {
    this.reloadService.refreshUser$.subscribe(() => {
      this.getLoggedInUserInfo();
    });
    this.getLoggedInUserInfo();
  }

  private getLoggedInUserInfo() {
    this.userDataService.getLoggedInUserInfo()
      .subscribe(res => {
        this.user = res.data;
      }, error => {
        console.log(this.user);
      });
  }

  openNewDialog() {
    this.dialog.open(EditBasicInfoComponent, {
      data: this.user,
      panelClass: ['theme-dialog'],
      height: '60%',
      autoFocus: false,
      disableClose: false
    });
  }

}
