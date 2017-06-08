import { Component ,OnInit} from '@angular/core';

import {GeoserviceService} from './geoservice.service';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private geoservice:GeoserviceService){}
  title="lkdsjnfkjfsf";
 // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  data:any=[];
  markers:marker[]=[];
  ngOnInit(){
   
    this.geoservice.GetNearData().subscribe(data=>{
      this.data=data;
      console.log(this.data);
      for(var i=0;i<this.data.length;i++){
        this.markers.push({lat: this.data[i].location.coordinates[0],lng: this.data[i].location.coordinates[1],label: 'A', draggable: true});
      }
    });


    if (navigator.geolocation) {
            var self = this;
            navigator.geolocation.getCurrentPosition(function(response){
                 console.log(response);
                   
                    self.lat=response.coords.latitude;
                    self.lng=response.coords.longitude;
                
            }, function() {
            alert("Unable to get GPS Location");
            }, {
            enableHighAccuracy : true
            });
        }
        else {
        alert("Geolocation is not supported by this browser.");
        }
        console.log();
  }
   
 

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng
  //   });
  // }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }  
   
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}