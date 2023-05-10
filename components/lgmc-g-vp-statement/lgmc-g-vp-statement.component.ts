import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'lgmc-g-vp-statement',
  templateUrl: './lgmc-g-vp-statement.component.html',
  styleUrls: ['./lgmc-g-vp-statement.component.css']
})
export class LgmcGVPStatementComponent implements OnInit {

  @Input() title: string;

  @Input() icon: string = "pi-check";

  @Input() backgroundColor: string = "#f5f5f5";

  @Input() color: string = "#495057";

  @Input() fontWeight: string = "bold";

  @Input() padding: number = 10;

  @Input() bodyPadding: number = 20;

  @Input() openBtn: boolean = true;

  @Input() isOpen: boolean = false;

  @Input() error: string;

  @Output() onUp: EventEmitter<void> = new EventEmitter<void>();

  @Output() onDown: EventEmitter<void> = new EventEmitter<void>();

  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleAccordion() {
    if(this.openBtn) {
      this.isOpen = !this.isOpen;
    }
  }

  up(e) {
    this.onUp.emit();
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  down(e) {
    this.onDown.emit();
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  delete(e) {
    this.onDelete.emit();
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

}
