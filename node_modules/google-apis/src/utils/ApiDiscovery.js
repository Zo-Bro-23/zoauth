// @flow

///////////////////////////////////////////////////////////////////////////////
// @file         : ApiDiscovery.js                                           //
// @summary      : Google API Discovery Service interface                    //
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
import { URL, URLSearchParams } from 'url';
import $http from './Http';

type DirectoryItem = {
  discoveryRestUrl: string,
  version: string,
  documentationLink: string
};

type Api = {
  id: string,
  name: string,
  version: string
};

type ListParams = {
  name: string,
  preferred: boolean
};

export default class ApiDiscovery {

  static async list (name: string, preferred?: boolean = true) : Promise<*> {
    const params: ListParams = { name, preferred };
    try {
      const { items } = await $http.get('discovery/v1/apis', { params });
      if (params.name && items.length === 1) {
        return items.reverse().slice(-1).pop();
      } else {
        return items;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getRest (api: string | DirectoryItem, params?: Object) : Promise<*> {
    try {
      const { discoveryRestUrl } = (typeof api === 'string' || api instanceof String) ? await ApiDiscovery.list(api) : api;
      return await $http.get(discoveryRestUrl, { params });
    } catch (error) {
      return error;
    }
  }

  async init () {
    try {
      const item = await this.list('discovery');
      const description = await this.getRest(item);
      this.service = { item, description };
      return this;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  list = ApiDiscovery.list;
  getRest = ApiDiscovery.getRest;

  async getSchemas (api: string | DirectoryItem) : Promise<*> {
    const params = {
      fields: 'schemas'
    };
    try {
      return await this.getRest(api, params);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
