import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicers',
  templateUrl: './servicers.component.html',
  styleUrls: ['./servicers.component.css']
})
export class ServicersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.servicers = this.getServices();
  }
  getServices(){
    return this.config.getConfig().intro;
  }
}
