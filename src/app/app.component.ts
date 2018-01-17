import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string=("US Time Zone Display");
  time= new Date();
  zone='UTC';
  onButtonClick(new_zone){
    if(new_zone=="clear"){
      this.zone='UTC';
    }else{this.zone=new_zone}
  }
}
