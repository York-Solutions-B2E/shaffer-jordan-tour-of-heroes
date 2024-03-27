// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// import { HeroesComponent } from './heroes/heroes.component';
// import { MessageService } from './message.service';
// import { MessagesComponent } from './messages/messages.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import { RouterModule, RouterOutlet} from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
// import { HeroSearchComponent } from './hero-search/hero-search.component';

// @NgModule({
//   declarations: [
//     DashboardComponent,
//     HeroesComponent,
//     HeroDetailComponent,
//     MessagesComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HeroesComponent,
//     MessageService,
//     MessagesComponent,
//     HeroDetailComponent,
//     DashboardComponent,
//     RouterOutlet,
//     RouterModule,
//     HttpClientModule,
//     HttpClientModule,
//     HeroSearchComponent,

// // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// // and returns simulated server responses.
// // Remove it when a real server is ready to receive requests.
// HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryDataService, { dataEncapsulation: false }
// )

//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }