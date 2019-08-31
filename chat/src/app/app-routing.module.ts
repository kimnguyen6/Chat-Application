import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupsComponent } from './groups/groups.component';
import { ChatComponent } from './chat/chat.component';
import { ChannelsComponent } from './channels/channels.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'groups', component: GroupsComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'channels', component: ChannelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
