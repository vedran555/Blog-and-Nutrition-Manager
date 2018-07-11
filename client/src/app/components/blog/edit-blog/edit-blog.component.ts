import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BlogService } from '../../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  blog = null;
  processing = false;
  id;
  blogFound = true;
  errMsg;

  constructor(
    private location: Location,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    console.log('init');
    this.route.paramMap
      .subscribe(
        params => {
          this.id = params.get('id');
        }
      );
      console.log('id: ' + this.id);
      this.getBlogById();
  }

  // Get Blog With Specific id
  getBlogById() {
    this.blogService.getBlogToEdit(this.id)
      .subscribe(
        data => {
          if(!data.success) {
            this.blogFound = false;
            this.errMsg = data.msg;
          }
          else {
            this.blogFound = true;
            this.blog = data.blog;
          }
        }
      );
  }

  // Update Blog
  updateBlog() {
    this.blogService.updateBlog(this.blog) 
      .subscribe(
        data => {
          if(!data.success) {
            this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 1500});
            this.processing = false;
          }
          else {
            this.processing = false;
            this.router.navigate(['/blog']);
            this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 1500});
          }
        }
      );
  }

  // Go Back
  goBack() {
    this.location.back();
  }


  // Save Changes
  onSaveChanges() {
    console.log('saved');
    this.processing = true;
    console.log(this.blog);
    this.updateBlog();
  }

}
