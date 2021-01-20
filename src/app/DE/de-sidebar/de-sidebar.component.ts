import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-de-sidebar',
  templateUrl: './de-sidebar.component.html',
  styleUrls: ['./de-sidebar.component.css']
})
export class DeSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });
  }

}
