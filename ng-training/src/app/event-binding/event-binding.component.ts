import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  value : string =''

  show(event :Event){
    this.value=(<HTMLInputElement>event.target).value;
  }

  hidden : boolean =false
  hideAlert() {
    this.hidden = true;
  }

}
