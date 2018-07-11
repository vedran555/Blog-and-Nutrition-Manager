import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username;
  email;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          this.username = params.get('username');
        }
      );
      this.getUser();
  }

  // Go to Blogs
  goToBlogs() {
    this.router.navigate(['/blog']);
  }

  // Fetching User's Data
  getUser() {
    this.blogService.getProfileByUsername(this.username)
      .subscribe(
        data => {
          if(!data.success) {
            console.log(data.msg);
          }
          else {
            console.log(data);
            this.username = data.user.username;
            this.email = data.user.email;
          }
        }
      );
  }

}
