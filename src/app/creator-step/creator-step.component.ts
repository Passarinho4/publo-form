import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creator-step',
  templateUrl: './creator-step.component.html',
  styleUrls: ['./creator-step.component.scss']
})
export class CreatorStepComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
