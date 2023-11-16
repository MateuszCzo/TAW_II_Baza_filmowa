import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-video-detalis',
  templateUrl: './video-detalis.component.html',
  styleUrls: ['./video-detalis.component.css']
})
export class VideoDetalisComponent implements OnInit {
  public id = '';
  public image: string = '';
  public name: string = '';
  public description: string = '';
  public filmRating = 0.0;
  public userRating = 0;
  public hoveredStar = 0;

  public error = '';

  constructor(private dataService: DataService, public authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });
    this.dataService.getById(this.id).subscribe((result: any) => {
      this.image = result.film['image'];
      this.name = result.film['name'];
      this.description = result.film['description'];
      const ratings = result.film['ratings'];
      if (ratings && ratings.length > 0) {
        const sum = ratings.reduce((acc: number, rating: any) => acc + rating.rating, 0);
        this.filmRating = sum / ratings.length;
      } else {
        this.filmRating = 0;
      }
      if (this.authService.isLoggedIn()) {
        const userRating = ratings.find((rating: any) => rating.username == this.authService.getUserName());
        this.userRating = userRating ? userRating.rating : 0.0;
      }
      this.hoveredStar = this.userRating;
    },
    error => {
      this.error = error.error.error;
    });
  }

  onStarMouseOver(overedNumber: number) {
    this.hoveredStar = overedNumber;
  }

  onStarMouseOut() {
    this.hoveredStar = this.userRating;
  }

  onStarClick(clickedNumber: number) {
    this.userRating = clickedNumber;
    this.dataService.addUpdRating(this.id, {rating: clickedNumber}).subscribe(
      result => {
        this.dataService.getById(this.id).subscribe((result: any) => {
          const ratings = result.film['ratings'];
          if (ratings && ratings.length > 0) {
            const sum = ratings.reduce((acc: number, rating: any) => acc + rating.rating, 0);
            this.filmRating = sum / ratings.length;
          } else {
            this.filmRating = 0.0;
          }
        });
      },
      error => {
        this.error = error.error.error;
      }
    );
  }

}
