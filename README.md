##############Stucture
src/
├── components/
│   ├── layout/
│   │   ├── BaseLayout.vue    // រុំ Sidebar, Main Content, និង Footer Mobile
│   │   ├── AppSidebar.vue    // Sidebar ខាងឆ្វេង (Desktop Nav, Profile, Language Switch)
│   │   └── MobileFooterNav.vue // Footer Navigation (សម្រាប់ Mobile)
│   ├── common/
│   │   └── LanguageSwitcher.vue // ធាតុប្តូរភាសា
│   └── resume/
│       ├── ResumeHeader.vue  // ចំណងជើង "BIENVENIDO!" និងព័ត៌មានទំនាក់ទំនង
│       ├── ResumeSection.vue // Component ទូទៅសម្រាប់ចំណងជើងផ្នែកនីមួយៗ (Education, Skills)
│       └── SocialLinks.vue   // Icon ទំនាក់ទំនងសង្គម
├── router/
│   ├── index.js 
├── stores/
│   ├── languageStore.js      lif store trenslate
├── views/
│   ├── AboutPage.vue         // ទំព័រមេ (បង្ហាញ ResumeHeader និងពាក្យណែនាំខ្លួន)
│   ├── EducationPage.vue     // ទំព័រ Education
│   └── ContactPage.vue       // ទំព័រ Contact
└── App.vue                   // Component មេ (Vue Router នឹងបង្ហាញ views នៅទីនេះ)

# vue-idg-template

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
​//git add .
//git commit -m "សារដែលពិពណ៌នាអំពីការផ្លាស់ប្តូរ"
//git push 