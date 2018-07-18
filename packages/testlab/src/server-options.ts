// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/testlab
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/*
For @bajtos: We need the `ApplicationConfig` and `HttpServerOptions` shapes,
but importing them respectively from `@loopback/core` and `@loopback/http-server`,
respectively will create cyclic dependencies.

What's the best way to resolve this?
*/

// export function givenServerOptions(
//   options: Partial<ApplicationConfig | HttpServerOptions> = {},
// ): ApplicationConfig | HttpServerOptions {
//   const defaults = process.env.TRAVIS ? {host: '127.0.0.1'} : {};
//   return Object.assign(defaults, options);
// }
