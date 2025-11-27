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
                        activeCategory === category.name ? 'bg-[#9333ea] text-white shadow-lg shadow-[#9333ea]/50':'text-gray-600 hover:text-[#9333ea] hover:bg-gray-100']">
                    {{ category.name === 'All' ? (currentLocale === 'km' ? 'ទាំងអស់' : 'All') : category.name }} ({{ category.count }})
                </button>
            </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            
            <div v-for="project in filteredProjects" 
                :key="project.id" 
                @click="showProjectDetail(project)"
                class="project-card group block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                
                <div class="w-full aspect-square flex items-center justify-center p-4" :style="{ backgroundColor: project.color || '#f3f4f6' }">
                    <img :src="project.imagePath" 
                        :alt="project.name + ' Logo'"
                        class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                        loading="lazy"
                    />
                </div>
                
                <div class="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 class="p-3 md:p-4 text-sm md:text-base font-bold text-white w-full bg-black bg-opacity-50">
                        {{ project.name }}
                    </h3>
                </div>
            </div>
        </div> 
    </div>

    <div v-if="selectedProject" 
        @click.self="selectedProject = null"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 backdrop-blur-sm transition-opacity duration-300">
        
        <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative animate-scale-in">
            <button @click="selectedProject = null" 
                class="absolute top-3 right-3 z-10 p-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors shadow-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div class="p-4 md:p-6 flex flex-col items-center">
                <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">{{ selectedProject.name }}</h3>
                <img :src="selectedProject.imagePath" 
                    :alt="selectedProject.name"
                    class="max-w-full max-h-[70vh] object-contain rounded-lg border border-gray-200"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'; 
    import { portfolioStore } from '@/stores/portfolioStore.js'; 
    import { useLanguageStore } from '@/stores/languageStore.js'; 
    
    // Logic របស់ភាសា និង Store
    const { t, state, setLanguage } = useLanguageStore(); 
    const currentLocale = computed(() => state.currentLang); 
    const projectsList = portfolioStore; 
    
    // Logic របស់ប្រភេទ
    const activeCategory = ref('All'); 
    const setActiveCategory = (categoryName) => { activeCategory.value = categoryName; };

    // Logic ថ្មីសម្រាប់ Modal/Lightbox
    const selectedProject = ref(null); // រក្សាទុកគម្រោងដែលបានជ្រើសរើស
    const showProjectDetail = (project) => {
        selectedProject.value = project;
    };
    
    // Logic របស់ Categories និង Filtered Projects (រក្សាទុកដដែល)
    const categories = computed(() => {
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
    
    // មុខងារនេះលែងត្រូវការសម្រាប់រចនាបថថ្មី ព្រោះយើងប្រើ CSS រួចហើយ
    const getBgColor = (projectId) => {
        // ... (អាចលុបចោលបាន ឬរក្សាទុកប្រសិនបើអ្នកចង់ប្រើវាសម្រាប់អ្វីផ្សេងទៀត)
        return ''; 
    };
</script>

<style>
/* អាចបន្ថែម keyframe សម្រាប់ animation បើក modal */
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}
</style>