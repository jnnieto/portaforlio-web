import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public frontend : string;
  public logic : string;
  public backend : string;

  constructor() {
    this.frontend = "I'm a front developer intereed in knowing the new stantards of UI design," +
    " with basic knowledge in HTML, CSS and JS."
    this.logic = "I consider myself a programmer capable of solving any type of problem that requires logic and algorithmic skills. "
    this.backend = "I consider myself a back developer capable of adapting to any programming language. Based on logical abtraction, I seek to implement solutions for the good management of information. "
  }

  ngOnInit(): void {
  }

}
