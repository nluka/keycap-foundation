# keycap-foundation

Code shared by the keyCap [client](https://github.com/nluka/keycap-client) and [API](https://github.com/nluka/keycap-api).

- [Installing](#installing)
- [Documentation](#documentation)
  - [Types](#types)
  - [Constants](#constants)
  - [Functions](#functions)

## Installing

`npm install keycap-foundation`

## Documentation

### Types

```ts
export type Time = ReturnType<typeof Date.now>;

export interface IServerResponseDataError {
  errors: string[];
}

export interface IServerResponseDataUserSignInSuccess {
  id: string;
  name: string;
  token: string;
}

export interface IServerResponseDataUserCreationSuccess
  extends IServerResponseDataUserSignInSuccess {}

export interface IPracticeSettings {
  currentConfig: IPracticeSettingsConfig;
  profiles: IPracticeSettingsProfile[];
}

export interface IPracticeSettingsProfile {
  name: string;
  config: IPracticeSettingsConfig;
}

export interface IPracticeSettingsConfig {
  basic: {
    config: IPracticeSettingsConfigBasic;
    pinned: PracticeSettingNameBasic[];
  };
  advanced: {
    config: IPracticeSettingsConfigAdvanced;
    pinned: PracticeSettingNameAdvanced[];
  };
}

export interface IPracticeSettingsConfigBasic {
  caretDelay: number;
  caretStyle: PracticeCaretStyle;
  countdownLength: number;
  customTextActive: string | null;
  isInstantDeathEnabled: boolean;
  isKeyboardVisualEnabled: boolean;
  isPunctuationEnabled: boolean;
  isResultRecordingEnabled: boolean;
  medleyCollectionsActive: string[];
  medleyItemCount: number;
  medleyPunctuationFrequency: number;
  mistakeHighlightStyle: PracticeMistakeHighlightStyle;
  quoteLength: IQuoteLength;
  soundVolume: number;
  textCasing: PracticeTextCasing;
  textType: PracticeTextType;
}
export type PracticeSettingNameBasic = keyof IPracticeSettingsConfigBasic;

export interface IPracticeSettingsConfigAdvanced {
  medleyCollectionsCustom: IPracticeMedleyCollection[];
  customTexts: IPracticeCustomText[];
}
export type PracticeSettingNameAdvanced = keyof IPracticeSettingsConfigAdvanced;

export type PracticeSettingName =
  | PracticeSettingNameBasic
  | PracticeSettingNameAdvanced;

export type PracticeTextType = 'quote' | 'medley' | 'custom';
export type PracticeTextCasing = 'dynamic' | 'force-lower' | 'force-upper';
export type PracticeCaretStyle = 'bar' | 'block' | 'underline' | 'outline';
export type PracticeMistakeHighlightStyle = 'background' | 'text';
export interface IQuoteLength {
  min: number;
  max: number;
}
export interface IPracticeMedleyCollection {
  name: string;
  items: string[];
}
export interface IPracticeCustomText {
  name: string;
  content: string;
}

export interface IPracticeRoundResult {
  netWordsPerMinute: number;
  accuracyPercentage: number;
  timeElapsed: Time;
}

```

### Constants

```ts
export declare const DEFAULT_PRACTICE_SETTINGS: IPracticeSettings;
export declare const PRACTICE_SETTINGS_QUOTE_LENGTH_LIMITS: NumberRange; // [1, 250]
export declare const PRACTICE_SETTINGS_COUNTDOWN_LENGTH_LIMITS: NumberRange; // [0, 5]
export declare const PRACTICE_SETTINGS_SOUND_VOLUME_LIMITS: NumberRange; // [0, 1]
export declare const PRACTICE_SETTINGS_CARET_DELAY_LIMITS: NumberRange; // [0, 1]
export declare const PRACTICE_SETTINGS_MEDLEY_ITEM_COUNT_LIMITS: NumberRange; // [1, 100]
export declare const PRACTICE_SETTINGS_MEDLEY_PUNCTUATION_FREQUENCY_LIMITS: NumberRange; // [0, 1]
```

### Functions

```ts
/**
 * Creates a complete-depth copy of `entity`. Objects with function or symbol properties won't be copied correctly.
 * @param entity The entity to copy.
 * @returns A complete-depth copy of `entity`.
 */
export declare function createDeepCopy(entity: any): any;

/**
 * Checks if `obj` has a property with a key of value `key`.
 * @param obj The object to check.
 * @param key The key to search for.
 */
export declare function doesObjectHaveKey<O>(
  obj: O,
  key: PropertyKey,
): key is keyof O;

export declare function convertNumberRangeToQuoteLength(
  range: NumberRange,
): IQuoteLength;

export declare function convertQuoteLengthToNumberRange(
  ql: IQuoteLength,
): NumberRange;
```
