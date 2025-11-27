<template>
    <div class="bg-white p-6 md:p-10 rounded-xl md:shadow-xl max-w-7xl mx-auto min-h-full">
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
                    {{ category.name === 'All' ? (currentLocale === 'km' ? 'ទាំងអស់' : 'All') : category.name }} ({{ category.count }})
                </button>
            </div>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            <div 
                v-for="project in filteredProjects" 
                :key="project.id" 
                class="project-card flex flex-col items-center p-3 md:p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03] cursor-pointer"
                :class="getBgColor(project.id)">
                <div 
                    class="w-full h-20 md:h-28 rounded-xl flex items-center justify-center mb-3 md:mb-4"
                    :style="{ backgroundColor: project.color }">  
                 <img :src="project.imagePath" 
                        :alt="project.name + ' Logo'"
                        class="h-25 w-25 md:h-75 md:w-75 object-contain" 
                        loading="lazy"
                    />
                </div>
                <h3 class="text-sm md:text-base font-bold text-gray-800 text-center truncate w-full">
                    {{ project.name }}
                </h3>
                <p class="text-xs text-gray-500 text-center">
                    {{ project.category }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'; 
// 1. Import projectsData ពី file ត្រឹមត្រូវ
import { projectsData } from '@/stores/projectsData.js'; 
// 2. Import Language Store (ដែលមាន logic របស់ t, state, setLanguage)
import { useLanguageStore } from '@/stores/languageStore.js'; 

// 3. ទាញយក logic ពី Language Store (នេះដោះស្រាយ t.value Error)
const { t, state, setLanguage } = useLanguageStore(); 

// 4. កំណត់អថេរសម្រាប់ប្រើក្នុង template/logic
const currentLocale = computed(() => state.currentLang); // សម្រាប់បកប្រែ 'All'
const projectsList = projectsData; 
const activeCategory = ref('All'); 

// 5. Computed Properties និង Methods
const setActiveCategory = (categoryName) => { 
    activeCategory.value = categoryName; 
};

const categories = computed(() => {
    // ត្រូវតែប្រើ projectsList (ដែលបានកំណត់នៅខាងលើ)
    const categoryNames = projectsList.map(p => p.category);
    const counts = categoryNames.reduce((acc, category) => { 
        acc[category] = (acc[category] || 0) + 1; 
        return acc; 
    }, {});
    const uniqueCategories = Object.keys(counts).map(name => ({ name: name, count: counts[name] }));
    uniqueCategories.unshift({ name: 'All', count: projectsList.length });
    return uniqueCategories;
});

const filteredProjects = computed(() => {
    if (activeCategory.value === 'All') return projectsList;
    return projectsList.filter(project => project.category === activeCategory.value);
});

// 6. មុខងារ getBgColor
const getBgColor = (projectId) => {
    // ត្រូវស្វែងរក project ក្នុង projectsList ដើម្បីយក color
    const project = projectsList.find(p => p.id === projectId);
    if (project && project.color) {
        // ត្រឡប់ Tailwind classes ដែលធ្វើឲ្យ card មើលទៅស្អាត (ដោយមិនប្រើ project.color ផ្ទាល់ជា class name)
        return 'bg-white shadow-md hover:shadow-xl'; 
    }
    return 'bg-gray-50';
};
</script>