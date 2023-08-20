import { Component, Input } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cousers-list',
  templateUrl: './cousers-list.component.html',
  styleUrls: ['./cousers-list.component.scss'],
})
export class CousersListComponent {
  @Input() courses: Course[] = [];
  readonly displayedColumns = ['name', 'category', 'activity'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
