import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit  {

  public items: any[] = [];

  constructor(public dataService: DataService, public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.dataService.getAll()
      .subscribe(response => {
        this.items = response.films;
      });
  }

  deleteVideo(id: string) {
    if(!this.authService.isLoggedIn()) return;
    this.dataService.delete(id)
      .subscribe(result => {
        this.getAll();
      });
  }
}
