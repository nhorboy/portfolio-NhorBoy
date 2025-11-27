<template>
  <div class="bg-white p-6 md:p-10 rounded-xl md:shadow-xl max-w-7xl mx-auto min-h-full"> 
    <!-- 1. Header Mobile (Profile និង Language Switch) -->
    <div class="md:hidden flex flex-col items-center mb-8 pt-4">
      <div class="text-left flex justify-end w-full mb-4">
        <LanguageSwitcher isMobile />
      </div>
      <img src="@/imgs/cover.jpg" alt="Profile" class="profile-img mb-2 w-150 h-150">
      <h1 class="text-xl font-bold mb-1 text-gray-800">BOY NHOR</h1>
      <p class="text-sm text-gray-500">{{ t.profile_job_title }}</p>
    </div>
    <!-- 2. Title Section -->
    <h1 class="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 text-center md:text-left">
        {{ t.about_title }} <span class="highlight-text">{{ t.about_title_highlight }}</span>
    </h1>
    <!-- 4. About Text -->
    <p class="text-gray-700 mb-4 leading-relaxed bg-gray-50 p-4 rounded-lg">
      {{ t.about_p1 }}
    </p>
    <p class="text-gray-700 mb-4 leading-relaxed bg-gray-50 p-4 rounded-lg">
      {{ t.about_p2 }}
    </p>
    <figure class="max-w-screen-md">
      <div class="flex items-center space-x-1 mb-4">
          <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
          <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
          <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
          <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
          <svg class="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
      </div>
    </figure>
    <div class="bg-cyan-100 p-6">
      <div class="max-w-4xl mx-auto flex flex-wrap gap-4">
        <a href="tel:++85570834493" class="flex items-center space-x-2 p-3 rounded-lg bg-green-500 text-white hover:bg-gray-600 transition duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 3.697a1 1 0 01-.29.813l-2.074 1.95a1 1 0 00-.214.545c.01 1.792 1.057 3.492 2.766 5.174a1 1 0 001.077.218l2.073-1.95a1 1 0 01.812-.29l3.698.74a1 1 0 01.836.986V18a1 1 0 01-1 1h-2.153a1 1 0 01-.986-.836l-.74-3.697a1 1 0 01.29-.813l2.074-1.95a1 1 0 00.214-.545c-.01-1.792-1.057-3.492-2.766-5.174a1 1 0 00-1.077-.218l-2.073 1.95a1 1 0 01-.812.29l-3.698-.74A1 1 0 013 4.153V2z"/></svg>
          <span class="font-medium">Call Us</span>
        </a>
        <a href="mailto:nharboy99@gmail.com" class="flex items-center space-x-2 p-3 rounded-lg bg-red-500 text-white hover:bg-indigo-600 transition duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
          <span class="font-medium">Send Email</span>
        </a>

        <a href="https://www.facebook.com/ahdeang.jiji" target="_blank" class="flex items-center space-x-2 p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.515 1.51-3.88 3.778-3.88 1.094 0 2.238.195 2.238.195v2.46h-1.241c-1.205 0-1.58.75-1.58 1.517V12h3.06l-.493 3.731h-2.567v7.02C18.337 21.492 22 17.702 22 12z"/></svg>
          <span class="font-medium">Facebook</span>
        </a>

        <a href="https://t.me/NhorBoy007" target="_blank" class="flex items-center space-x-2 p-3 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.41 4.79l-16 6.22a.962.962 0 00-.73 1.25l2.45 7.64c.2.62.98.81 1.54.34l3.52-3.14c.2-.18.47-.23.72-.11l4.13 2.53c.53.33 1.2-.1.97-.73l2.84-14.7a1 1 0 00-.81-1.18zM8.36 14.13l-1.92 1.71L6 17.76l-.4-1.25 1.92-1.71c.28-.25.29-.69.02-1.02a.86.86 0 00-1.12-.04L4.68 15.6l-1.45-4.52 14.73-5.74-3.72 11.5c-.2.63-.98.81-1.54.34L8.36 14.13z"/></svg>
          <span class="font-medium">Telegram</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguageStore } from '@/stores/languageStore';
import SocialLinks from '@/components/common/SocialLinks.vue';
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue';

const { t } = useLanguageStore(); 
</script>