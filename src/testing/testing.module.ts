import { defer } from 'rxjs';

/**
 * Returns a resolved promise for mocking out API responses.
 * @param data The desired data to be returned by the promise
 */
export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

/**
 * Returns a rejected promise for mocking out API responses.
 * @param errorObject The desired error Object to be returned by the promise
 */
export function asyncError<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

/**
 * A Simple function to replace all null's with an empty string;.
 * @param value  to check againest value
 */
export function nullReplace(value: any) : string {
    return value? value: '';
}