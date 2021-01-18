// @flow

///////////////////////////////////////////////////////////////////////////////
// @file         : ApiClient.js                                              //
// @summary      : Dynamic Google API Client builder                         //
// @version      : 1.0.0                                                     //
// @project      : N/A                                                       //
// @description  : Reference: developers.google.com/discovery/v1/reference   //
// @author       : Benjamin Maggi                                            //
// @email        : benjaminmaggi@gmail.com                                   //
// @date         : 17 Sep 2017                                               //
// @license:     : MIT                                                       //
// ------------------------------------------------------------------------- //
//                                                                           //
// Copyright 2017 Benjamin Maggi <benjaminmaggi@gmail.com>                   //
//                                                                           //
//                                                                           //
// License:                                                                  //
// Permission is hereby granted, free of charge, to any person obtaining a   //
// copy of this software and associated documentation files                  //
// (the "Software"), to deal in the Software without restriction, including  //
// without limitation the rights to use, copy, modify, merge, publish,       //
// distribute, sublicense, and/or sell copies of the Software, and to permit //
// persons to whom the Software is furnished to do so, subject to the        //
// following conditions:                                                     //
//                                                                           //
// The above copyright notice and this permission notice shall be included   //
// in all copies or substantial portions of the Software.                    //
//                                                                           //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS   //
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                //
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.    //
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY      //
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,      //
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE         //
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.                    //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////


import axios from 'axios';
import ApiDiscovery from  './ApiDiscovery';
import $http from './Http';

type Options = {
  baseURL: string
};

export default class ApiClient {

  constructor ({ api, key, version }) {
    this.api = api;
    this.key = key;
    this.version = version;
  }

  async init (api?: string = this.api) {
    try {
      const { resources, baseUrl: baseURL } = await ApiDiscovery.getRest(api, { fields: 'resources,baseUrl' });
      this.$resource = this.buildResources(resources, baseURL);
      return this;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  dict (entries) {
    if(Array.isArray(entries) && entries.length) {
      return Object.assign({}, ...entries.map( ([key, value]) => ({[key]: value}) ));
    } else {
      return null;
    }
  }

  validator (parameters: any) {
    const required = Object
      .entries(parameters)
      .filter(([ name, parameter ]) => parameter.required)
      .map(([ name, parameter ]) => name);

    const assumed = Object
      .entries(parameters)
      .filter(([ name, parameter ]) => parameter.default)
      .map(([ name, parameter ]) => ([ name, parameter.default ]));

    const entries = Object.entries(parameters);
    const keys = Object.keys(parameters);
    // const requiredX = entries.filter(([ key, value ]) => value.required).map(([ name, parameter ]) => name);
    const schema = entries.reduce((schema, [ key, value ]) => {
      return Object.assign({}, schema, {
        [key]: {
          type: value.type,
          default: value.default,
          minimum: value.minimum,
          maximum: value.maximum,
        }
      });
    }, {});

    return function (expression: any) {
      return true;
    };
  }

  buildMethods (methods, baseUrl) {
    return methods.reduce((actions, [ name, { httpMethod, path, parameters, response } ]) => {
      /*
      const required = Object
        .entries(parameters)
        .filter(([ name, parameter ]) => parameter.required)
        .map(([ name, parameter ]) => ([name, null]));

      const assumed = Object
        .entries(parameters)
        .filter(([ name, parameter ]) => parameter.default)
        .map(([ name, parameter ]) => ([name, parameter.default]));
      */

      const request = (validator: any, config: any) => {
        /*
        const validEntries = Object.entries(parameters);
        const validKeys = Object.keys(parameters);
        const requiredKeys = validEntries.filter(([ key, value ]) => value.required).map(([ name, parameter ]) => name);
        const validSchema = validEntries.reduce((schema, [key, value]) => {
          return Object.assign({}, schema, {
            [key]: {
              type: value.type,
              default: value.default,
              minimum: value.minimum,
              maximum: value.maximum,
            }
          });
        }, {});
        */

        switch (config.method.toUpperCase()) {

          case 'GET': {
            return async (params?: Object) => await $http({ ...config, ...{ params }});
          }

          case 'POST': {
            if (validator) {
              return async (params?: Object, data?: Object) => await $http({ ...config, ...{ params, data }});
            } else {
              return async (data?: Object) => await $http({ ...config, ...{ data }});
            }
          }

          case 'DELETE': {
            return async (params?: Object) => await $http({ ...config, ...{ params }})
          }

          default:
            return async (params?: Object) => await $http({ ...config, ...{ params }})
        }

        return async (params?: any, data?: any) => {
          try {

            /*
            const hasValidParams = Object.entries(params)
            .every(function ([key, value]) {
              return validKeys.includes(key) && skeemas.validate(value, validSchema[key]);
            });

            const hasRequiredParams = requiredKeys.every(param => {
              return Object.keys(params).includes(param);
            });
            */

            // console.log('validKeys', validKeys)
            // console.log('requiredKeys', requiredKeys);
            // console.log('hasValidParams', hasValidParams)
            // console.log('hasRequiredParams', hasRequiredParams)
            // console.log('params', params);

            // const req = JSON.stringify({ ...config, ...{ params }},null,2);
            // console.log('REQ', req);
            if (parameters) {
              return await $http({ ...config, ...{ params }});
            } else if (!parameters && httpMethod.toUpperCase() === 'POST') {
              return await $http({ ...config, ...{ data: params }});
            }
            // console.log('config, params', { ...config, ...{ params }});
            // return { pageInfo: { config, ...{ params }} };
          } catch (error) {
            console.error(error);
            return error;
          }
        }
      }

      const validator = parameters ? this.validator(parameters) : null;

      return Object.assign({}, actions, {
        [name]: request(validator, { ...$http.defaults.params, ...{
          method: httpMethod,
          // baseURL: baseUrl,
          url: path/*,
          // url: this.service.basePath + path,
          params: {
            ...this.dict(required),
            ...this.dict(assumed)
          }*/
        }})
      });

    }, {});
  }

  buildResources (resources, baseURL) {
    $http.defaults.baseURL = baseURL;
    $http.defaults.params = { key: this.key };
    return Object.entries(resources).reduce((resources, [ name, { methods } ]) => {
      return Object.assign({}, resources, {
        [name]: this.buildMethods(Object.entries(methods))
      })
    }, {});
  }
}
