import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-ce-sidebar',
  templateUrl: './ce-sidebar.component.html',
  styleUrls: ['./ce-sidebar.component.css']
})
export class CeSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });
  }

}
