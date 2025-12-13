/* eslint-disable no-unused-vars */
export const generatePage = (type, tmpl, t, language = 'uk') => {
  const { primary, secondary, accent, light, dark } = tmpl.colors;
  const hero = tmpl.hero[language];

  const pages = {
    hero: `<section class="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
  <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover opacity-40">
    <source src="${hero.video}" type="video/mp4">
  </video>
  
  <div class="absolute inset-0 bg-linear-to-br from-${primary} via-${secondary} to-${accent} opacity-90"></div>
  
  <div class="absolute inset-0 overflow-hidden opacity-20">
    <div class="absolute top-10 left-10 w-72 h-72 bg-${accent} rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-${secondary} rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
  </div>
  
  <div class="container mx-auto px-6 text-center relative z-10 text-black">
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in opacity-0" style="animation: fadeInUp 1s ease-out forwards">
      ${hero.title}
    </h1>
    <p class="text-2xl md:text-4xl lg:text-5xl mb-4 font-light opacity-0" style="animation: fadeInUp 1s ease-out 0.3s forwards">
      ${hero.subtitle}
    </p>
    <p class="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto" style="animation: fadeInUp 1s ease-out 0.6s forwards">
      ${hero.description}
    </p>
    <button onclick="document.getElementById('about').scrollIntoView({behavior: 'smooth'})" 
            class="bg-white text-${primary} px-10 py-5 rounded-full text-lg font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300 opacity-0"
            style="animation: fadeInUp 1s ease-out 0.9s forwards">
      ${hero.cta}
    </button>
  </div>
  
  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 opacity-0" style="animation: fadeInUp 1s ease-out 1.2s forwards, bounce 2s ease-in-out 2s infinite">
    <div class="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
      <div class="w-1 h-3 bg-white rounded-full animate-pulse"></div>
    </div>
  </div>

  <style>
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  </style>
</section>`,

    about: `<section class="py-20 md:py-32 bg-linear-to-b from-white to-${light}" id="about">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-${primary}">${t.about}</h2>
      <div class="w-24 h-1 bg-linear-to-r from-${primary} to-${secondary} mx-auto"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div class="scroll-reveal" style="animation-delay: 0.2s">
        <div class="relative group">
          <div class="absolute -inset-4 bg-linear-to-r from-${primary} to-${secondary} rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
               alt="About" 
               class="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
      
      <div class="space-y-6">
        <div class="scroll-reveal" style="animation-delay: 0.3s">
          <h3 class="text-3xl md:text-4xl font-bold mb-4 text-${primary}">${t.aboutTitle}</h3>
          <p class="text-lg md:text-xl leading-relaxed text-gray-700">${t.aboutText1}</p>
        </div>
        
        <div class="scroll-reveal" style="animation-delay: 0.4s">
          <p class="text-lg md:text-xl leading-relaxed text-gray-700">${t.aboutText2}</p>
        </div>
        
        <div class="scroll-reveal" style="animation-delay: 0.5s">
          <p class="text-lg md:text-xl leading-relaxed text-gray-700">${t.aboutText3}</p>
        </div>
        
        <div class="grid grid-cols-3 gap-6 pt-8 scroll-reveal" style="animation-delay: 0.6s">
          <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-3xl md:text-4xl font-bold text-${primary} mb-2">10+</div>
            <div class="text-sm md:text-base text-gray-600">${t.years}</div>
          </div>
          <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-3xl md:text-4xl font-bold text-${secondary} mb-2">500+</div>
            <div class="text-sm md:text-base text-gray-600">${t.projects}</div>
          </div>
          <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-3xl md:text-4xl font-bold text-${accent} mb-2">100%</div>
            <div class="text-sm md:text-base text-gray-600">${t.chill}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,

    services: `<section class="py-20 md:py-32 bg-linear-to-b from-${light} to-white" id="services">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-${primary}">${t.services}</h2>
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">${t.servicesSubtitle}</p>
      <div class="w-24 h-1 bg-linear-to-r from-${primary} to-${secondary} mx-auto mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${[1,2,3,4,5,6].map((i, idx) => `
        <div class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-reveal" style="animation-delay: ${idx * 0.1}s">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-linear-to-br from-${primary} to-${secondary} rounded-2xl flex items-center justify-center text-white text-3xl font-bold transform group-hover:rotate-12 transition-transform duration-500">
              ${i}
            </div>
            <div class="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-${primary} to-${secondary} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </div>
          
          <h3 class="text-2xl md:text-3xl font-bold mb-4 text-${primary} group-hover:text-${secondary} transition-colors">
            ${t.service} ${i}
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">${t.serviceDesc}</p>
          
          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <span class="text-3xl md:text-4xl font-bold bg-linear-to-r from-${primary} to-${secondary} bg-clip-text text-transparent">
              ₴${500 + i * 100}
            </span>
            <button class="px-6 py-3 bg-linear-to-r from-${primary} to-${secondary} text-white rounded-xl font-semibold hover:scale-105 transition-transform">
              ${t.learnMore}
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>`,

    menu: `<section class="py-20 md:py-32 bg-white" id="menu">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-${primary}">${t.menuO}</h2>
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">${t.menuDescO}</p>
      <div class="w-24 h-1 bg-linear-to-r from-${primary} to-${secondary} mx-auto mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      ${[1,2,3,4,5,6].map((i, idx) => `
        <div class="group bg-linear-to-br from-white to-${light} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 scroll-reveal" style="animation-delay: ${idx * 0.1}s">
          <div class="flex gap-6">
            <div class="relative shrink-0">
              <div class="absolute inset-0 bg-linear-to-br from-${primary} to-${secondary} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <img src="https://picsum.photos/600/400?random=${i}" 
                   alt="Item" 
                   class="relative w-32 h-32 rounded-2xl object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xl md:text-2xl font-bold mb-3 text-${primary} group-hover:text-${secondary} transition-colors">
                  ${t.itemO} ${i}
                </h3>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">${t.itemDescO}</p>
              </div>
              
              <div class="flex items-center justify-between mt-4">
                <span class="text-2xl md:text-3xl font-bold bg-linear-to-r from-${primary} to-${secondary} bg-clip-text text-transparent">
                  ₴${150 + i * 50}
                </span>
                <button class="px-5 py-2 bg-linear-to-r from-${primary} to-${secondary} text-white rounded-lg font-semibold hover:scale-105 transition-transform text-sm md:text-base">
                  ${t.orderNowO}
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>`,

    products: `<section class="py-20 md:py-32 bg-linear-to-b from-${light} to-white" id="products">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-${primary}">${t.products}</h2>
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">${t.productsDesc}</p>
      <div class="w-24 h-1 bg-linear-to-r from-${primary} to-${secondary} mx-auto mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${[1,2,3,4,5,6].map((i, idx) => `
        <div class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-reveal" style="animation-delay: ${idx * 0.1}s">
          <div class="relative overflow-hidden h-64">
            <div class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img src="https://picsum.photos/600/400?random=${i}" 
                 alt="Product" 
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute top-4 right-4 bg-${accent} text-white px-4 py-2 rounded-full text-sm font-bold z-20">
              ${t.inStock}
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl md:text-2xl font-bold mb-3 text-${primary} group-hover:text-${secondary} transition-colors">
              ${t.product} ${i}
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">${t.productDesc}</p>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <span class="text-2xl md:text-3xl font-bold bg-linear-to-r from-${primary} to-${secondary} bg-clip-text text-transparent">
                ₴${500 + i * 200}
              </span>
              <button class="px-6 py-3 bg-linear-to-r from-${primary} to-${secondary} text-white rounded-xl font-semibold hover:scale-105 transition-transform">
                ${t.buy}
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>`,

    pricing: `<section class="py-20 md:py-32 bg-linear-to-b from-white to-${light}" id="pricing">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-${primary}">${t.pricing}</h2>
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">${t.pricingDesc}</p>
      <div class="w-24 h-1 bg-linear-to-r from-${primary} to-${secondary} mx-auto mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      ${t.plans.map((plan, i) => `
        <div class="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 scroll-reveal ${i === 1 ? `border-4 border-${primary} scale-105` : ''}" style="animation-delay: ${i * 0.15}s">
          ${i === 1 ? `
            <div class="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-${primary} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ${t.popular}
            </div>
          ` : ''}
          
          <div class="text-center mb-8">
            <h3 class="text-3xl md:text-4xl font-bold mb-4 text-${primary}">${plan}</h3>
            <div class="flex items-baseline justify-center">
              <span class="text-5xl md:text-6xl font-bold bg-linear-to-r from-${primary} to-${secondary} text-gray-600 bg-clip-text">
                ₴${500 + i * 500}
              </span>
              <span class="text-xl text-gray-500 ml-2">${t.perMonth}</span>
            </div>
          </div>
          
          <ul class="space-y-4 mb-8">
            ${t.planFeatures.map(feat => `
              <li class="flex items-start gap-3">
                <span class="shrink-0 w-6 h-6 bg-linear-to-br from-${primary} to-${secondary} rounded-full flex items-center justify-center text-${primary} text-sm">✓</span>
                <span class="text-gray-600 leading-relaxed">${feat}</span>
              </li>
            `).join('')}
          </ul>
          
          <button class="w-full py-4 bg-linear-to-r from-${primary} to-${secondary} text-${primary} rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            ${t.choosePlan}
          </button>
        </div>
      `).join('')}
    </div>
  </div>
</section>`,

    gallery: `<section class="py-20 md:py-32 bg-${dark}" id="gallery">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-white">${t.gallery}</h2>
      <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">${t.galleryDesc}</p>
      <div class="w-24 h-1 bg-linear-to-r from-${primary} to-${secondary} mx-auto mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${[1,2,3,4,5,6,7,8,9].map((i, idx) => `
        <div class="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer scroll-reveal" style="animation-delay: ${idx * 0.08}s">
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          <img src="https://picsum.photos/600/400?random=${i}" 
               alt="Gallery ${i}" 
               class="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />
          
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 mx-auto">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <span class="text-white text-lg font-semibold">${t.view}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>`,

    features: `<section class="py-20 md:py-32 bg-white" id="features">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-${primary}">${t.whyUs}</h2>
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">${t.whyUsDesc}</p>
      <div class="w-24 h-1 bg-linear-to-r from-${primary} to-${secondary} mx-auto mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${t.features.map((feat, i) => `
        <div class="group bg-linear-to-br from-${light} to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all 
        duration-500 hover:-translate-y-2 scroll-reveal" style="animation-delay: ${i * 0.1}s">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-linear-to-br from-${primary} to-${secondary} rounded-2xl flex items-center justify-center 
            text-white text-3xl font-bold transform group-hover:rotate-12 transition-transform duration-500">
              ${i + 1}
            </div>
            <div class="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-${primary} to-${secondary} rounded-2xl blur-xl 
            opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </div>
          
          <h3 class="text-2xl md:text-3xl font-bold mb-4 text-${primary} group-hover:text-${secondary} transition-colors">
            ${feat}
          </h3>
          <p class="text-gray-600 leading-relaxed">${t.featureDescs[i]}</p>
        </div>
      `).join('')}
    </div>
  </div>
</section>`,

    testimonials: `<section class="py-20 md:py-32 bg-linear-to-br from-${primary} via-${secondary} to-${accent} relative overflow-hidden" id="testimonials">
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
  </div>
  
  <div class="container mx-auto px-6 relative z-10">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-white">${t.testimonials}</h2>
      <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">${t.testimonialsDesc}</p>
      <div class="w-24 h-1 bg-black mx-auto mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${[1,2,3,4,5,6].map((i, idx) => `
        <div class="bg-black/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:bg-black/40 transition-all 
        duration-500 hover:-translate-y-2 hover:border-white/40 scroll-reveal" style="animation-delay: ${idx * 0.1}s">
          <div class="flex items-center mb-6">
            <img src="https://i.pravatar.cc/100?img=${i}" 
                 alt="Client" 
                 class="w-16 h-16 rounded-full mr-4 border-4 border-white/30" />
            <div>
              <p class="font-bold text-white text-lg">${t.client} ${i}</p>
              <div class="flex gap-1 text-yellow-300 text-lg">
                ${'⭐'.repeat(5)}
              </div>
            </div>
          </div>
          <p class="text-white/90 text-lg leading-relaxed italic">"${t.testimonialText}"</p>
        </div>
      `).join('')}
    </div>
  </div>
</section>`,

    contact: `<section class="py-20 md:py-32 bg-linear-to-b from-white to-${light}" id="contact">
  <div class="container mx-auto px-6 max-w-6xl">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl md:text-6xl font-bold mb-4 text-${primary}">${t.contact}</h2>
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">${t.contactDesc}</p>
      <div class="w-24 h-1 bg-linear-to-r from-${primary} to-${secondary} mx-auto mt-4"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-12">
      <div class="scroll-reveal" style="animation-delay: 0.2s">
        <h3 class="text-3xl font-bold mb-8 text-${primary}">${t.ourInfo}</h3>
        <div class="space-y-6">
          ${[
            { icon: '📍', title: t.address, text: t.addressText },
            { icon: '📞', title: t.phone, text: t.phoneNumber },
            { icon: '✉️', title: t.email, text: t.emailAddress },
            { icon: '🕐', title: t.workingHours, text: t.workingHoursText }
          ].map((item, idx) => `
            <div class="flex items-start gap-4 group">
              <div class="w-14 h-14 bg-linear-to-br from-${primary} to-${secondary} rounded-xl flex items-center justify-center
               text-white text-2xl shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                ${item.icon}
              </div>
              <div>
                <p class="font-semibold text-lg text-${primary} mb-1">${item.title}</p>
                <p class="text-gray-600">${item.text}</p>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="mt-8 p-6 bg-linear-to-br from-${primary}/5 to-${secondary}/5 rounded-2xl">
          <h4 class="font-bold text-${primary} mb-3">${t.followUs}</h4>
          <div class="flex gap-4">
            ${['facebook', 'instagram', 'twitter', 'linkedin'].map(social => `
              <a href="#" class="w-12 h-12 bg-linear-to-br from-${primary} to-${secondary} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <span class="text-xl">📱</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,

    };

    return pages[type] || '';
  };