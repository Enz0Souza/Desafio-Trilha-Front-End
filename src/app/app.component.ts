import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petshop';
  IsUserOpen = false;
  IsNotificationOpen = false;


  ToggleNotification(){
    this.IsNotificationOpen = !this.IsNotificationOpen;
  }

  ToggleUserCard(){
    this.IsUserOpen = !this.IsUserOpen;
  }
}

