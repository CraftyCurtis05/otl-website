import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('@/views/HomeView.vue');
const ServicesView = () => import('@/views/ServicesView.vue');
const SupportView = () => import('@/views/SupportView.vue');
const PricingView = () => import('@/views/PricingView.vue');
const ContactView = () => import('@/views/ContactView.vue');
const PrivacyPolicyView = () => import('@/views/PrivacyPolicyView.vue');
const TermsConditionsView = () => import('@/views/TermsConditionsView.vue');

const generateMetaTags = (title, description) => ([
  { name: 'description', content: description },
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:url', content: window.location.href },
  { property: 'og:image', content: 'https://otlcommunications.com/assets/logo.webp' },
]);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      title: 'OTL | Home',
      metaTags: generateMetaTags('Home Page', 'This is the home page of OTL On The Line Communications website.'),
    }
  },
  {
    path: '/services',
    name: 'ServicesView',
    component: ServicesView,
    meta: {
      title: 'OTL | Services',
      metaTags: generateMetaTags('Services Page', 'This is the services page of OTL On The Line Communications website.'),
    }
  },
  {
    path: '/support',
    name: 'SupportView',
    component: SupportView,
    meta: {
      title: 'OTL | Support',
      metaTags: generateMetaTags('Support Page', 'This is the support page of OTL On The Line Communications website.'),
    }
  },
  {
    path: '/pricing',
    name: 'PricingView',
    component: PricingView,
    meta: {
      title: 'OTL | Pricing',
      metaTags: generateMetaTags('Pricing Page', 'This is the pricing page of OTL On The Line Communications website.'),
    }
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView,
    meta: {
      title: 'OTL | Contact Us',
      metaTags: generateMetaTags('Contact Us Page', 'This is the contact us page of OTL On The Line Communications website.'),
    }
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicyView',
    component: PrivacyPolicyView,
  },
  {
    path: '/terms',
    name: 'TermsConditionsView',
    component: TermsConditionsView,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: 'OTL | Page Not Found',
      metaTags: generateMetaTags('404', 'Page not found - OTL On The Line Communications')
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {

  if (to.meta?.title) {
    document.title = to.meta.title;
  }

  const oldMetaTags = document.querySelectorAll('[data-vue-router-controlled]');
  oldMetaTags.forEach(tag => tag.parentNode.removeChild(tag));

  if (to.meta?.metaTags) {
    to.meta.metaTags.forEach(({ name, content }) => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', name);
      tag.setAttribute('content', content);
      tag.setAttribute('data-vue-router-controlled', '');
      document.head.appendChild(tag);
    });
  }
  next();
});

export default router;