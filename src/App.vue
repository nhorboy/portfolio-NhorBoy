<!-- App.vue -->
<template>
  <div class="flex min-h-screen main-content-bg">
    <AppSidebar />
    <div class="flex-1 md:ml-64"> 
        <div class="p-4 md:p-12 pb-20 md:pb-12">
            <router-view></router-view> 
        </div>
    </div>
    <!-- 3. Mobile Footer Navigation -->
    <MobileFooterNav />
  </div>
</template>
<script setup>
import AppSidebar from '@/components/layout/AppSidebar.vue';
import MobileFooterNav from '@/components/layout/MobileFooterNav.vue';
</script>

<style>
.main-content-bg { background-color: #f7f7fa; }
.profile-img {
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #4a3666; 
}
.highlight-text {
    color: #9333ea; 
}
</style>