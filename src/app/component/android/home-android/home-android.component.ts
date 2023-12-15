import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-android',
  templateUrl: './home-android.component.html',
  styleUrls: ['./home-android.component.scss'],
})
export class HomeAndroidComponent  implements OnInit {

  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
