<template>
    <div class="sidebar-bg  w-64 p-6 flex-col justify-between hidden md:flex fixed h-full z-20">
        <div class="h-screen overflow-y-auto">
            <div class="flex justify-center mb-6">
                <img src="@/imgs/cover.jpg" alt="Profile" class="profile-img w-48 h-48">
            </div>
            <div class="text-center mb-10 text-white">
                <h1 class="text-xl font-bold mb-1">BOY NHOR</h1>
                <p class="text-sm text-gray-300">{{ t.profile_job_title }}</p>
            </div>
            <nav class="space-y-2 scroll-smooth md:scroll-auto max-h-screen overflow-y-auto" >
                <router-link to="/" class="nav-item flex items-center rounded-r-lg">
                    <span class="mr-2">&#9881;</span> {{ t.nav_about }}
                </router-link>
                <router-link to="/education" class="nav-item flex items-center rounded-r-lg">
                    <span class="mr-2">&#127891;</span> {{ t.nav_education }}
                </router-link>
                <router-link to="/skills" class="nav-item flex items-center rounded-r-lg">
                    <span class="mr-2">&#9999;</span> {{ t.nav_skills }}
                </router-link>
                <router-link to="/experience" class="nav-item flex items-center rounded-r-lg">
                    <span class="mr-2">&#128188;</span> {{ t.nav_experience }}
                </router-link>
                <router-link to="/portfolio" class="nav-item flex items-center rounded-r-lg">
                    <span class="mr-2">&#128247;</span> {{ t.nav_portfolio }}
                </router-link>
                <router-link to="/hobbies" class="nav-item flex items-center rounded-r-lg">
                    <span class="mr-2">&#128247;</span> {{ t.nav_hobbies }}
                </router-link>
            </nav>
        </div>
        <div class="text-center text-xs text-gray-500">
            <div class="mb-4">
                <LanguageSwitcher />
            </div>
            <p class="text-gray-400">Download <a href="#" class="text-white font-semibold">Course Code</a></p>
        </div>
    </div>
</template>

<script setup>
import { useLanguageStore } from '@/stores/languageStore';
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue';

const { t } = useLanguageStore(); 
</script>

<style scoped>
.sidebar-bg {
    background-color: #2c213a;
}
.profile-img {
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #4a3666;
}
.nav-item {
    color: #fafafa;
    padding: 0.5rem 1rem;
    transition: all 0.2s;
}
.nav-item.router-link-active {
    color: white;
    background-color: #4a3666;
    border-left: 4px solid #9333ea;
    font-weight: bold;
}
</style>