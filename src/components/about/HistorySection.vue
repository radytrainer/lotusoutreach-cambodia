<template>
    <section class="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <!-- Hero Section -->
        <div class="relative max-w-6xl mx-auto flex flex-col items-center md:flex-col lg:flex-row lg:items-start mb-20">
            <div class="relative mb-16 lg:mr-8 lg:mb-0">
                <div
                    class="w-100 sm:w-80 md:w-[500px] aspect-square rounded-full border-[6px] sm:border-[10px] md:border-[10px] border-blue-500 overflow-hidden mx-auto">
                    <img src="/image/About/History.jpg" alt="History"
                        class="w-full h-full object-cover object-center" />
                </div>
                <div class="absolute -top-4 -left-3 bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center">
                    <p class="text-2xl font-bold">{{ yearsOfExperience }}</p>
                    <p class="text-sm">Years of</p>
                    <p class="text-sm">Experience</p>
                </div>
                <div class="absolute -bottom-10 -left-2 bg-blue-700 text-white p-4 rounded-lg shadow-lg w-64 text-sm">
                    <p>
                        We continue to provide education scholarships, skills training,
                        counseling, and safe environments for vulnerable women and
                        children in Cambodian communities.
                    </p>
                </div>
            </div>

            <div class="text-left">
                <h1 class="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left md:text-5xl">History</h1>
                <h2 class="text-2xl font-semibold text-gray-600 mb-6 text-center md:text-left md:text-3xl">
                    | Donate For Girls Around The World!
                </h2>
                <p v-for="(paragraph, index) in content" :key="index"
                 class="text-base sm:text-lg md:text-2xl lg:text-base text-gray-700 mb-4 text-center md:text-left" v-html="paragraph" />
            </div>
        </div>

        <!-- Timeline -->
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">LOCAM through the years</h2>
                <p class="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg md:text-2xl lg:text-base">
                    Lotus Outreach Cambodia is part of the global Lotus Outreach network, dedicated to improving the
                    lives of vulnerable women and children through education, training, and care.
                </p>
            </div>

            <!-- Timeline Navigation -->
            <div class="relative">
                <button @click="scrollTimeline('left')"
                    class="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors">
                    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button @click="scrollTimeline('right')"
                    class="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors">
                    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Desktop Timeline (from lg and up) -->
                <div ref="timelineContainer" class="hidden lg:block overflow-x-hidden mx-12 snap-x snap-mandatory">
                    <div class="flex items-center justify-between min-w-max px-8">
                        <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>

                        <div v-for="(event, index) in timelineEvents" :key="index"
                            class="relative flex flex-col items-center mx-8 min-w-[320px] snap-center">
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10">
                            </div>

                            <div class="flex flex-col items-center" :class="index % 2 === 0 ? 'mb-32' : 'mt-32'">
                                <div class="w-36 sm:w-44 md:w-44 h-36 sm:h-44 md:h-44 rounded-full overflow-hidden 
                         border-4 border-blue-500 mb-6 shadow-lg">
                                    <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
                                </div>
                                <div class="text-3xl font-bold text-gray-900 mb-3">{{ event.year }}</div>
                                <div class="text-center max-w-sm" :class="{ 'mb-12': index === 0 || index === 2 }">
                                    <p class="text-gray-700 leading-relaxed text-sm">
                                        <span v-if="event.highlight" class="text-blue-500 font-semibold">
                                            {{ event.highlight }}
                                        </span>
                                        {{ event.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile + Tablet Timeline -->
                <div class="block lg:hidden relative px-4 py-8">
                    <div ref="mobileTimeline"
                        class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full no-scrollbar">
                        <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                        <div v-for="(event, index) in timelineEvents" :key="'mobile-' + index"
                            class="relative flex flex-col items-center w-[calc(100vw-4rem)] shrink-0 snap-center mx-8">
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md z-10">
                            </div>
                            <div class="flex flex-col items-center">
                                <div
                                    class="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mb-4 shadow-md md:w-[400px] md:h-[400px]">
                                    <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
                                </div>
                                <div class="text-2xl font-bold text-gray-900 mb-2 mt-8">{{ event.year }}</div>
                                <p class="text-gray-700 leading-relaxed text-sm max-w-xs text-center text-base sm:text-lg md:text-2xl lg:text-base">
                                    <span v-if="event.highlight" class="text-blue-500 font-semibold ">
                                        {{ event.highlight }}
                                    </span>
                                    {{ event.description }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Navigation Buttons -->
                    <button @click="scrollMobile('left')"
                        class="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors">
                        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button @click="scrollMobile('right')"
                        class="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors">
                        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
    yearsOfExperience: {
        type: Number,
        default: 31
    },
    content: {
        type: Array,
        default: () => [
            'Lotus Outreach Cambodia (LOCAM) is part of the global Lotus Outreach network, which is dedicated to improving the lives of vulnerable women and children through education, training, and care.',
            'The Lotus Outreach story began in 1993 in Himachal Pradesh, India, when Khyentse Norbu, a renowned Buddhist teacher and filmmaker, launched an education sponsorship program for Tibetan refugee children.'
        ]
    }
})

const mobileTimeline = ref(null)
const timelineContainer = ref(null)
const currentIndex = ref(0)

const timelineEvents = ref([
    {
        year: '1993',
        title: 'The Beginning in India',
        highlight: 'Launch of the first ',
        description: 'story began in 1993 in Himachal Pradesh, India, when Khyentse Norbu, a renowned Buddhist teacher and filmmaker, launched an education sponsorship program for Tibetan refugee children.',
        image: '/image/About/1993.jpg'
    },
    {
        year: '2002',
        title: 'Global Expansion',
        highlight: 'Incorporation of ',
        description: 'Lotus Outreach International officially incorporated in California, with programs expanding across Asia and Latin America.',
        image: '/image/About/2002.jpg'
    },
    {
        year: '2005',
        title: 'First Steps in Cambodia',
        highlight: 'Lotus Outreach’s ',
        description: 'engagement in Cambodia began in 2005 through partnerships with local NGOs to support vulnerable girls and women, even before a formal office was established.',
        image: '/image/About/2005.jpg',
    },
    {
        year: '2006',
        title: 'GATE Program Launch',
        highlight: 'Our flagship Girls’',
        description: 'Access to Education (GATE) program, launched in 2006 with a local partner, helps underprivileged girls complete school through scholarships, supplies, bicycles, tuition aid, living support, and life skills training.',
        image: '/image/About/2006.jpg'
    },
    {
        year: '2007',
        title: 'Life-Changing Encounter',
        highlight: 'Inauguration of the ',
        description: 'In late 2007, Lotus Outreach established a local office in Phnom Penh, ',
        image: '/image/About/2007.jpg',
    },
    {
        year: '2008',
        title: 'Official Registration',
        highlight: 'For the first time, ',
        description: 'LOCAM officially registered with the Ministry of Interior on January 21, establishing permanent presence in Cambodia.',
        image: '/image/About/2008.png'
    }
])

const scrollMobile = (direction) => {
    if (mobileTimeline.value) {
        const container = mobileTimeline.value
        const eventWidth = container.querySelector('div').offsetWidth + 64
        const maxIndex = timelineEvents.value.length - 1

        currentIndex.value += direction === 'left' ? -1 : 1
        if (currentIndex.value < 0) currentIndex.value = 0
        if (currentIndex.value > maxIndex) currentIndex.value = maxIndex

        container.scrollTo({
            left: currentIndex.value * eventWidth,
            behavior: 'smooth'
        })
    }
}

const scrollTimeline = (direction) => {
    if (timelineContainer.value) {
        const container = timelineContainer.value
        const scrollStep = container.clientWidth * 0.8
        const currentScroll = container.scrollLeft
        const maxScroll = container.scrollWidth - container.clientWidth

        const newScroll = direction === 'left'
            ? Math.max(0, currentScroll - scrollStep)
            : Math.min(maxScroll, currentScroll + scrollStep)

        container.scrollTo({
            left: newScroll,
            behavior: 'smooth'
        })
    }
}

onMounted(() => {
    nextTick(() => {
        if (timelineContainer.value) {
            const container = timelineContainer.value
            const containerWidth = container.scrollWidth
            const viewportWidth = container.clientWidth
            container.scrollLeft = (containerWidth - viewportWidth) / 2
        }
    })
})
</script>

<style>
.snap-x {
    scroll-snap-type: x mandatory;
}

.snap-center {
    scroll-snap-align: center;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>