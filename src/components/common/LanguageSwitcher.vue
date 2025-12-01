<template>
  <div class="relative inline-flex space-x-3 text-left w-full justify-end">
    <button
      @click="store.setLanguage('km')"
      :class="[
        'flex items-center space-x-2 text-sm transition duration-200',
        store.state.currentLang === 'kh'
          ? 'text-blue-500 font-bold border-b-2 border-purple-500'
          : 'text-red-600'
      ]"
    >
    	<img :src="kh" alt="Khmer Flag" class="w-5 h-5 object-cover shadow-sm" />
       </button>
    <button
      @click="store.setLanguage('en')"
      :class="[
        'flex items-center space-x-2 text-sm transition duration-200',
        store.state.currentLang === 'en'
          ? 'text-blue-500 font-bold border-b-2 border-purple-500'
          : 'text-red-600'
      ]"
    >
    	<img :src="en" alt="English Flag" class="w-5 h-5 object-cover shadow-sm" />
    </button>
  </div>
</template>

<script>
import { useLanguageStore } from '@/stores/languageStore';
import en from '@/imgs/flags/en.png';
import kh from '@/imgs/flags/kh.png';

export default {
    setup() {
        const store = useLanguageStore();
        return { store, en,kh };
    }
};
</script>