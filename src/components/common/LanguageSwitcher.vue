<template>
    <div class="relative inline-flex space-x-3 text-left w-full justify-center">
        <button
            @click="store.setLanguage('km')"
            :class="[
                'text-sm transition duration-200',
                store.state.currentLang === 'km'
                    ? 'text-blue-500 font-bold border-b-2 border-purple-500'
                    : 'text-red-600'
            ]"
        >
            KH
        </button>
        <button
            @click="store.setLanguage('en')"
            :class="[
                'text-sm transition duration-200',
                store.state.currentLang === 'en'
                    ? 'text-blue-500 font-bold border-b-2 border-purple-500'
                    : 'text-red-600'
            ]"
        >
            EN
        </button>
    </div>
</template>

<script>
import { useLanguageStore } from '@/stores/languageStore';

export default {
    setup() {
        const store = useLanguageStore();
        return { store };
    }
};
</script>