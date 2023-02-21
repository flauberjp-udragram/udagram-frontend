// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: "Udagram",
  frontEndDomain:
    "http://a3aa096c7b2ea4446bed82cbcc11c25b-1645837649.us-east-1.elb.amazonaws.com",
  apiHost:
    "http://a77989279ded34ccdac24154b1953198-935078171.us-east-1.elb.amazonaws.com:8080/api/v0",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
