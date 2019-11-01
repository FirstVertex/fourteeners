import { Component, OnInit } from '@angular/core';
import { IMountain } from 'src/app/interfaces/mountain';
import { MountainService } from 'src/app/services/mountain.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-mountain-photo',
  templateUrl: './mountain-photo.component.html',
  styleUrls: ['./mountain-photo.component.scss']
})
export class MountainPhotoComponent implements OnInit {
  photo: string;

  constructor(public mountainService: MountainService) {
    mountainService.activeModel$.pipe(
      tap(am => this.photo = am ? am.photo : undefined)
    ).subscribe();
  }

  ngOnInit() {
  }

}
