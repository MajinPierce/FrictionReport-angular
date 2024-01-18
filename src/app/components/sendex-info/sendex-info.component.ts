import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-sendex-info',
  templateUrl: './sendex-info.component.html',
  styleUrls: ['./sendex-info.component.scss']
})
export class SendexInfoComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SendexInfoDialogComponent);
  }

}

@Component({
  selector: 'app-sendex-info-dialog',
  templateUrl: 'sendex-info-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule],
})
export class SendexInfoDialogComponent {

  constructor(){}

}
