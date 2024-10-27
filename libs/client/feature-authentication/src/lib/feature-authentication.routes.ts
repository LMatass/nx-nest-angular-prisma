import { Route } from '@angular/router';

export const featureAuthenticationRotues: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import(
        './client-feature-authentication/client-feature-authentication.component'
      ).then((m) => m.ClientFeatureAuthenticationComponent),
  },
];
