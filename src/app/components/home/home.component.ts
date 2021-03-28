import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public welcome: string;
  public myName : string;
  public aboutMe : string;
  public frontend : string;
  public logic : string;
  public backend : string;

  constructor() {
    this.welcome = "Hi there!"
    this.myName = "I'm Nicolas"
    this.aboutMe = "Software development student passionate about the world of technology, " +
    "eager to continue learning new development tools that strengthen my professional skills.";
    this.frontend = "I'm a front developer intereed in knowing the new stantards of UI design," +
    "with basic knowledge in HTML, CSS and JS."
    this.logic = "I consider myself a programmer capable of solving any type of problem that requires logic and algorithmic skills. "
    this.backend = ""
  }

  ngOnInit(): void {
  }

  setColorToWelcome () {
    return '#f4f5db';
  }
}
