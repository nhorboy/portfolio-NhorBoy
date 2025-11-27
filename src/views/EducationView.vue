<!-- views/EducationView.vue -->
<template>
    <div class="bg-white p-6 md:p-10 rounded-xl md:shadow-xl max-w-7xl mx-auto min-h-full">        
        <!-- Header Section -->
        <header class="mb-10 md:mb-12">
            <h1 class="text-3xl md:text-4xl font-extrabold text-[#2c213a] mb-2">
                <span class="text-[#9333ea]">{{ t.edu_title.split(' ')[0] }}</span> {{ t.edu_title.split(' ').slice(1).join(' ') }}
            </h1>
            <p class="text-gray-500 text-lg">
                {{ t.edu_subtitle }}
            </p>
        </header>
        <!-- Education Timeline -->
        <div class="relative timeline-container">            
            <!-- Vertical Line (Timeline Axis) -->
            <!-- បង្ហាញតែលើ Desktop (md:) ដើម្បីរក្សារចនាបថ Timeline -->
            <div class="hidden md:block absolute left-4 w-1 bg-gray-200 h-full rounded-full timeline-line"></div>
            <!-- Education Items -->
            <div v-for="(item, index) in t.edu_school2" :key="item.id" class="flex mb-12">
                <!-- Timeline Dot & Icon (សម្រាប់ Desktop) -->
                <div class="hidden md:flex flex-col items-center w-8 mr-6 z-10">
                    <!-- Icon Circle -->
                    <div 
                        class="w-10 h-10 rounded-full flex items-center justify-center p-1 shadow-lg"
                        :style="{ backgroundColor: item.color }"
                    >
                        <span class="text-xl" v-html="item.icon"></span>
                    </div>
                </div>
                <!-- Content -->
                <div class="flex-1 timeline-content p-4 md:p-0">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                        <!-- Left: Title, Institution, Location -->
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-800 flex items-center">
                                <!-- Mobile Icon (បង្ហាញតែ Mobile) -->
                                <span 
                                    class="md:hidden w-8 h-8 rounded-full flex items-center justify-center mr-3 p-1"
                                    :style="{ backgroundColor: item.color }"
                                >
                                    <span class="text-lg" v-html="item.icon"></span>
                                </span>
                                {{ item.edu_school1 }}
                            </h3>
                            <p class="text-sm text-[#9333ea] mt-1"># {{ item.location }}</p>
                        </div>
                        <!-- Right: Period Tag -->
                        <div class="mt-2 md:mt-0 md:ml-4 flex-shrink-0">
                            <span class="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                                {{ item.period }}
                            </span>
                        </div>
                    </div>
                    <!-- Description -->
                    <p class="text-gray-700 mt-3 md:mt-1 leading-relaxed text-sm">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>

        <!-- សម្រាប់ Mobile Footer មិនឲ្យបាំង Content -->
        <div class="h-16 md:hidden"></div>
    </div>
</template>

<script setup>
    import { useLanguageStore } from '@/stores/languageStore';
    const { t } = useLanguageStore(); 
</script>

<style scoped>
/* ពណ៌សម្រាប់ Highlight */
.text-\[\#9333ea\] {
    color: #9333ea;
}

/* សម្រាប់ធានាថាបន្ទាត់ Timeline លាតពេញនៅ Desktop */
.timeline-container {
    padding-left: 20px; /* ទុកចន្លោះសម្រាប់បន្ទាត់បញ្ឈរ */
}

/* សម្រាប់លុប Padding លើ Mobile */
@media (max-width: 767px) {
    .timeline-container {
        padding-left: 0;
    }
}
</style>