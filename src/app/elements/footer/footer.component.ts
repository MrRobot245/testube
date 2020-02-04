import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  today : Date;
  hash : string;
  
  constructor(public device : DeviceDetectorService) { 
    this.today = new Date();
  }

  ngOnInit() {
  }

}
