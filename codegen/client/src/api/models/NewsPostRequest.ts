/* tslint:disable */
/* eslint-disable */
/**
 * News Network API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NewsPostRequest
 */
export interface NewsPostRequest {
    /**
     * 
     * @type {string}
     * @memberof NewsPostRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof NewsPostRequest
     */
    body: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewsPostRequest
     */
    breaking: boolean;
}

/**
 * Check if a given object implements the NewsPostRequest interface.
 */
export function instanceOfNewsPostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "breaking" in value;

    return isInstance;
}

export function NewsPostRequestFromJSON(json: any): NewsPostRequest {
    return NewsPostRequestFromJSONTyped(json, false);
}

export function NewsPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewsPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'body': json['body'],
        'breaking': json['breaking'],
    };
}

export function NewsPostRequestToJSON(value?: NewsPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'body': value.body,
        'breaking': value.breaking,
    };
}

