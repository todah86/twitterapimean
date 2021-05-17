import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profiles: any;
  tweets: any;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getProfile();
    this.getProfileAws();
  }

  getProfileAws() {
    this.service.getTweetAllAws().subscribe(
      (res:any) => {
        this.profiles = res.Items;
      },
      err => console.error(err)
    );
  }

  getProfile() {
    this.service.getTweetAll().subscribe(
      (res:any) => {
        console.log(res);
        this.tweets = res.data;
      },
      err => console.error(err)
    );
  }

}
