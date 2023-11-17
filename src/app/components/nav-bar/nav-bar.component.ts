import { Component, inject } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  postService = inject(PostService);



}
