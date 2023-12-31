import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  schemas:[NO_ERRORS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  firstName: string="";
  secondName: string="";
  fullName:string="";
  defName:string="Angular Developer";

  displayFullName()
  {
    if(this.firstName=="" && this.secondName=="")
    {
      
      this.fullName=this.defName;
    }
    else 
    {
      this.fullName=`${this.firstName} ${this.secondName}`;
    }
  }
}
