import { AppLanguage } from "@src/models";
import { t } from "i18next";

// src/i18n/languages.ts
export const LANGUAGES = [
  {
    code: AppLanguage.vi,
    labelKey: 'language.vietnamese',
    locale: 'vi-VN',
    flag: '🇻🇳',
  },
  {
    code: AppLanguage.en,
    labelKey: 'language.english',
    locale: 'en-US',
    flag: '🇺🇸',
  },
];
