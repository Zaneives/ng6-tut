import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentURL = ""

  constructor(private router:Router) { 
    // router.events.subscribe((route: NavigationEnd) => {
      // this.currentURL = route.url
    // })
    // router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e:NavigationEnd) => {
    //   this.currentURL = e.url;
    // })
    router.events.subscribe(() => this.currentURL=this.router.url);

  }

  ngOnInit(): void {
  }

}
