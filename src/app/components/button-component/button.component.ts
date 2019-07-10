import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

export interface Fruit {
    name: string;
}

@Component({
    selector: 'p-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {

    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    fruits: Fruit[] = [
        {name: 'Lemon'},
        {name: 'Lime'},
        {name: 'Apple'},
      ];

    constructor() { }

    ngOnInit() { 
        console.log("Button");
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value.toLowerCase().normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ł/g,"l");
    
        if ((value || '').trim() && value !== "#") {
          this.fruits.push({name: value.trim()});
        }
    
        if (input) {
          input.value = '#';
        }
      }
    
      remove(fruit: Fruit): void {
        const index = this.fruits.indexOf(fruit);
    
        if (index >= 0) {
          this.fruits.splice(index, 1);
        }
      }
      
}