import { Component, OnInit, AfterViewInit } from '@angular/core';

import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import { MountainService } from '../../services/mountain.service';
import { tap, filter } from 'rxjs/operators';
import {Fill, RegularShape, Stroke, Style} from 'ol/style';
import Draw from 'ol/interaction/Draw';
import {Vector as VectorSource} from 'ol/source';

@Component({
  selector: 'app-mountain-map',
  templateUrl: './mountain-map.component.html',
  styleUrls: ['./mountain-map.component.scss']
})
export class MountainMapComponent implements OnInit, AfterViewInit {
  private map: Map;
  private view: View;
  private star: Style;
  draw: Draw;
  source: VectorSource;
  ngAfterViewInit(): void {
    this.source = new VectorSource({wrapX: false});
    this.view = new View({
      center: fromLonLat([-105.718758, 39.099594]),
      zoom: 7
    });
    this.map = new Map({
      target: 'mapdiv',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: this.view
    });
    var stroke = new Stroke({color: 'black', width: 2});
    var fill = new Fill({color: 'red'});
    this.star = new Style({
      image: new RegularShape({
        fill: fill,
        stroke: stroke,
        points: 5,
        radius: 10,
        radius2: 4,
        angle: 0
      })
    })
  }

  constructor(mountainService: MountainService) {
    mountainService.activeModel$.pipe(
      filter(am => !!am),
      tap(am => this.flyTo(fromLonLat([am.Long, am.Lat])))
    ).subscribe();
  }

  ngOnInit() {

  }

private flyTo(location, done?) {
    let duration = 2000;
    let zoom = 10;//this.view.getZoom();
    let parts = 2;
    let called = false;
    function callback(complete) {
      --parts;
      if (called) {
        return;
      }
      if (parts === 0 || !complete) {
        called = true;
        done && done(complete);
      }
    }
    this.view.animate({
      center: location,
      duration
    }, callback);
    this.view.animate({
      zoom: zoom - 1,
      duration: duration / 2
    }, {
      zoom,
      duration: duration / 2
    }, callback);
  }

  addDot() {
    if (this.draw) {
      this.map.removeInteraction(this.draw);
    }
    this.draw = new Draw({
      source: this.source,
      type: 'Point'
    });
    this.map.addInteraction(this.draw);
  }
}
