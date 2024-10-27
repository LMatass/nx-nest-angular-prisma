import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@nx-angular-nest-template/client/feature-authentication').then(
        (feature) => feature.featureAuthenticationRotues
      ),
  },
];
