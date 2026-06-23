<template>
  <div class="absolute -left-24 -top-8">
    <div
      class="w-[480px] h-[471px] rounded-full bg-[#324E7B]/20 blur-[62px] shadow-[0_4px_62px_50px_rgba(50,78,123,0.2)]"
    ></div>
  </div>
  <Header />

  <!-- Hero Section -->
  <section class="container mt-20 lg:mt-[123px] px-4 lg:px-0">
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="poppins-bold text-black text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[72px] mb-4">
        Frequently Asked <span class="text-[#324E7B]">Questions</span>
      </h1>
      <p class="poppins-medium text-base text-[#747474]">
        Find answers to common questions about our resume builder and how it can help you land your dream job.
      </p>
    </div>
  </section>

  <!-- FAQ Accordion Section -->
  <section class="container mt-16 lg:mt-[120px] px-4 lg:px-0 mb-24 lg:mb-[150px]">
    <div class="max-w-3xl mx-auto">
      <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
        <button
          @click="toggleFaq(index)"
          class="w-full text-left bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
        >
          <h3 class="poppins-semibold text-lg text-black">{{ faq.question }}</h3>
          <svg
            class="w-6 h-6 text-[#324E7B] transition-transform duration-300"
            :class="{ 'rotate-180': openFaq === index }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          v-if="openFaq === index"
          class="bg-white border-t border-gray-100 px-6 pb-6 rounded-b-2xl shadow-sm"
        >
          <p class="poppins-medium text-base text-[#747474] leading-relaxed mt-4">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="container mb-24 lg:mb-[150px] px-4 lg:px-0">
    <div class="bg-[#F8F9FB] rounded-3xl p-8 lg:p-16 text-center">
      <h2 class="poppins-bold text-2xl lg:text-3xl text-black mb-4">
        Still Have <span class="text-[#324E7B]">Questions?</span>
      </h2>
      <p class="poppins-medium text-base text-[#747474] max-w-2xl mx-auto mb-8">
        If you couldn't find an answer to your question, feel free to reach out and we'll get back to you as soon as possible.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <ButtonStyle link="/CreateCV" type="default">Get Started Now</ButtonStyle>
        <ButtonStyle link="/" type="white">Go Home</ButtonStyle>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import ButtonStyle from "@/components/ButtonStyle.vue";

export default {
  name: "FAQView",
  components: {
    Header,
    ButtonStyle,
  },
  data() {
    return {
      openFaq: null,
      faqs: [
        {
          question: "How much does the resume builder cost?",
          answer: "Our resume builder is free to start! You can create, edit, and preview your resume at no cost. We offer premium templates and features for those who want to stand out even more.",
        },
        {
          question: "Can I download my resume as a PDF?",
          answer: "Yes! You can download your resume as a high-quality PDF file ready to send to employers. All formatting is preserved perfectly.",
        },
        {
          question: "Are your templates ATS-friendly?",
          answer: "Absolutely! All our templates are designed to be ATS (Applicant Tracking System) friendly, ensuring your resume gets past the initial screening and is seen by human recruiters.",
        },
        {
          question: "Do I need design experience to use this?",
          answer: "Not at all! Our builder is designed for everyone. Just fill in your information, choose a template, and we'll handle the rest. It's that simple!",
        },
        {
          question: "Can I edit my resume after I've saved it?",
          answer: "Yes! You can come back and edit your resume at any time. Your progress is automatically saved as you work.",
        },
        {
          question: "Do you offer customer support?",
          answer: "Absolutely! Our support team is here to help. Whether you have questions about the builder or need help with your resume, we're just a message away.",
        },
        {
          question: "How many resumes can I create?",
          answer: "You can create as many resumes as you need! It's a great feature if you're applying to different types of jobs and want to tailor your resume accordingly.",
        },
        {
          question: "Is my data safe and secure?",
          answer: "Your security is our priority! We use industry-standard security measures to protect your data. We never share your personal information with third parties without your permission.",
        },
      ],
    };
  },
  methods: {
    toggleFaq(index) {
      this.openFaq = this.openFaq === index ? null : index;
    },
  },
};
</script>
