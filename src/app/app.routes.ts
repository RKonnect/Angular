import {Routes} from '@angular/router';
import {PageHomeComponent} from "./pages/home/page-home/page-home.component";
import {PageInvitationComponent} from "./pages/invitation/page-invitation/page-invitation.component";
import {PageLaunchComponent} from "./pages/launch/page-launch/page-launch.component";
import {PageNotificationsComponent} from "./pages/notifications/page-notifications/page-notifications.component";
import {PageProfileComponent} from "./pages/profile/page-profile/page-profile.component";
import {PageRegisterComponent} from "./pages/register/page-register/page-register.component";
import {PageRestaurantComponent} from "./pages/restaurant/page-restaurant/page-restaurant.component";
import {PageSettingsComponent} from "./pages/settings/page-settings/page-settings.component";
import {PageLoginComponent} from "./pages/login/page-login/page-login.component";
import {PageRecentMeetingComponent} from "./pages/recentMeeting/page-recent-meeting/page-recent-meeting.component";
import {PageReservationsComponent} from "./pages/reservations/page-reservations/page-reservations.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'launch'
  },
  {
    path: "launch",
    loadComponent: () =>
      import('./pages/launch/page-launch/page-launch.component')
        .then(m => PageLaunchComponent)
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
    path: "notifications",
    loadComponent: () =>
      import('./pages/notifications/page-notifications/page-notifications.component')
        .then(m => PageNotificationsComponent)
  },
  {
    path: "settings",
    loadComponent: () =>
      import('./pages/settings/page-settings/page-settings.component')
        .then(m => PageSettingsComponent)
  },
  {
    path: "login",
    loadComponent: () =>
      import('./pages/login/page-login/page-login.component')
        .then(m => PageLoginComponent)
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
