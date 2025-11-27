<script setup></script>
<template>

    <div class="flex min-h-screen">
        
        <div class="sidebar-bg w-64 p-6 flex-col justify-between hidden md:flex fixed h-full">
            <div>
                <div class="flex justify-center mb-6">
                    <img src="https://i.imgur.com/W2h6d81.png" alt="Profile" class="profile-img w-28 h-28">
                </div>
                <div class="text-center mb-10 text-white">
                    <h1 class="text-xl font-bold mb-1">BOY NHOR</h1>
                    <p class="text-sm text-gray-300">UX Designer</p>
                </div>
                <nav class="space-y-2">
                    <a href="#" class="nav-item active flex items-center rounded-r-lg"><span class="mr-2">&#9881;</span> ABOUT</a>
                    <a href="#" class="nav-item flex items-center rounded-r-lg"><span class="mr-2">&#127891;</span> EDUCATION</a>
                    <a href="#" class="nav-item flex items-center rounded-r-lg"><span class="mr-2">&#9999;</span> SKILLS</a>
                    <a href="#" class="nav-item flex items-center rounded-r-lg"><span class="mr-2">&#128188;</span> EXPERIENCE</a>
                    <a href="#" class="nav-item flex items-center rounded-r-lg"><span class="mr-2">&#128247;</span> PORTFOLIO</a>
                    <a href="#" class="nav-item flex items-center rounded-r-lg"><span class="mr-2">&#127942;</span> ACHIEVEMENTS</a>
                    <a href="#" class="nav-item flex items-center rounded-r-lg"><span class="mr-2">&#127925;</span> HOBBIES</a>
                    <a href="#" class="nav-item flex items-center rounded-r-lg"><span class="mr-2">&#128222;</span> CONTACT</a>
                </nav>
            </div>

            <div class="text-center text-xs text-gray-500">
                <div class="mb-4">
                    <div class="relative inline-block text-left w-full">
                        <button type="button" class="lang-switch justify-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            <span class="mr-2">🇰🇭</span> Khmer <span class="ml-2">&#9662;</span>
                        </button>
                        
                        <div class="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 hidden">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                <span class="mr-2">🇰🇭</span> Khmer
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                <span class="mr-2">🇺🇸</span> English
                            </a>
                        </div>
                    </div>
                </div>
                <p class="text-gray-400">Designed by <span class="text-white font-semibold">Ryan Balieiro</span></p>
            </div>
        </div>
        
        <div class="flex-1 md:ml-64 p-4 md:p-12 pb-20 md:pb-12">
            <div class="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg md:shadow-xl">
                
                <div class="md:hidden flex flex-col items-center mb-8 pt-4">
                    <div class="flex justify-end w-full mb-4">
                        <div class="flex space-x-2 text-xl font-bold opacity-70">
                            <a href="#" class="text-gray-400 hover:text-gray-800">🇰🇭</a>
                            <a href="#" class="text-gray-800">🇺🇸</a> </div>
                    </div>
                    
                    <img src="https://i.imgur.com/W2h6d81.png" alt="Profile" class="profile-img mb-4">
                    <h1 class="text-xl font-bold mb-1 text-gray-800">BOY NHOR</h1>
                    <p class="text-sm text-gray-500">Designer de UX</p>
                </div>
                
                <h1 class="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 text-center md:text-left">
                    <span class="highlight-text">BIENVENIDO!</span>
                </h1>

                <div class="text-gray-600 space-y-2 mb-8 text-sm flex flex-col items-center md:items-start">
                    <span class="flex items-center">
                        <span class="mr-2">&#128205;</span> California EE.UU.
                    </span>
                    <span class="flex items-center">
                        <span class="mr-2">&#9993;</span> roy.sheppard@genius.com
                    </span>
                    <span class="flex items-center">
                        <span class="mr-2">&#128222;</span> (123) 456-7890
                    </span>
                </div>

                <p class="text-gray-700 mb-4 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    ខ្ញុំជាអ្នករចនាម៉ូត UX រយៈពេល **៨ ឆ្នាំ** ដែលបង្កើតចំណុចប្រទាក់ដែលងាយស្រួលប្រើ...
                </p>
                <p class="text-gray-700 mb-10 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    ខ្ញុំជឿថាការរចនាដ៏ល្អគួរតែបង្កើនជីវិតមនុស្ស ជួយពួកគេក្នុងការរុករកបច្ចេកវិទ្យាយ៉ាងងាយស្រួល...
                </p>

                <div class="flex space-x-4 justify-center md:justify-start">
                    <a href="#" class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-lg">
                        <span class="text-gray-700">&#128248;</span>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-lg">
                        <span class="text-gray-700">&#128100;</span>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-lg">
                        <span class="text-gray-700">&#128196;</span>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-lg">
                        <span class="text-gray-700">&#128073;</span>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="mobile-footer-bg fixed bottom-0 left-0 right-0 h-16 flex justify-around items-center shadow-lg md:hidden z-10">
            <a href="#" class="flex flex-col items-center text-xs p-1">
                <span class="footer-icon-active text-xl mb-0.5">&#9881;</span>
                <span class="footer-icon-active">អំពីខ្ញុំ</span>
            </a>
            <a href="#" class="flex flex-col items-center text-xs p-1">
                <span class="footer-icon text-xl mb-0.5">&#128196;</span>
                <span class="footer-icon">ប្រវត្តិរូប</span>
            </a>
            <a href="#" class="flex flex-col items-center text-xs p-1">
                <span class="footer-icon text-xl mb-0.5">&#128247;</span>
                <span class="footer-icon">បណ្ណឯកសារ</span>
            </a>
            <a href="#" class="flex flex-col items-center text-xs p-1">
                <span class="footer-icon text-xl mb-0.5">&#128222;</span>
                <span class="footer-icon">ទាក់ទង</span>
            </a>
            <a href="#" class="flex flex-col items-center text-xs p-1">
                <span class="footer-icon text-xl mb-0.5">&#127942;</span>
                <span class="footer-icon">សមិទ្ធិផល</span>
            </a>
        </div>
        
    </div>
</template>
<style scoped></style>
