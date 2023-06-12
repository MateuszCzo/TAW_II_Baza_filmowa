import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.css']
})
export class VideoAddComponent {
  public credentials = {
    image: '',
    name: '',
    description: ''
  }

  public error = '';

  constructor(private dataService: DataService, private router: Router) {
  }

  add() {
    this.dataService.create(this.credentials)
      .subscribe(result => {
        this.router.navigate(['/videos']);
      },
      error => {
        this.error = error.error.error;
      });
  }
}
