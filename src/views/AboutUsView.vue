<template>
  <div class="absolute -left-24 -top-8">
    <div
      class="w-[480px] h-[471px] rounded-full bg-[#324E7B]/20 blur-[62px] shadow-[0_4px_62px_50px_rgba(50,78,123,0.2)]"
    ></div>
  </div>
  <Header />

  <!-- Hero Section -->
  <section class="container mt-20 lg:mt-[123px] px-4 lg:px-0">
    <div
      class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-[107px]"
    >
      <div class="flex flex-col gap-y-9 max-w-2xl text-center lg:text-left">
        <div class="flex flex-col gap-y-2">
          <h1
            class="poppins-bold text-black text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[72px]"
          >
            We're on a Mission to Help You <span class="text-[#324E7B]">Stand Out</span>
          </h1>
          <p class="poppins-medium text-base text-[#747474] mt-4">
            Founded to empower job seekers worldwide, our tool combines beautiful design with
            intuitive functionality to help you craft the perfect resume and land your dream job.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
          <ButtonStyle link="/CreateCV" type="default">Build Your Resume Now</ButtonStyle>
          <ButtonStyle link="/Templates" type="white">Explore Templates</ButtonStyle>
        </div>
      </div>
      <img
        src="@/assets/AboutUs.svg"
        alt="About us illustration"
        class="w-[480px] max-w-md lg:max-w-none order-first lg:order-last"
      />
    </div>
  </section>

  <!-- Company Story Section -->
  <section class="container mt-24 lg:mt-[150px] px-4 lg:px-0">
    <div class="flex flex-col lg:flex-row gap-12 lg:gap-[100px] items-center">
      <div class="flex-1">
        <h2 class="poppins-bold text-2xl lg:text-3xl text-black mb-4">Our Story</h2>
        <div class="space-y-4 poppins-medium text-base text-[#747474] leading-relaxed">
          <p>
            It all started in 2023 when our founder, a hiring manager, realized how many brilliant
            candidates were being overlooked because of poorly formatted resumes.
          </p>
          <p>
            We set out to create a tool that would make professional resume creation accessible to
            everyone, regardless of design or technical skills.
          </p>
          <p>
            Today, thousands of users have successfully used our platform to create stunning resumes
            and unlock exciting career opportunities.
          </p>
        </div>
      </div>
      <div class="flex-1 bg-[#F8F9FB] rounded-2xl p-8 lg:p-12">
        <div class="flex items-start gap-4">
          <div
            class="w-12 h-12 bg-[#324E7B]/10 rounded-full flex items-center justify-center shrink-0"
          >
            <span class="poppins-bold text-[#324E7B] text-2xl">10k+</span>
          </div>
          <div>
            <h3 class="poppins-semibold text-lg text-black">Resumes Created</h3>
            <p class="poppins-medium text-[#747474] text-sm">And counting every day</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mission & Vision Section -->
  <section class="container mt-24 lg:mt-[150px] px-4 lg:px-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div class="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 shadow-sm">
        <div class="w-14 h-14 bg-[#324E7B]/10 rounded-xl flex items-center justify-center mb-6">
          <svg class="w-7 h-7 text-[#324E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <h2 class="poppins-bold text-xl lg:text-2xl text-black mb-4">Our Mission</h2>
        <p class="poppins-medium text-base text-[#747474] leading-relaxed">
          To empower every job seeker with the tools they need to present their best professional
          selves and achieve their career goals.
        </p>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 shadow-sm">
        <div class="w-14 h-14 bg-[#324E7B]/10 rounded-xl flex items-center justify-center mb-6">
          <svg class="w-7 h-7 text-[#324E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        </div>
        <h2 class="poppins-bold text-xl lg:text-2xl text-black mb-4">Our Vision</h2>
        <p class="poppins-medium text-base text-[#747474] leading-relaxed">
          To become the global standard for professional resume creation, helping millions of people
          unlock their career potential.
        </p>
      </div>
    </div>
  </section>

  <!-- Core Values Section -->
  <section class="container mt-24 lg:mt-[150px] px-4 lg:px-0">
    <div class="text-center mb-12 lg:mb-16">
      <h2 class="poppins-bold text-2xl lg:text-3xl text-black mb-4">Our Core Values</h2>
      <p class="poppins-medium text-base text-[#747474] max-w-2xl mx-auto">
        The principles that guide everything we do and how we serve our users.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <div
        class="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
      >
        <h3 class="poppins-semibold text-lg text-black mb-3">User First</h3>
        <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
          We design everything with our users' needs and success as our top priority.
        </p>
      </div>
      <div
        class="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
      >
        <h3 class="poppins-semibold text-lg text-black mb-3">Quality</h3>
        <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
          We're committed to delivering exceptional tools and templates that meet professional
          standards.
        </p>
      </div>
      <div
        class="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
      >
        <h3 class="poppins-semibold text-lg text-black mb-3">Innovation</h3>
        <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
          We continuously improve and innovate to provide the best resume building experience.
        </p>
      </div>
      <div
        class="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
      >
        <h3 class="poppins-semibold text-lg text-black mb-3">Accessibility</h3>
        <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
          We believe professional resume tools should be accessible to everyone, everywhere.
        </p>
      </div>
      <div
        class="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
      >
        <h3 class="poppins-semibold text-lg text-black mb-3">Trust</h3>
        <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
          We respect your privacy and security, and never share your personal information.
        </p>
      </div>
      <div
        class="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
      >
        <h3 class="poppins-semibold text-lg text-black mb-3">Support</h3>
        <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
          We're here to help you every step of the way with responsive customer support.
        </p>
      </div>
    </div>
  </section>

  <!-- Team Members Section -->
  <section class="container mt-24 lg:mt-[150px] px-4 lg:px-0">
    <div class="text-center mb-12 lg:mb-16">
      <h2 class="poppins-bold text-2xl lg:text-3xl text-black mb-4">Meet Our Team</h2>
      <p class="poppins-medium text-base text-[#747474] max-w-2xl mx-auto">
        A passionate group of designers, developers, and career experts dedicated to your success.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      <div class="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
        <div
          class="w-24 h-24 mx-auto mb-4 bg-[#F8F9FB] rounded-full flex items-center justify-center"
        >
          <span class="poppins-bold text-2xl text-[#324E7B]">A</span>
        </div>
        <h3 class="poppins-semibold text-lg text-black mb-1">Alex Morgan</h3>
        <p class="poppins-medium text-sm text-[#747474] mb-3">CEO & Founder</p>
        <div class="flex justify-center gap-3">
          <a
            href="#"
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#324E7B]/10 hover:text-[#324E7B] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#324E7B]/10 hover:text-[#324E7B] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
        <div
          class="w-24 h-24 mx-auto mb-4 bg-[#F8F9FB] rounded-full flex items-center justify-center"
        >
          <span class="poppins-bold text-2xl text-[#324E7B]">S</span>
        </div>
        <h3 class="poppins-semibold text-lg text-black mb-1">Sarah Chen</h3>
        <p class="poppins-medium text-sm text-[#747474] mb-3">Lead Designer</p>
        <div class="flex justify-center gap-3">
          <a
            href="#"
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#324E7B]/10 hover:text-[#324E7B] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#324E7B]/10 hover:text-[#324E7B] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
        <div
          class="w-24 h-24 mx-auto mb-4 bg-[#F8F9FB] rounded-full flex items-center justify-center"
        >
          <span class="poppins-bold text-2xl text-[#324E7B]">M</span>
        </div>
        <h3 class="poppins-semibold text-lg text-black mb-1">Michael Kim</h3>
        <p class="poppins-medium text-sm text-[#747474] mb-3">Lead Developer</p>
        <div class="flex justify-center gap-3">
          <a
            href="#"
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#324E7B]/10 hover:text-[#324E7B] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#324E7B]/10 hover:text-[#324E7B] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
        <div
          class="w-24 h-24 mx-auto mb-4 bg-[#F8F9FB] rounded-full flex items-center justify-center"
        >
          <span class="poppins-bold text-2xl text-[#324E7B]">E</span>
        </div>
        <h3 class="poppins-semibold text-lg text-black mb-1">Emily Rodriguez</h3>
        <p class="poppins-medium text-sm text-[#747474] mb-3">Career Coach</p>
        <div class="flex justify-center gap-3">
          <a
            href="#"
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#324E7B]/10 hover:text-[#324E7B] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#324E7B]/10 hover:text-[#324E7B] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="container mt-24 lg:mt-[150px] px-4 lg:px-0">
    <div class="text-center mb-12 lg:mb-16">
      <h2 class="poppins-bold text-2xl lg:text-3xl text-black mb-4">Why Choose Us</h2>
      <p class="poppins-medium text-base text-[#747474] max-w-2xl mx-auto">
        What makes our resume builder stand out from the rest.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="flex gap-5">
        <div class="w-12 h-12 bg-[#324E7B]/10 rounded-xl flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-[#324E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="poppins-semibold text-lg text-black mb-2">Easy to Use</h3>
          <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
            No design or technical skills required. Just fill in your information and let our tool
            handle the rest.
          </p>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="w-12 h-12 bg-[#324E7B]/10 rounded-xl flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-[#324E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            ></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="poppins-semibold text-lg text-black mb-2">Professional Templates</h3>
          <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
            Curated, ATS-friendly templates designed by career experts to help you get noticed.
          </p>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="w-12 h-12 bg-[#324E7B]/10 rounded-xl flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-[#324E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="poppins-semibold text-lg text-black mb-2">Instant Downloads</h3>
          <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
            Download your resume as a high-quality PDF ready to send to employers in seconds.
          </p>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="w-12 h-12 bg-[#324E7B]/10 rounded-xl flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-[#324E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586c0-.265.105-.52.301-.707l10-10a4.984 4.984 0 017.071 0z"
            ></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="poppins-semibold text-lg text-black mb-2">Customizable</h3>
          <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
            Personalize every section of your resume to match your unique style and experience.
          </p>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="w-12 h-12 bg-[#324E7B]/10 rounded-xl flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-[#324E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="poppins-semibold text-lg text-black mb-2">Expert Tips</h3>
          <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
            Built-in guidance and suggestions from career experts to help you write compelling
            content.
          </p>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="w-12 h-12 bg-[#324E7B]/10 rounded-xl flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-[#324E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="poppins-semibold text-lg text-black mb-2">Secure & Private</h3>
          <p class="poppins-medium text-sm text-[#747474] leading-relaxed">
            Your data is safe with us. We never share your personal information with third parties.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Statistics Section -->
  <section class="container mt-24 lg:mt-[150px] px-4 lg:px-0">
    <div class="bg-[#324E7B] rounded-3xl p-8 lg:p-16 text-center">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div>
          <div class="poppins-bold text-4xl lg:text-5xl text-white mb-2">10k+</div>
          <p class="poppins-medium text-base text-white/80">Resumes Created</p>
        </div>
        <div>
          <div class="poppins-bold text-4xl lg:text-5xl text-white mb-2">50+</div>
          <p class="poppins-medium text-base text-white/80">Templates Available</p>
        </div>
        <div>
          <div class="poppins-bold text-4xl lg:text-5xl text-white mb-2">95%</div>
          <p class="poppins-medium text-base text-white/80">User Satisfaction</p>
        </div>
        <div>
          <div class="poppins-bold text-4xl lg:text-5xl text-white mb-2">100%</div>
          <p class="poppins-medium text-base text-white/80">Free to Start</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="container mt-24 lg:mt-[150px] mb-24 lg:mb-[150px] px-4 lg:px-0">
    <div class="bg-[#F8F9FB] rounded-3xl p-8 lg:p-16 text-center">
      <h2 class="poppins-bold text-2xl lg:text-3xl text-black mb-4">
        Ready to Create Your <span class="text-[#324E7B]">Perfect Resume?</span>
      </h2>
      <p class="poppins-medium text-base text-[#747474] max-w-2xl mx-auto mb-8">
        Join thousands of satisfied users and take the first step towards landing your dream job
        today.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <ButtonStyle link="/CreateCV" type="default">Get Started Now</ButtonStyle>
        <ButtonStyle link="/Templates" type="white">View Templates</ButtonStyle>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import ButtonStyle from "@/components/ButtonStyle.vue";

export default {
  name: "AboutUsView",
  components: {
    Header,
    ButtonStyle,
  },
};
</script>
