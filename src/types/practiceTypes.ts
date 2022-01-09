import { Time } from './utilityTypes';

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
