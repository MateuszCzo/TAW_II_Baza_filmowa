import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-video-detalis',
  templateUrl: './video-detalis.component.html',
  styleUrls: ['./video-detalis.component.css']
})
export class VideoDetalisComponent implements OnInit {
  public image: string = '';
  public name: string = '';
  public description: string = '';

  public error = '';

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) => {
      id = params.get('id');
    });
    this.dataService.getById(id).subscribe((result: any) => {
      this.image = result.film['image'];
      this.name = result.film['name'];
      this.description = result.film['description'];
    },
    error => {
      this.error = error.error.error;
    });
  }
}
