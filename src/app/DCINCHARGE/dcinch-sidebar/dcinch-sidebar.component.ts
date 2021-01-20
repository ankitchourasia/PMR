import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-dcinch-sidebar',
  templateUrl: './dcinch-sidebar.component.html',
  styleUrls: ['./dcinch-sidebar.component.css']
})
export class DcinchSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });
  }

}
