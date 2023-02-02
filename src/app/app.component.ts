import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Obecné', url: '/folder/Inbox', icon: 'earth' },
    { title: 'Obchod', url: '/folder/Inbox', icon: 'business' },
    { title: 'Sport', url: '/folder/Inbox', icon: 'walk' },
    { title: 'Umění', url: '/folder/Inbox', icon: 'videocam' },
    { title: 'Technologie', url: '/folder/Inbox', icon: 'desktop' },
    { title: 'Zdraví', url: '/folder/Inbox', icon: 'medkit' },
    { title: 'Věda', url: '/folder/Inbox', icon: 'rocket' },
];
  constructor() {}
}
