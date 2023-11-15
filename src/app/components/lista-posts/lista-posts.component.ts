import { Component, inject } from '@angular/core';
import { IPost } from 'src/app/interfaces/blog.interface';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  post: IPost[] = [];
  arrPosts: any[] = [];


  postService = inject(PostService);

  ngOnInit() {
    this.post = this.postService.getAll();
    // this.arrPosts = this.postService.getByCategoria();

  }


}
