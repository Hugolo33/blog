import { Component, inject } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent {


  postService = inject(PostService);
  router = inject(Router);

  formPost: FormGroup;

  constructor() {
    this.formPost = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),

    });
  }
  onSubmit() {
    this.postService.createPost(this.formPost.value);
    this.router.navigate(['/blogs']);

  }




}
