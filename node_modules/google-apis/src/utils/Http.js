// @flow

///////////////////////////////////////////////////////////////////////////////
// @file         : Http.js                                                   //
// @summary      : Http client wrapper                                       //
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


import { URL, URLSearchParams } from 'url';
import axios from 'axios';

type Options = {
  baseURL: string
};

// export const $http = (options: Options) => axios.create({ defaults, ...options });
const $http = axios.create({
  baseURL: 'https://www.googleapis.com',
  paramsSerializer(params) {
    params = Object.assign({}, params);
    const { fields } = params;
    if (Array.isArray(fields) && fields.length) {
      params.fields = fields.join(',');
    }
    // build param entries and clean null or undefined fiels
    const entries = Object.entries(params).filter(param => param.slice(-1).pop() != null);
    /* $FlowIssue */
    const searchParams: URLSearchParams = new URLSearchParams(entries);
    return searchParams.toString();
  }
});

// $http.interceptors.request.use(config => {
//   console.log('interceptors.request', config)
//   return config;
// })

$http.interceptors.response.use(function (response) {
  const { params } = response.config;
  if (!params) {
    return response.data;
  }
  else if (Array.isArray(params.fields) && params.fields.length) {
    console.log('fields skipped');
  } else if (params.fields && params.fields.length) {
    console.log('fields', params.fields.split(','));
  }
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


export default $http;
