import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {

  private id = '';

  public credentials = {
    image: '',
    name: '',
    description: ''
  }

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });
    this.dataService.getById(this.id).subscribe((result: any) => {
      this.credentials = {
        image: result['image'],
        name: result['name'],
        description: result['description']
      }
    });
  }

  save() {
    this.dataService.update(this.id, this.credentials);
  }
}
