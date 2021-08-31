// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // api: 'http://api.rutaspanama.dev.cronapis.com/api',
  api: 'https://api.rutas.prod.dev.cronapis.com/api',
  firebase: {
    apiKey: 'AIzaSyAwpsAm2BlfpUCa20hymcmxrp97tjCIlPs',
    authDomain: 'rutasapp-305809.firebaseapp.com',
    projectId: 'rutasapp-305809',
    storageBucket: 'rutasapp-305809.appspot.com',
    messagingSenderId: '466798676316',
    appId: '1:466798676316:web:c6063ad42c2c7acf46d999'
  },
  PUSHER_APP_ID: 1190909,
  PUSHER_APP_KEY: '17f57ce05bb3f97f1ee8',
  PUSHER_APP_SECRET: '02ac7fdf7b269ff38226',
  PUSHER_APP_CLUSTER: 'mt1',
  googleConfig: {
    webClientId: '902176399419-e10ng3a6vsiv7ib90ub4f95n3knkgnur.apps.googleusercontent.com',
    offline: true,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
