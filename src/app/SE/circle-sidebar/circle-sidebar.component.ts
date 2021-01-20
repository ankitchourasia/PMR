import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-circle-sidebar',
  templateUrl: './circle-sidebar.component.html',
  styleUrls: ['./circle-sidebar.component.css']
})
export class CircleSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });
  }

}
