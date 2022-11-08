import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-download-json-dialog',
  templateUrl: './download-json-dialog.component.html',
  styleUrls: ['./download-json-dialog.component.scss']
})
export class DownloadJsonDialogComponent implements OnInit {

  backupType: string; // 'bookmarks' | 'snippets';
  blobUrl: any;
  sanitizedBlobUrl: any;
  filename: string;

  constructor(
   
  ) {

  }

  ngOnInit() {
  }


}
