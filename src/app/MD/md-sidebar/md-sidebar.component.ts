import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-md-sidebar',
  templateUrl: './md-sidebar.component.html',
  styleUrls: ['./md-sidebar.component.css']
})
export class MdSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });
  }

}
