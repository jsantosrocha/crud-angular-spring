import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})

export class CourseFormComponent {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ){}

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => {this.onSucess(); this.onCancel()},
      error: () => this.onError(),
      complete: ()=>{}}
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Sucess','',{duration: 3000})
  }

  private onError(){
    this.snackBar.open('Error','',{duration: 3000})
  }
}
