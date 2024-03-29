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
 * @interface FeedItem
 */
export interface FeedItem {
    /**
     * 
     * @type {string}
     * @memberof FeedItem
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FeedItem
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof FeedItem
     */
    body: string;
    /**
     * 
     * @type {boolean}
     * @memberof FeedItem
     */
    breaking: boolean;
}

/**
 * Check if a given object implements the FeedItem interface.
 */
export function instanceOfFeedItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "breaking" in value;

    return isInstance;
}

export function FeedItemFromJSON(json: any): FeedItem {
    return FeedItemFromJSONTyped(json, false);
}

export function FeedItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeedItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'body': json['body'],
        'breaking': json['breaking'],
    };
}

export function FeedItemToJSON(value?: FeedItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'body': value.body,
        'breaking': value.breaking,
    };
}

