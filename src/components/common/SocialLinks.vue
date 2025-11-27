<template>
    <div class="flex space-x-4 justify-center md:justify-start mt-8">
        <a href="#" class="social-icon hover:shadow-lg">
            <span class="text-gray-700">&#128248;</span> </a>
        <a href="#" class="social-icon hover:shadow-lg">
            <span class="text-gray-700">&#128100;</span> </a>
        <a href="#" class="social-icon hover:shadow-lg">
            <span class="text-gray-700">&#128196;</span> </a>
        <a href="#" class="social-icon hover:shadow-lg">
            <span class="text-gray-700">&#128073;</span> </a>
    </div>
</template>

<script setup>
// មិនត្រូវការ logic ទេ គ្រាន់តែរចនា
</script>

<style scoped>
.social-icon {
    width: 40px; 
    height: 40px; 
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1); /* shadow ស្រាល */
    transition: all 0.2s;
    font-size: 1.25rem;
}
.social-icon:hover {
    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
}
</style>