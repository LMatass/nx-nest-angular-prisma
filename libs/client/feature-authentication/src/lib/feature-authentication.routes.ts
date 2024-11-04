import { Route } from '@angular/router';

export const featureAuthenticationRotues: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import(
        './client-feature-authentication/client-feature-authentication.component'
      ).then((m) => m.ClientFeatureAuthenticationComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import(
            './client-feature-authentication/ui-components/login-form/login-form.component'
          ).then((m) => m.LoginFormComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import(
            './client-feature-authentication/ui-components/register-form/register-form.component'
          ).then((m) => m.RegisterFormComponent),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];
