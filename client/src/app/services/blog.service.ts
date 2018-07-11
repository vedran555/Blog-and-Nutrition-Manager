import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { RequestOptions, Headers, Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  //domain = 'http://localhost:8080/';
  domain = '';
  options;

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  // Create Header
  createAuthenticationHeader() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }

  // Save New Blog To Database
  postNewBlogPost(blog) {
    this.createAuthenticationHeader();
    return this.http.post(this.domain + 'blogs/newBlog', blog, this.options)
      .map(res => res.json());
  }

  // Get All Blogs From DB
  getAllBlogs() {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'blogs/allBlogs', this.options)
      .map(res => res.json());
  }

  getByCreator(creator, title) {
    this.createAuthenticationHeader();
	
    return this.http.get(this.domain + 'blogs/searchByCreator/?createdBy='+creator+'&title='+title, this.options)//requestOptions)
      .map(res => res.json());
  }

  // Get Blog To Edit
  getBlogToEdit(id) {
    this.authService.createAuthenticationHeader();
    return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options)
      .map(res => res.json());
  }

  // Update Blog
  updateBlog(blog) {
    this.createAuthenticationHeader();
    return this.http.put(this.domain + 'blogs/updateBlog', blog, this.options)
      .map(res => res.json());
  }

  // Delete Blog
  deleteBlog(id) {
    this.createAuthenticationHeader();
    return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options)
      .map(res => res.json());
  }

  // Like Blog
  likeBlog(object) {
    this.createAuthenticationHeader();
    return this.http.put(this.domain + 'blogs/likeBlog', object, this.options)
      .map(res => res.json());
  }

  // Dislike Blog
  dislikeBlog(object) {
    this.createAuthenticationHeader();
    return this.http.put(this.domain + 'blogs/dislikeBlog', object, this.options)
      .map(res => res.json());
  }

  // Get Profile of Likers/Dislikers
  getProfileByUsername(username) {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'blogs/profile/' + username, this.options)
      .map(res => res.json());
  }

  // Post Comment
  comment(comment) {
    this.createAuthenticationHeader();
    return this.http.post(this.domain + 'blogs/comment', comment, this.options)
      .map(res => res.json());
  }

  // Delete Comment
  deleteComment(id) {
    this.createAuthenticationHeader();
    return this.http.delete(this.domain + 'blogs/deleteComment/' + id, this.options)
      .map(res => res.json());
  }

  // Get Comment
  getComment(id) {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'blogs/getComment/' + id, this.options)
      .map(res => res.json());
  }

  // Edit Comment
  editComment(object) {
    this.createAuthenticationHeader();
    return this.http.put(this.domain + 'blogs/editComment', object, this.options)
      .map(res => res.json());
  }


  // Get Titles for Search
  getTitles(title) { 
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'blogs/searchTitles/' + title, this.options)
      .map(res => res.json());
  }

  // Get Authors for Search
  getAuthors(author) {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'blogs/searchAuthors/' + author, this.options)
      .map(res => res.json());
  }

  // Search for Blogs
  searchBlogs(title, author) {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'blogs/searchBlogs/?title='+title+'&author='+author, this.options)
      .map(res => res.json());
  }

}
