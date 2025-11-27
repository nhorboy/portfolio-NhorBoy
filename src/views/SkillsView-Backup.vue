
<template>
    <!-- Card Container -->
    <div class="bg-white p-6 md:p-10 rounded-xl md:shadow-xl max-w-7xl mx-auto min-h-full">
        <!-- Header Section -->
        <header class="mb-10 md:mb-12">
            <h1 class="text-4xl md:text-5xl font-extrabold text-[#2c213a] mb-2">
                MY <span class="text-[#9333ea]">PORTFOLIO</span>
            </h1>
            <p class="text-gray-500 text-lg">
                Explore a selection of my recent projects and creative works.
            </p>
        </header>
        <!-- Category Filter Section -->
        <div class="mb-10 md:mb-12 border-b border-gray-200">
            <div class="flex space-x-2 md:space-x-6 overflow-x-auto pb-4">
                <button
                    v-for="category in categories" 
                    :key="category.name"
                    @click="setActiveCategory(category.name)"
                    :class="[
                        'py-2 px-5 md:px-7 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200',
                        activeCategory === category.name
                            ? 'bg-[#9333ea] text-white shadow-lg shadow-[#9333ea]/50'
                            : 'text-gray-600 hover:text-[#9333ea] hover:bg-gray-100'
                    ]"
                >
                    {{ category.name }} ({{ category.count }})
                </button>
            </div>
        </div>

        <!-- Portfolio Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            <div 
                v-for="project in filteredProjects" 
                :key="project.id" 
                class="project-card flex flex-col items-center p-3 md:p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03] cursor-pointer"
                :class="getBgColor(project.id)"
            >
                <!-- Project Icon/Image Placeholder -->
                <div 
                    class="w-full h-20 md:h-28 rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-xl"
                    :style="{ backgroundColor: project.color }"
                >
                    <span class="text-4xl md:text-6xl" v-html="project.icon"></span>
                </div>

                <!-- Project Details -->
                <h3 class="text-sm md:text-base font-bold text-gray-800 text-center truncate w-full">
                    {{ project.name }}
                </h3>
                <p class="text-xs text-gray-500 text-center">
                    {{ project.category }}
                </p>
            </div>
        </div>
        <div class="h-16 md:hidden"></div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
const { t } = useLanguageStore();

const projectsData = [
    { id: 1, name: 'BrainPulse', category: 'Productivity', icon: '&#129505;', color: '#f7913d', iconColor: 'text-white' },
    { id: 2, name: 'Stackers', category: 'Productivity', icon: '&#9763;', color: '#d0c3f5', iconColor: 'text-[#4c4270]' },
    { id: 3, name: 'Bird Tracker', category: 'Productivity', icon: '&#128038;', color: '#6a389a', iconColor: 'text-white' },
    { id: 4, name: 'Snappy', category: 'Utilities', icon: '&#128247;', color: '#f7e366', iconColor: 'text-gray-800' },
    { id: 5, name: 'Hippo', category: 'Productivity', icon: '&#129435;', color: '#38b05b', iconColor: 'text-white' },
    { id: 6, name: 'Sweet Scoops', category: 'Utilities', icon: '&#127848;', color: '#f788b9', iconColor: 'text-white' },
    { id: 7, name: 'RockVerse', category: 'Social', icon: '&#129304;', color: '#3f3f46', iconColor: 'text-white' },
    { id: 8, name: 'LiveScore Pro', category: 'Utilities', icon: '&#9913;', color: '#b0d95d', iconColor: 'text-[#4c4270]' },
    { id: 9, name: 'Paper Plane', category: 'Social', icon: '&#9992;', color: '#a0c7f2', iconColor: 'text-white' },
    { id: 10, name: 'Chess Academy', category: 'Productivity', icon: '&#9813;', color: '#c4e38c', iconColor: 'text-[#4c4270]' },
    { id: 11, name: 'Money Saver', category: 'Utilities', icon: '&#128184;', color: '#4a74f4', iconColor: 'text-white' },
    { id: 12, name: 'Mailbox Pro', category: 'Productivity', icon: '&#9993;', color: '#8b5cf6', iconColor: 'text-white' },
];

// កំណត់ Category មេសម្រាប់ Filter
const allCategories = projectsData.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
}, {});

const categories = computed(() => {
    const list = [{ name: 'All', count: projectsData.length }];
    for (const name in allCategories) {
        list.push({ name: name, count: allCategories[name] });
    }
    return list;
});

// State សម្រាប់តាមដាន Category ដែលបានជ្រើសរើស
const activeCategory = ref('All');

// Method សម្រាប់ប្តូរ Category
const setActiveCategory = (categoryName) => {
    activeCategory.value = categoryName;
};

// Computed property សម្រាប់ Filter គម្រោង
const filteredProjects = computed(() => {
    if (activeCategory.value === 'All') {
        return projectsData;
    }
    return projectsData.filter(project => project.category === activeCategory.value);
});

// Function សម្រាប់កំណត់ពណ៌ផ្ទៃខាងក្រោយ Card (ស្រដៀងនឹងរូបភាព)
const getBgColor = (id) => {
    // សម្រាប់បង្កើតលំនាំពណ៌ផ្ទៃខាងក្រោយស្រាល
    const colors = ['bg-gray-50', 'bg-purple-50', 'bg-green-50', 'bg-yellow-50', 'bg-pink-50'];
    return colors[id % colors.length];
};
</script>

<style scoped>
/* រចនាបថបន្ថែម */
.project-card {
    background-color: var(--card-bg, #fcfcfc);
    border: 1px solid #f0f0f0;
}
.project-card:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}
</style>