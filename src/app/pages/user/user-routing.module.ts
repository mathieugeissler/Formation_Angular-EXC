import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserByNameResolver } from '../../services/resolvers/user-by-name.resolver';
import { UsersResolver } from '../../services/resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    children: [
      {
        path: '',
        component: UsersListComponent,
        resolve: {
          users: UsersResolver,
        },
      },
      {
        path: 'new',
        component: NewUserComponent,
      },
      {
        path: ':username',
        resolve: {
          user: UserByNameResolver,
        },
        children: [
          {
            path: '',
            component: UserDetailsComponent,
          },
          {
            path: 'edit',
            component: EditUserComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
