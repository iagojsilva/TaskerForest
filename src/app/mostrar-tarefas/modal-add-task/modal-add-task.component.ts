import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  nome: string,
  tempo: number,
}

@Component({
  selector: 'tk-modal-add-task',
  templateUrl: './modal-add-task.component.html',
  styleUrls: ['./modal-add-task.component.css']
})
export class ModalAddTaskComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  nome: string = '';
  tempo: number = 0;



  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogCreateNewTaskComponent, {
      height: '270px',
      width: '270px',
    });

    let instance = dialogRef.componentInstance;
    instance.title = "Criar nova Tarefa"
  }
}





@Component({
  selector: 'dialog-create-new-task',
  templateUrl: 'modal.html',
})
export class DialogCreateNewTaskComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCreateNewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  @Input() title: string = '';

  onNoClick(): void {
    this.dialogRef.close();
  }

}