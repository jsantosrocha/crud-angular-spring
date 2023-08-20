import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cousers-list',
  templateUrl: './cousers-list.component.html',
  styleUrls: ['./cousers-list.component.scss'],
})
export class CousersListComponent {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'activity'];

  constructor() {}

  onAdd() {
    this.add.emit(true);
  }
}
