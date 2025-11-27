<template>
  <div class="bg-white p-6 md:p-10 rounded-xl md:shadow-xl max-w-7xl mx-auto min-h-full">   
  <div class="relative timeline-container">
    <header class="mb-10 md:mb-12">
        <h5 class="text-xl md:text-4xl font-extrabold text-[#2c213a] mb-2">
            <span class="text-[#9333ea]">{{ t.Hob_title.split(' ')[0] }}</span> {{ t.Hob_title.split(' ').slice(1).join(' ') }}
        </h5>
        <p class="text-gray-500 text-ml">
            {{ t.Hob_subtitle }}
        </p>
    </header>          
    <!-- Education Items -->
    <div v-for="(item, index) in t.Hob" :key="item.id" class="flex mb-12">
      <!-- Timeline Dot & Icon -->
      <!-- Content -->
      <div class="flex-1 timeline-content p-4 md:p-0">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <!-- Left: Title, Institution, Location -->
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-800 flex items-center">
              <!-- Mobile Icon (បង្ហាញតែ Mobile) -->
              <p class="text-gray-500 text-lg">
                {{ item.Hob_title }}
              </p>
            </h3>           
          </div>
        </div>
        <!-- Description -->
        <p class="text-gray-700 mt-3 md:mt-1 leading-relaxed text-sm">
            {{ item.Hob_description }}
        </p>
      </div>
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