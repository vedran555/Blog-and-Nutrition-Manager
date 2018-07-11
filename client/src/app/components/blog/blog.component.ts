import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { BlogService } from '../../services/blog.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { ScreenService } from '../../services/screen.service';
import { ValidateComment } from '../../services/comment-validator';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild('itemm') itemm: ElementRef;

  newPost = false;
  loadingBlogs = false;
  showItem = false;
  form;
  processing = false;
  username;
  blogPosts;
  showProf = false;
  showComments = false;
  id;
  enabledIds = []; // for comments to show/hide
  commentsIds = []; // for text field for comment
  commentBody = '';
  toDelete; // id of comment to be deleted
  editingComments = [];
  editCommentBody = '';
  editCommId;
  showSearchBox = false;
  titleItems = null; titleCond = false; titleInput = ''; ind = -1; currentItemDropdown = null;
  authorItems = null; authorCond = false; authorInput = ''; indAuthor = -1; currentAuthorDropdown = null;
  searchedBlogs;
  searchPerformed = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private blogService: BlogService,
    private flashMessages: FlashMessagesService,
    private screenService: ScreenService
  ) { 
    this.createNewBlogForm();
  }

  ngOnInit() {
    this.authService.getProfile()
      .subscribe(
        profile => {
          this.username = profile.user.username;
        }
      ); // this way, because in localStorage are stored strings, not objects, s we cannot access with: user.username
      this.getAllBlogs();
  }

  newBlogForm() {
    this.newPost = true;
  }

  reloadBlogs() {
    this.enabledIds = []; //reset
    this.commentsIds = []; //reset
    this.loadingBlogs = true;
    this.searchPerformed = false; // show all blogs on reload
    this.getAllBlogs();
    setTimeout(() => {
      this.loadingBlogs = false;
    }, 1000);
  }

  // Title Validity Checker
  validateTitle(control) {
    let regexp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    if(regexp.test(control.value)) { return null }
    else { return { 'validateTitle': true } }
  }

  // Create New Blog Form
  createNewBlogForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), this.validateTitle]],
      body: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]]
    });
  }

  enableNewBlogForm() {
    this.form.get('title').enable();
    this.form.get('body').enable();
  }

  disableNewBlogForm() {
    this.form.get('title').disable();
    this.form.get('body').disable();
  }

  // On Submit Blog Post
  onBlogSubmit() {
    this.processing = true;
    this.disableNewBlogForm();
    const blog = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      createdBy: this.username
    }
    this.blogService.postNewBlogPost(blog)
      .subscribe(
        data => {
          if(data.success) {
            this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 2000 });
            this.getAllBlogs(); // retreive all blogs when new blog is saved
            setTimeout(() => {
              this.newPost = false;
              this.processing = false;
              this.enableNewBlogForm();
            }, 2000);
          }
          else {
            this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
            setTimeout(() => {
              this.newPost = false;
              this.processing = false;
              this.enableNewBlogForm();
            }, 2000);
          }
        }
      );
  }

  goBack() {
    window.location.reload();
  }

  getAllBlogs() {
    this.blogService.getAllBlogs()
      .subscribe(
          (data) => {
            this.blogPosts = data.blogs;
          }
      );
  }

  onSearch(creator, title) {
    this.blogService.getByCreator(creator, title)
      .subscribe(
        data => {
          this.blogPosts = data.blogs;
        }
      );
  }

  // On LIke
  onLike(id) {
    const obj = { id: id };
    this.blogService.likeBlog(obj)
      .subscribe( 
        res => {
          if(!res.success) {
            console.log(res.msg);
          }
          else {
            console.log(res.msg);
          }
        }
      );
      this.getAllBlogs();
      this.searchPerformed = false; //go to all comment when like comment
  }

  // On Dislike
  onDislike(id) {
    const obj = { id: id };
    this.blogService.dislikeBlog(obj)
      .subscribe(
        res => {
          if(!res.success) {
            console.log(res.msg);
          }
          else {
            console.log(res.msg);
          }
        }
      );
      this.getAllBlogs();
      this.searchPerformed = false; //go to all comment when dislike comment
  }

  // Post Comment
  postComment(id) {
    const comment = {
      comment: this.commentBody,
      id: id
    }
    this.blogService.comment(comment)
      .subscribe(
        data => {
          if(!data.success) {
            this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 1200});
          }
          else {
              this.commentBody = '';
              let ind = this.commentsIds.indexOf(id);
              this.commentsIds.splice(ind, 1);
              this.enabledIds.push(id);
              this.getAllBlogs();
          }
        }
      );
    this.searchPerformed = false; //go to all comment when post comment
  }

  // Delete Comment
  deleteComment() {
    this.blogService.deleteComment(this.toDelete)
      .subscribe(
        data => {
          if(!data.success) {
            this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 1200});
          }
          else {
            this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 1200});
            this.getAllBlogs();
          }
        }
      );
      this.searchPerformed = false; //go to all comment when delete comment
  }

  // Get Comment To Be Edited
  getComment(commId) {
    this.editCommId = commId;
    this.blogService.getComment(commId)
      .subscribe(
        data => {
          if(!data.success) {
            this.flashMessages.show(data.msg, {cssClass: 'alert-danger'});
          }
          else {
            this.editCommentBody = data.comment.comment;
          }
        }
      );
  }

  // Edit Comment
  editComment() {
    const obj = {
      comment: this.editCommentBody,
      commId: this.editCommId
    }
    this.blogService.editComment(obj)
      .subscribe(
        data => {
          if(!data.success) {
            this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 1200});
          }
          else {
            
            this.getAllBlogs();
          }
        }
      );
      this.searchPerformed = false; //go to all comment when cmment is edited
  }

  // title search section
  // on input -> search for titles for autocomplete
  titleSearch() {
    this.currentItemDropdown = null; // reset currentItemDropdown on input(to avoid remembered item)
    this.ind = -1; // reset ind on input(to avoid remembered index)
    if(this.titleInput === '' || !this.isValidTitle()) {
      this.titleItems = null;
    }
    else {
      this.blogService.getTitles(this.titleInput)
      .subscribe(
        data => {
          if(!data.success) {
            console.log('Can not get titles from database')
          }
          else {
            this.titleCond = true; //show autocomplete options
            this.titleItems = data.blogs;
          }
        }
      );
    }
  }

  // on title item click
  titleItemClick(titleItem) {
    this.titleInput = titleItem; //show selected autocomplete option inside of text field
    this.titleCond = false; //hide autocomplete options
    this.titleItems = null; //clear preview autocomplete options
    this.ind = -1; // reset index
  }

  toggleDropdown() {
    this.titleCond = !this.titleCond;
    // when dropdown is hidden clear currentItemDropdown and ind
    this.currentItemDropdown = null;
    this.ind = -1;
  }

  onKeydown(event) {
    if(this.titleItems != null) {
      if(event === 'downArrow') {
        if(this.ind == this.titleItems.length-1) {
          this.ind = 0; // when come to last
        }
        else {
          ++this.ind; // initially ind=-1, so we start from 0
        }
        if(this.ind>-1 && this.ind<this.titleItems.length) {
          this.currentItemDropdown = this.titleItems[this.ind].title; // set current item only if current index is valid
        }
      }
      if(event === 'upArrow') {
        if(this.ind == 0 || this.ind == -1) {
          this.ind = this.titleItems.length-1;
        }
        else {
          --this.ind;
        }
        if(this.ind>-1 && this.ind<this.titleItems.length) {
          this.currentItemDropdown = this.titleItems[this.ind].title; // set current item only if current index is valid
        }
      }
    }
  }

  mouseOver(i, currentItem) {
    this.ind = i;
    this.currentItemDropdown = currentItem;
  }

  mouseOut() {
    this.ind = -1;
    this.currentItemDropdown = null;
  }

  onEnter() {
    if(this.currentItemDropdown != null) {
      this.titleItemClick(this.currentItemDropdown); // to set value on enter only if some value is selected
    }
  }

  isValidTitle(): boolean {
    let regexp = /^\s+$/;
    if(regexp.test(this.titleInput)) {
      return false;
    }
    else {
      return true;
    }
  }
  // end of title search section

  // author search section
  // on input -> search for authors for autocomplete
  authorSearch() {
    this.currentAuthorDropdown = null; // reset currentItemDropdown on input(to avoid remembered item)
    this.indAuthor = -1; // reset ind on input(to aovoid remembered index)
    if(this.authorInput === '' || !this.isValidAuthor()) {
      this.authorItems = null;
    }
    else {
      this.blogService.getAuthors(this.authorInput)
      .subscribe(
        data => {
          if(!data.success) {
            console.log('Cannot get authors from database');
          }
          else {
            this.authorCond = true; //show autocomplete options
            this.authorItems = data.authors;
          }
        }
      );
    }
  }

  // on title item click
  authorItemClick(author) {
    this.authorInput = author; //show selected autocomplete option inside of text field
    this.authorCond = false; //hide autocomplete options
    this.authorItems = null; //clear preview autocomplete options
    this.indAuthor = -1; // reset index
  }

  toggleDropdownAuthor() {
    this.authorCond = !this.authorCond;
    // when dropdown is hidden clear currentItemDropdown and ind
    this.currentAuthorDropdown = null;
    this.indAuthor = -1;
  }

  onKeydownAuthor(event) {
    this.isValidAuthor();
    if(this.authorItems != null) {
      if(event === 'downArrow') {
        if(this.indAuthor == this.authorItems.length-1) {
          this.indAuthor = 0; // when come to last
        }
        else {
          ++this.indAuthor; // initially ind=-1, so we start from 0
        }
        if(this.indAuthor>-1 && this.indAuthor<this.authorItems.length) {
          this.currentAuthorDropdown = this.authorItems[this.indAuthor]; // set current item only if current index is valid
        }
      }
      if(event === 'upArrow') {
        if(this.indAuthor == 0 || this.indAuthor == -1) {
          this.indAuthor = this.authorItems.length-1;
        }
        else {
          --this.indAuthor;
        }
        if(this.indAuthor>-1 && this.indAuthor<this.authorItems.length) {
          this.currentAuthorDropdown = this.authorItems[this.indAuthor]; // set current item only if current index is valid
        }
      }
    }
  }

  mouseOverAuthor(i, currentAuthor) {
    this.indAuthor = i;
    this.currentAuthorDropdown = currentAuthor;
  }

  mouseOutAuthor() {
    this.indAuthor = -1;
    this.currentAuthorDropdown = null;
  }

  onEnterAuthor() {
    if(this.currentAuthorDropdown != null) {
      this.authorItemClick(this.currentAuthorDropdown); // to set value on enter only if some value is selected
    }
  }

  isValidAuthor(): boolean {
    let regexp = /^\s+$/;
    if(regexp.test(this.authorInput)) {
      return false;
    }
    else {
      return true;
    }
  }
  // end of Author search section

  // search for blogs(filters: title,author)
  searchBlogs() {
    this.searchPerformed = true;
    this.enabledIds = []; //reset
    this.commentsIds = []; //reset
    this.blogService.searchBlogs(this.titleInput, this.authorInput)
      .subscribe(
        data => {
          if(!data.success) {
            this.searchedBlogs = null;
          }
          else {
            this.searchedBlogs = data.blogs;
          }
        }
      );
  }

}
