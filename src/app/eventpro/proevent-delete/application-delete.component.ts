import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-application-delete',
  standalone: true,
  imports: [
    MatDialogTitle
  ],
  templateUrl: './application-delete.component.html',
  styleUrl: './application-delete.component.css'
})
export class ApplicationDeleteComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<ApplicationDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean
  ) { }

  ngOnInit() { }

  confirm() {
    this.data = true
    this.dialogRef.close(true)
  }

  close() {
    this.dialogRef.close(false)
  }
}
