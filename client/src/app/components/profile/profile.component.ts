import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  usersToApprove = null;

  constructor(
    private authService: AuthService,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getProfile()
      .subscribe(
        profile => {
          this.user = profile.user;
          if(profile.user.isAdmin) {
            console.log('user is admin');
            this.getNotApprovedProfiles();
          }
        }
      );
  }

  // Get Not Approved Profiles
  getNotApprovedProfiles() {
    this.authService.getNotApprovedProfiles()
      .subscribe(
        data => {
          if(!data.success) {
            this.flashMessages.show('Can not get profiles', {cssClass: 'alert-danger', timeout: 1200});
          }
          else {
            this.usersToApprove = data.users;
          }
        }
      );
  }

  // Approve Request
  approveRegistrationRequest(usersId) {
    const id = {
      usersId: usersId
    }
    this.authService.approveRequest(id)
      .subscribe(
        data => {
          if(!data.success) {
            this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 1200});
          }
          else {
            this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 1000});
            this.getNotApprovedProfiles();
          }
        }
      );
  }

  // Delete Request
  deleteRequest(usersId) {
    this.authService.deleteRequest(usersId)
      .subscribe(
        data => {
          if(!data.success) {
            this.flashMessages.show(data.msg, {cssclass: 'alert-danger', timeout: 1200});
          }
          else {
            this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 1000});
            this.getNotApprovedProfiles();
          }
        }
      );
  }

}
