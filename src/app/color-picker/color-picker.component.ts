import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  public readonly defaultColors: string[] = [
    'black', 'white', 'red', 'orange',
    'yellow', 'green', 'blue', 'purple'
  ];

  constructor() { }

  ngOnInit() {
  }

}