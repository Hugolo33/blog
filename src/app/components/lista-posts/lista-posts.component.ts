import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/blog.interface';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  post: IPost[] = [];


  activatedRoute = inject(ActivatedRoute);
  postService = inject(PostService);

  ngOnInit() {
    this.post = this.postService.getAll();
    // this.arrPosts = this.postService.getByCategoria();


  }
  onChange($event: any) {
    // this.activatedRoute.params.subscribe(params => {
    //   const response = this.postService.getByCategoria(params['/blogs']);
    //   this.post = response;
    // })


    const response = this.postService.getByCategoria($event.target.value);
    this.post = response;


  }
}
