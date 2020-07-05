import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        'Login Page' : 'Login Page',
        'password mismatch' : 'password mismatch',
        'Login' : 'Login',
        'Username' : 'Username',
        'Display Name' : 'Display Name',
        'Password' : 'Password',
        'Password Repeat': 'Password Repeat',
        'Logout' : 'Logout',
      }
    },
    tr: {
      translations: {
        'Login Page' : 'Giris Sayfası',
        'password mismatch' : 'Aynı sifreyi giriniz.',
        'Login' : 'Giris',
        'Username' : 'Kullanıcı Adı',
        'Display Name' : 'Tercih edilen isim',
        'Password' : 'Sifre',
        'Password Repeat' : 'Sifreyi Tekrarla',
        'Logout' : 'Cıkıs'
      }
    }
  },
  fallbackLng: 'tr',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation:{
    escapeValue: false,
    formatSeparator: ','
  },
  react: {
    wait: true
  }
});
export default i18n;
