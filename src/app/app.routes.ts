import {Routes} from '@angular/router';
import {PageHomeComponent} from "./pages/home/page-home/page-home.component";
import {PageInvitationComponent} from "./pages/invitation/page-invitation/page-invitation.component";
import {PageLaunchComponent} from "./pages/launch/page-launch/page-launch.component";
import {PageNotificationsComponent} from "./pages/notifications/page-notifications/page-notifications.component";
import {PageProfileComponent} from "./pages/profile/page-profile/page-profile.component";
import {PageRestaurantComponent} from "./pages/restaurant/page-restaurant/page-restaurant.component";
import {PageSettingsComponent} from "./pages/settings/page-settings/page-settings.component";
import {PageRecentMeetingComponent} from "./pages/recentMeeting/page-recent-meeting/page-recent-meeting.component";
import {PageReservationsComponent} from "./pages/reservations/page-reservations/page-reservations.component";
import { PageRegisterComponent } from './pages/register/page-register/page-register.component';
import { ProfileUpdateComponent } from './pages/profile/profile-update/profile-update.component';
import { NotificationsDetailComponent } from './pages/notifications/notifications-detail/notifications-detail.component';
import { AppStarterComponent } from './pages/launch/app-starter/app-starter.component';
import { AuthChoiceComponent } from './pages/launch/auth-choice/auth-choice.component';


export const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'starter'
  },
  {
    path: "starter",
    loadComponent: () =>
      import('./pages/launch/app-starter/app-starter.component')
        .then(m => AppStarterComponent)
  },
  {
    path: "launch",
    loadComponent: () =>
      import('./pages/launch/page-launch/page-launch.component')
        .then(m => PageLaunchComponent)
  },
  {
    path: "auth-choice",
    loadComponent: () =>
      import('./pages/launch/auth-choice/auth-choice.component')
        .then(m => AuthChoiceComponent)
  },
  {
    path: "home",
    component: PageHomeComponent
  },
  {
    path: "login",
    loadComponent: () =>
    import('./pages/login/page-login/page-login.component')
      .then(m => m.PageLoginComponent)
  },
  {
    path: "register",
    loadComponent: () =>
      import('./pages/register/page-register/page-register.component')
        .then(m => PageRegisterComponent)
  },
  {
    path: "restaurant",
    loadComponent: () =>
      import('./pages/restaurant/page-restaurant/page-restaurant.component')
        .then(m => PageRestaurantComponent)
  },
  {
    path: "invitation",
    loadComponent: () =>
      import('./pages/invitation/page-invitation/page-invitation.component')
        .then(m => PageInvitationComponent)
  },
  {
    path: "profile",
    loadComponent: () =>
      import('./pages/profile/page-profile/page-profile.component')
        .then(m => PageProfileComponent)
  },
  {
    path: "profile-update",
    loadComponent: () =>
      import('./pages/profile/profile-update/profile-update.component')
        .then(m => ProfileUpdateComponent)
  },
  {
    path: "notifications",
    loadComponent: () =>
      import('./pages/notifications/page-notifications/page-notifications.component')
        .then(m => PageNotificationsComponent)
  },
  {
    path: "notifications-detail",
    loadComponent: () =>
      import('./pages/notifications/notifications-detail/notifications-detail.component')
        .then(m => NotificationsDetailComponent)
  },
  {
    path: "settings",
    loadComponent: () =>
      import('./pages/settings/page-settings/page-settings.component')
        .then(m => PageSettingsComponent)
  },
  {
    path: "recentMeeting",
    loadComponent: () =>
      import('./pages/recentMeeting/page-recent-meeting/page-recent-meeting.component')
        .then(m => PageRecentMeetingComponent)
  },
  {
    path: "reservations",
    loadComponent: () =>
      import('./pages/reservations/page-reservations/page-reservations.component')
        .then(m => PageReservationsComponent)
  }
];
