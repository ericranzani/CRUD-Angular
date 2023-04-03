import {Component, Inject, OnInit} from '@angular/core';
import { Usuarios } from 'src/app/views/home/home.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit{
  element!: Usuarios;
  isChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Usuarios,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}

  ngOnInit(): void{
    if(this.data.position != null){
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
