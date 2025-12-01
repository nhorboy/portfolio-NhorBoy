<template>
  <div v-if="loading" class="text-gray-600">Loading...</div>
  <div v-if="about" class="bg-white p-6 md:p-10 rounded-xl md:shadow-xl max-w-7xl mx-auto min-h-full"> 
    <!-- 1. Header Mobile (Profile and Language Switch) -->
    
    <div class="md:hidden flex flex-col items-center mb-8 pt-4">
      <div class="text-left flex justify-end w-full mb-4">
        <LanguageSwitcher isMobile /> 
      </div>
     
      <img src="@/imgs/cover.jpg" alt="Profile" class="profile-img mb-2 w-150 h-150"> 
      
      <h1 class="text-xl font-bold mb-1 text-gray-800">
        {{ store.state.currentLang === 'km' ? about.name_kh : about.name_en }}
      </h1>
      <p class="text-sm text-gray-500"> 
        {{ store.state.currentLang === 'km' ? about.profile_job_title_kh : about.profile_job_title_en }}
      </p>
    </div>
    
    <h4 class="text-3xl md:text-3xl font-extrabold mb-6 text-gray-800 text-center md:text-left">
      <span class="highlight-text"> 
        {{ store.state.currentLang === 'km' ? about.title_kh : about.title_en }}
      </span>
    </h4>

    <div class="text-gray-700 mb-4 leading-relaxed p-2">
      {{ store.state.currentLang === 'km' ? about.address_kh : about.address_en }}
    </div>

    <p class="text-gray-700 mb-4 leading-relaxed bg-gray-50 p-4 rounded-lg">
      {{ store.state.currentLang === 'km' ? about.des_kh : about.des_en }}
    </p>
    <p class="text-gray-700 mb-4 leading-relaxed bg-gray-50 p-4 rounded-lg">
      {{ store.state.currentLang === 'km' ? about.more_des_kh : about.more_des_en }}
    </p>

    <figure class="max-w-screen-md">
    </figure>
    
    <div class="bg-cyan-100 p-8">
      <div class="max-w-2xl flex flex-wrap gap-3">
        <a href="tel:++85570834493" class="flex items-center space-x-2 p-3 rounded-lg bg-green-500 text-white hover:bg-gray-600 transition duration-300">
          
            {{ store.state.currentLang === 'km' ? 'ខលទៅ' : 'Call Us' }}
        
        </a>

        <a href="mailto:nharboy99@gmail.com" class="flex items-center space-x-2 p-3 rounded-lg bg-red-500 text-white hover:bg-indigo-600 transition duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
          <span class="font-medium">
            {{ store.state.currentLang === 'km' ? 'ផ្ញើអ៊ីមែល' : 'Send Email' }}
          </span>
        </a>
        
        <a href="https://www.facebook.com/ahdeang.jiji" target="_blank" class="flex items-center space-x-2 p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.515 1.51-3.88 3.778-3.88 1.094 0 2.238.195 2.238.195v2.46h-1.241c-1.205 0-1.58.75-1.58 1.517V12h3.06l-.493 3.731h-2.567v7.02C18.337 21.492 22 17.702 22 12z"/></svg>
          <span class="font-medium">Facebook</span>
        </a>        
        <a href="https://t.me/NhorBoy007" target="_blank" class="flex items-center space-x-2 p-3 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition duration-300">         
          <span class="font-medium">Telegram</span>
        </a>
      </div>
    </div>
  </div> 
</template>
<script setup>
  import { ref, onMounted } from 'vue'; // Import Composition API functions
  import { useLanguageStore } from '@/stores/languageStore'; 
  import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue'; 
  import axios from 'axios';
  import defaultAvatar from '@/imgs/cover.jpg'; // use directly

  // 1. Composition API Setup
  const store = useLanguageStore(); 
  const loading = ref(false); 
  const about = ref(null); // use ref for API

  // 2. Methods (Function)
  async function fetchAbout() {
      loading.value = true;
      try {
          const res = await axios.get(
              `https://script.google.com/macros/s/AKfycbxLL7k1W7VW7u440xtnpU3MDmCso9KgAQKCXZ8T-pKiGjndlYpoBTFHClfctA9TYYDziA/exec`
          );
          
          if (res.data && res.data.length > 0) {
              about.value = res.data[0]; 
          } else {
              about.value = null;
          }
      } catch (err) {
          console.error(err);
      }
      loading.value = false;
  }

  // 3. Lifecycle Hook hook)
  onMounted(() => {
      fetchAbout();
  });
</script>