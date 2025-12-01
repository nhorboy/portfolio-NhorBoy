<template>
    <div class="bg-gray-100 min-h-screen p-8 md:p-16 flex items-center justify-center rounded-xl shadow-2xl">
        <div class="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-100">
        
            <div class="text-gryay-100">
                <h3 class="text-3xl md:text-4xl font-extrabold mb-6">{{ t.contact_title }}</h3>
                
                <p class="text-gray-500 mb-12 max-w-lg leading-relaxed">
                {{ t.contact_subtitle }}
                </p>
                
                <div class="space-y-6">
                
                <div class="flex items-start space-x-3 text-gray-400">
                    <svg class="w-6 h-6 text-indigo-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-1 0H7m0 0h-2m10 0v-2m1 2v-2m-3 2v-2m-1 2v-2m4-14h.01M17 6h.01M17 10h.01M17 14h.01M7 6h.01M7 10h.01M7 14h.01M7 18h.01"></path>
                    </svg>
                    <div>
                    <p class="font-semibold">{{ t.contact_location }}</p>
                    <p>64A, ST 6008</p>
                    </div>
                </div>

                <div class="flex items-center space-x-3 text-gray-400">
                    <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.006 11.006 0 007.606 7.606l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <p>+885 70-834-493</p>
                </div>

                <div class="flex items-center space-x-3 text-gray-400">
                    <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"></path>
                    </svg>
                    <p>nharboy99@gmail.com</p>
                </div>
                </div>
            </div>

            <div class="p-6 md:p-10 bg-gray-100 rounded-xl shadow-2xl">
                <form class="space-y-6">
                
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label for="first-name" class="block text-sm font-medium text-gray-400">{{ t.first_name }}</label>
                        <input type="text" id="first-name" class="mt-1 block w-full bg-gray-20 border-gray-600 rounded-md shadow-sm p-3 text-white focus:ring-indigo-500 focus:border-indigo-500 transition duration-150">
                        </div>
                        <div>
                        <label for="last-name" class="block text-sm font-medium text-gray-400">{{ t.last_name }}</label>
                        <input type="text" id="last-name" class="mt-1 block w-full bg-gray-20 border-gray-600 rounded-md shadow-sm p-3 text-white focus:ring-indigo-500 focus:border-indigo-500 transition duration-150">
                        </div>
                    </div>
                    
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-400">{{ t.email }}</label>
                        <input type="email" id="email" class="mt-1 block w-full bg-gray-20 border-gray-600 rounded-md shadow-sm p-3 text-white focus:ring-indigo-500 focus:border-indigo-500 transition duration-150">
                    </div>
                    
                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-400">{{ t.phone_number }}</label>
                        <input type="tel" id="phone" class="mt-1 block w-full bg-gray-20 border-gray-600 rounded-md shadow-sm p-3 text-white focus:ring-indigo-500 focus:border-indigo-500 transition duration-150">
                    </div>
                    
                    <div class="">
                        <label for="message" class="block text-sm font-medium text-gray-400">{{ t.message }}</label>
                        <textarea id="message" rows="5" class="mt-1 block w-full bg-gray-20 border-gray-600 rounded-md border-solid shadow-sm p-3 text-white focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"></textarea>
                    </div>
                    
                    <div class="text-right pt-2 ">
                        <button type="submit" class=" inline-flex justify-center py-3 px-6 shadow-2xl border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ">
                        {{ t.send_message }}
                        </button>
                    </div>
                
                </form>
            </div>
        
        </div>
    </div>
</template>
<script setup>
    import { useLanguageStore } from '@/stores/languageStore';
    const { t } = useLanguageStore();
</script>