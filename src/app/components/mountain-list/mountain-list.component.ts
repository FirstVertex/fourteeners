import { Component, OnInit } from '@angular/core';
import { MountainService } from '../../services/mountain.service';
import { IMountain } from '../../interfaces/mountain';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.scss']
})
export class MountainListComponent implements OnInit {
  currentMountain: IMountain;

  constructor(public mountainService: MountainService) {
    mountainService.activeModel$.pipe(
      tap(am => this.currentMountain = am)
    ).subscribe();
  }

  ngOnInit() {
  }

}
