import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
        ToolbarModule,
        SidenavComponent,
        FormsModule,
        ButtonModule,
    ],
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] | undefined;
  public valueInput!: string;

  public ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload',
      },
    ];
  }
}
