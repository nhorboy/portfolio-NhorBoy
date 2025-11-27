<template>
    <!-- របាររុករកផ្នែកខាងក្រោម (Mobile Footer Navigation) - បង្ហាញតែលើអេក្រង់តូច -->
    <div class="mobile-footer-bg fixed bottom-0 left-0 right-0 h-16 flex justify-around items-center shadow-2xl md:hidden z-30">
        <!-- ម៉ឺនុយរុករក Footer - ប្រើ Icon Placeholder -->
        <router-link to="/" class="flex flex-col items-center text-xs p-1">
            <span class="footer-icon-active text-xl mb-0.5">&#9881;</span>
            <span class="footer-icon-active">{{ t.nav_about }}</span>
        </router-link>
        <router-link to="/education" class="flex flex-col items-center text-xs p-1">
            <span class="footer-icon text-xl mb-0.5">&#127891;</span>
            <span class="footer-icon">{{ t.nav_education }}</span>
        </router-link>
        <router-link to="/skills" class="flex flex-col items-center text-xs p-1">
            <span class="footer-icon text-xl mb-0.5">&#9999;</span>
            <span class="footer-icon">{{ t.nav_skills }}</span>
        </router-link>
        <router-link to="/experience" class="flex flex-col items-center text-xs p-1">
            <span class="footer-icon text-xl mb-0.5">&#128188;</span>
            <span class="footer-icon">{{ t.nav_experience }}</span>
        </router-link>
        <router-link to="/contact" class="flex flex-col items-center text-xs p-1">
            <span class="footer-icon text-xl mb-0.5">&#128222;</span>
            <span class="footer-icon">{{ t.nav_contact }}</span>
        </router-link>
    </div>
</template>

<script setup>
import { useLanguageStore } from '@/stores/languageStore';

const { t } = useLanguageStore();
</script>

<style scoped>
.mobile-footer-bg {
    background-color: #4a3666
}
.footer-icon-active {
    color: #f3baba; 
}
.footer-icon {
    color: #ffffff;
}
</style>