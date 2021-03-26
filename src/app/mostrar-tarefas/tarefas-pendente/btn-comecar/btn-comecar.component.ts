import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog/dialog';
import { DialogCreateNewTaskComponent } from '../../modal-add-task/modal-add-task.component';

@Component({
  selector: 'tk-btn-comecar',
  templateUrl: './btn-comecar.component.html',
  styleUrls: ['./btn-comecar.component.css']
})
export class BtnComecarComponent implements OnInit {

  @Input() tempo: number = 0

  disabled: boolean = false;
  counter: {min: number; sec: number} = {min: 30, sec: 0};
  @Input() name: string = '';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogCreateNewTaskComponent, {
      height: '270px',
      width: '270px',
    });

    let instance = dialogRef.componentInstance;
    instance.title = this.name;
  }


  iniciar(){
    this.notifyAllStart()
    this.startTimer(this.tempo)
  }

 

  startTimer(minute: number) {
    this.counter = { min: minute, sec: 0 }
    let intervalId = setInterval(() => {
      if (this.counter.sec - 1 == -1) {
        this.counter.min -= 1;
        this.counter.sec = 59
      } 
      else this.counter.sec -= 1
      if (this.counter.min === 0 && this.counter.sec == 0){
        clearInterval(intervalId)
        this.notifyAllStart()
      } 
    }, 1000)
  }


  btnIniciar(){
    this.disabled = !this.disabled
  }

  notifyAllStart(){
    this.btnIniciar()
  }

}
