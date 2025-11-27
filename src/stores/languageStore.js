import HobbiesView from '@/views/HobbiesView.vue';
import { reactive, computed } from 'vue';
const translations = {
    km: {
        // Layout/Navigation
        nav_about: "អំពីខ្ញុំ",
        nav_education: "ការសិក្សា",
        nav_skills: "ជំនាញ",
        nav_experience: "បទពិសោធន៍",
        nav_portfolio: "ស្នាដៃ",
        nav_hobbies: "ចំណង់ចំណូលចិត្ត",
        nav_contact: "ទាក់ទង",
        
        // About View Content
        about_title: "សូមស្វាគមន៍មកកាន់",
        about_title_highlight: "ប្រវត្តិរូបសង្ខេបរបស់ខ្ញុំ!",
        profile_job_title: "UX/UI Designer And Full Stack Developer",        
        contact_location: "កាលីហ្វ័រញ៉ា ស.រ.អា.",
        about_p1: "អ្នករចនាប្រព័ន្ធឌីជីថលប្រកបដោយភាពច្នៃប្រឌិត ដែលមានចំណេះដឹងរឹងមាំទាំងផ្នែក UX/UI Design និង Graphic Design (Poster, Banner)។ ខ្ញុំមានគោលដៅក្នុងការបង្កើនបទពិសោធន៍អ្នកប្រើប្រាស់ (User Experience) តាមរយៈការរចនាដ៏ទាក់ទាញ។ ",
        about_p2: "ខ្ញុំក៏មានជំនាញក្នុង Web Development ផងដែរ ដែលអនុញ្ញាតឱ្យខ្ញុំសហការយ៉ាងរលូនជាមួយក្រុមអភិវឌ្ឍន៍ និងធានាថារាល់គំនិតរចនាត្រូវបានអនុវត្តយ៉ាងត្រឹមត្រូវទៅលើគេហទំព័រជាក់ស្តែង។",
        // Education View Content
        
        edu_title: "ប្រវត្តការសិក្សា",
        edu_subtitle: "ប្រវត្តិសិក្សា និងស្នាដៃ",
        edu_school2: [
            {
                id: 1,
                edu_school1: "អនុបណ្ឌិតរដ្ឋបាលសាធារណៈ",
                location: "រាជធានីភ្នំពេញ",
                period: "2023 - 2024",
                description: "បានបញ្ចប់កម្មវិធីថ្នាក់អនុបណ្ឌិតរដ្ឋបាលសាធារណៈនៅទីក្រុងភ្នំពេញ (2023-2024)។",
                color: "#1d4ed8", 
                icon: '&#9999;'
            },
            {
                id: 2,
                edu_school1: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
                location: "រាជធានីភ្នំពេញ",
                period: "2013-2017",
                description: "បានបញ្ចប់ដោយជោគជ័យនូវ បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ (Bachelor of Computer Science) រយៈពេលបួនឆ្នាំ ដោយផ្តោតលើគោលការណ៍គ្រឹះ និងវិធីសាស្រ្តកុំព្យូទ័រទំនើប។ កម្មវិធីសិក្សានេះបានផ្តល់ចំណេះដឹងទូលំទូលាយ ដោយបានសម្រេចនូវការបញ្ចប់ដោយជោគជ័យនូវរាល់មុខវិជ្ជា និងគម្រោងដែលតម្រូវទាំងអស់។",
                color: "#10b981", 
                icon: '&#128187;'
            }
        ],

        //Experience View Content
        exp_title: "បទពិសោធន៍",
        exp_subtitle: "ប្រវត្តិសិក្សា និងស្នាដៃ",
        exp: [
            {
                id: 1,
                exp_1: "មន្រ្តីព័ត៌មានវិទ្យា (IT Officer)",
                period: "2019 - បច្ចុប្បន្ន, មជ្ឈមណ្ឌលជាតិគាំពារមាតា និងទារក",
                exp_2: "ភារកិច្ច និងទំនួលខុសត្រូវ៖",
                location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
                description: "រចនារូបភាព និងរៀបចំប្រព័ន្ធគ្រប់គ្រង ព្រមទាំងថែទាំដោះស្រាយបញ្ហានានានៃប្រព័ន្ធកុំព្យូទ័រ និងហេដ្ឋារចនាសម្ព័ន្ធបណ្ដាញរបស់មជ្ឈមណ្ឌល។ ធានាឱ្យបាននូវប្រតិបត្តិការរលូន និងសុវត្ថិភាពនៃទិន្នន័យសំខាន់ៗ និងទ្រព្យសម្បត្តិបច្ចេកវិទ្យាព័ត៌មាន។ ផ្តល់ការគាំទ្រផ្នែកបច្ចេកទេសគ្រប់ជ្រុងជ្រោយដល់បុគ្គលិកទាំងអស់។ ធ្វើបច្ចុប្បន្នភាព និងថែរក្សាគេហទំព័ររបស់មជ្ឈមណ្ឌល និង/ឬប្រព័ន្ធទិន្នន័យមូលដ្ឋានផ្ទៃក្នុង។",
                color: "#b7caffff", 
                icon: '&#128187;'
            },
            {
                id: 2,
                exp_1: "ក្រុមការងារ (Team Work)",
                period: "2015-2019, Appill Technology",
                exp_2: "ភារកិច្ច និងទំនួលខុសត្រូវ៖",
                location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
                description: "ចូលរួមក្នុងការអភិវឌ្ឍកម្មវិធីកុំព្យូទ័ររបស់ក្រុមហ៊ុន។ សហការប្រកបដោយប្រសិទ្ធភាពនៅក្នុងក្រុម ដើម្បីសម្រេចបាននូវគោលដៅនៃគម្រោងបច្ចេកវិទ្យា។ ចូលរួមក្នុងការសិក្សា និងការអនុវត្តបច្ចេកវិទ្យាថ្មីៗ និងកំពុងរីកចម្រើន។",
                color: "#b7caffff", 
                icon: '&#128187;'
            }
        ],
        // Hobbies
        Hob_title: "ចំណង់ចំណូលចិត្ត",
        Hob_subtitle: "ចំណង់ចំណូលចិត្តពេលទំនេរ (Hobbies in Free Time)",
        Hob: [
            {
                id: 1,
                Hob_title: "ចំណង់ចំណូលចិត្ត៖",
                Hob_description: "ដំណើរកំសាន្តជុំគ្រួសារ ឬរលេងកីឡានៅចុងសប្តាហ៍ដើម្បីជួយពង្រឹងសុខភាព និងបង្កើតមិត្តភាពថ្មីៗ។",                
            },
            {
                id: 2,
                Hob_title: "រៀនអ្វីដែលថ្មីៗ៖",
                Hob_description: "អានសៀវភៅ ឬអត្ថបទ អំពីបច្ចេកវិទ្យា និងការអភិវឌ្ឍន៍ថ្មីៗ។",                
            },
            {
                id: 3,
                Hob_title: "អភិវឌ្ឍខ្លួនបន្ថែម៖",
                Hob_description: "រៀនរូបភាព វីដេអូស YouTube និងពេលវេលាសម្រាប់វគ្គសិក្សាអនឡាញ ឬវគ្គបណ្តុះបណ្តាលដើម្បីបង្កើនជំនាញ និងចំណេះដឹងរបស់ខ្លួន។",                
            },
        ],
        // skills View Content
        skills_title: "ជំនាញបច្ចេកទេស",
        skills_subtitle: "ការបង្ហាញពីជំនាញបច្ចេកទេស និងឧបករណ៍ដែលខ្ញុំមានជំនាញល្អ។", 

    },
    en: {
        // Layout/Navigation
        nav_about: "ABOUT",
        nav_education: "EDUCATION",
        nav_skills: "SKILLS",
        nav_experience: "EXPERIENCE",
        nav_portfolio: "PORTFOLIO",
        nav_contact: "CONTACT",
        nav_hobbies: "HOBBIES",

        // About View Content
        about_title: "WELCOME TO",
        about_title_highlight: "MY RESUME!",
        profile_job_title: "UX/UI Designer And Full Stack Developer",   
        contact_location: "California, U.S.A.",
        about_p1: "I am a UX/UI Designer with 8 years of experience building intuitive and engaging interfaces that drive user participation.",
        about_p2: "I believe good design should enhance people's lives, helping them navigate technology effortlessly, which is paramount in my work.",

        // Education View Content
        edu_title: "EDUCATION BACKGROUND",
        edu_subtitle: "A glimpse into my academic trajectory and accomplishments.",
        edu_school2: [
            {
                id: 1,
                edu_school1: "Master of Public Administration",
                location: "Phnom Penh",
                period: "2023 - 2024",
                description: "Completed a Master of Public Administration program in Phnom Penh (2023-2024).",
                color: "#1d4ed8", 
                icon: '&#9999;'
            },
            {
                id: 2,
                edu_school1: "Bachelor of Computer Science",
                location: "Phnom Penh",
                period: "2013-2017",
                description: "I successfully completed my Bachelor of Computer Science degree over four years, focusing on foundational principles and modern computing methodologies. This program provided comprehensive knowledge, culminating in the successful completion of all required coursework and projects.",
                color: "#10b981", 
                icon: '&#128187;'
            }
        ],
        //Experience View Content
        exp_title: "Experience",
        exp_subtitle: "ប្រវត្តិការងាដែលបានសម្រេច",
        exp: [
            {
                id: 1,
                exp_1: "IT Officer",
                period: "2023 - Present, National Maternal and Child Health Center",
                exp_2: "Responsibilities and Achievements:",
                location: "Phnom Penh, Cambodia",
                description: "Managed, maintained, and troubleshooted the institution's computer systems and network infrastructure.Ensured the smooth operation and security of crucial data and IT assets.Provided comprehensive technical support to all staff members.Updated and maintained the center's website and/or internal database systems.",
                color: "#1d4ed8", 
                icon: '&#9999;'
            },
            {
                id: 2,
                exp_1: "Team Work",
                period: "2013-2017, Appill Technology",
                exp_2: "Responsibilities and Achievements:",
                location: "Phnom Penh, Cambodia",
                description: "Participated in the development or testing of the company's specific software applications.Collaborated effectively within a team to meet technological project goals.Engaged in learning and implementing new and emerging technologies.",
                color: "#0199feff", 
                icon: '&#128187;'
            }
        ],
    }
};

// Global State
const state = reactive({
    currentLang: 'km', // Default language is Khmer
});


const getTranslation = computed(() => {
    return translations[state.currentLang];
});

// Actions
const setLanguage = (lang) => {
    if (translations[lang]) {
        state.currentLang = lang;
        console.log(`Language switched to: ${lang}`);
    }
};

export const useLanguageStore = () => ({
    state,
    t: getTranslation, // t is translation function
    setLanguage,
});