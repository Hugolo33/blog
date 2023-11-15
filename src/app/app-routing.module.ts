import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormPostComponent } from './components/form-post/form-post.component';

const routes: Routes = [
  { path: '', component: ListaPostsComponent },
  { path: 'blogs', component: ListaPostsComponent },
  { path: 'posts', component: FormPostComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
