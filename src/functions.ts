import NumberRange from 'nluka-number-range';
import { IQuoteLength } from './types/practiceTypes';

/**
 * Creates a complete-depth copy of `entity`. Objects with function or symbol properties won't be copied correctly.
 * @param entity The entity to copy.
 * @returns A complete-depth copy of `entity`.
 */
export function createDeepCopy(entity: any) {
  return JSON.parse(JSON.stringify(entity));
}

/**
 * Checks if `obj` has a property with a key of value `key`.
 * @param obj The object to check.
 * @param key The key to search for.
 */
export function doesObjectHaveKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

export function convertNumberRangeToQuoteLength(
  range: NumberRange,
): IQuoteLength {
  return {
    min: range.getMin(),
    max: range.getMax(),
  };
}

export function convertQuoteLengthToNumberRange(ql: IQuoteLength) {
  return new NumberRange(ql.min, ql.max);
}
