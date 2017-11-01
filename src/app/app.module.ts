import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { PermissionComponent } from './permission/permission.component';

import { appRoutingModule } from './app.routing.modules';

import { UserService } from './user/user.service';
import { GroupService } from './group/group.service';
import { PermissionService } from './permission/permission.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GroupComponent,
    PermissionComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [UserService,
    PermissionService,
    GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
