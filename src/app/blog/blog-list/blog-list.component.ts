// src/app/blog-list/blog-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { Post } from '../blog-list/model'; // Adjust the path to your model file

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts: Post[] = []; // Use the Post interface here

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }

  editPost(id: string): void {
    this.router.navigate([`/blogs/edit/${id}`]);
  }

  deletePost(id: string): void {
    this.blogService.deletePost(id);
    this.posts = this.blogService.getPosts(); // Refresh list
  }

  isAuthor(post: Post): boolean {
    // Implement logic to check if the current user is the author of the post
    return true; // Placeholder
  }
}
