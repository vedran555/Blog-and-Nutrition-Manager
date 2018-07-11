import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit {

  id;
  blog = null;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private flashMessages: FlashMessagesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          this.id = params.get('id');
        }
      );
      this.fetchBlog();
  }

  // Fetch Blog
  fetchBlog() {
    this.blogService.getBlogToEdit(this.id)
      .subscribe(
        data => {
          if(!data.success) {
            this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 1500});
            setTimeout(() => {
              this.router.navigate(['/blog']);
            }, 1500);
          }
          else {
            this.blog = data.blog;
          }
        }
      );
  }

  // Go Back
  backToBlogs() {
    this.router.navigate(['/blog']);
  }

  // Delete Blog
  deleteBlog() {
    this.blogService.deleteBlog(this.id)
      .subscribe(
        res => {
          if(!res.success) {
            this.flashMessages.show(res.msg, {cssClass: 'alert-danger', timeout: 1500});
            setTimeout(() => {
              this.router.navigate(['/blog']);
            }, 1500);
          }
          else {
            this.flashMessages.show(res.msg, {cssClass: 'alert-success', timeout: 1500});
            setTimeout(() => {
              this.router.navigate(['/blog']);
            }, 1500);
          }
        }
      );
  }

}
