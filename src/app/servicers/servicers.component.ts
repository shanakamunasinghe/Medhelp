import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-servicers',
  templateUrl: './servicers.component.html',
  styleUrls: ['./servicers.component.css']
})
export class ServicersComponent implements OnInit {

  servicers = {
  };
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.servicers = this.getServices();
  }
  getServices(){
    return this.config.getConfig().servicers;
  }
}
