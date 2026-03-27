import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog-komponens',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.css'
})
export class ConfirmDialogKomponens {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogKomponens>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}

  megse(): void {
    this.dialogRef.close(false);
  }

  igen(): void {
    this.dialogRef.close(true);
  }
}