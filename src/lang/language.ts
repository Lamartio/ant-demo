import messages from '@intlify/unplugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'

export const SUPPORTED_LANGUAGES = [
  {
    key: 'en',
    name: 'English',
    icon: 'https://flagcdn.com/gb.svg',
  },
  {
    key: 'nl',
    name: 'Dutch',
    icon: 'https://flagcdn.com/nl.svg',
  },
  {
    key: 'de',
    name: 'German',
    icon: 'https://flagcdn.com/de.svg',
  },
]

export const i18n = createI18n({
  warnHtmlMessage: false,
  fallbackWarn: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: SUPPORTED_LANGUAGES.map(language => language.key),
  messages,
})
