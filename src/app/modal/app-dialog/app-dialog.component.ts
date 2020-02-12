import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core'; 
import { trigger, state, style, animate, transition } from '@angular/animations';
import { timer } from 'rxjs'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class AppDialogComponent implements OnInit {
  
  @Input() closable = true;
  @Input() visible: boolean;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  
  ionViewWillEnter() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
