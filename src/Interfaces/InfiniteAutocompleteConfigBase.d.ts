import { Promise as es6Promise } from 'es6-promise';
import { IInputCompoenentConstructor } from './IInputComponent';
import { IResultsComponentConstructor } from './IResultsComponent';

/**
 * infinite-autocomplete config base interface
 * @author Islam Attrash
 */
export interface InfiniteAutocompleteConfigBase {
    /**
     * data static source
     */
    data?:Array<any>;
    /**
     * on-select event output handler when choosing an option
     */
    onSelect?:Function;
    /**
     * max height for the results options
     */
    maxHeight?:string;
    /**
     * data dynamic api source
     */
    getDataFromApi?(text:string, page:number, fetchSize:number):es6Promise<Array<any>>;
}