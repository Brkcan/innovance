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
        'Click To Form' : 'Click To Form',
        'First name': 'First name',
        'Last name' : 'Last name',
        'Username' : 'Username',
        'City' : 'City',
        'State': 'State',
        'Zip': 'Zip',
        'Looks good': 'Looks good',
        'Agree to terms and conditions': 'Agree to terms and conditions',

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
        'Logout' : 'Cıkıs',
        'Click To Form' : 'Forma Tıkla',
        'First name': 'İsim',
        'Last name' : 'Soyisim',
        'Username' : 'Kullanıcı Adı',
        'City' : 'Sehir',
        'State': 'Sokak',
        'Zip' : 'Posta Kodu',
        'Looks good': 'İyi Gözüküyor',
        'Agree to terms and conditions': 'Şartları ve Koşulları Kabul Ediyorum',
        
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
