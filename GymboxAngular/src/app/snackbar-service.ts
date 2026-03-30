import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackBar = inject(MatSnackBar);

  success(message: string): void {
    console.log('SNACKBAR SUCCESS:', message);
    this.snackBar.open(message, 'Bezárás', {
      duration: 3000
    });
  }

  error(message: string): void {
    console.log('SNACKBAR ERROR:', message);
    this.snackBar.open(message, 'Bezárás', {
      duration: 4000
    });
  }

  info(message: string): void {
    console.log('SNACKBAR INFO:', message);
    this.snackBar.open(message, 'Bezárás', {
      duration: 3000
    });
  }
}