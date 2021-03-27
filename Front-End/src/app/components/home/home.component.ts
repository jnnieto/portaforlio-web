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

  constructor() {
    this.welcome = "Hi there!"
    this.myName = "I'm Nicolas"
    this.aboutMe = "Software development student passionate about the world of technology, " +
    "eager to continue learning new development tools that strengthen my professional skills.";
  }

  ngOnInit(): void {
  }

  setColorToWelcome () {
    return '#f4f5db';
  }
}
