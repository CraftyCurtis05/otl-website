import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ServicesView from '@/views/ServicesView.vue';
import SupportView from '@/views/SupportView.vue';
import PricingView from '@/views/PricingView.vue';
import ContactView from '@/views/ContactView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';
import TermsConditionsView from '@/views/TermsConditionsView.vue';

// Helper function to generate meta tags
const generateMetaTags = (title, description) => ([
  { name: 'description', content: description },
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { meta } = to;
  
  // Set document title
  if (meta?.title) document.title = meta.title;

  // Set meta tags dynamically
  if (meta?.metaTags) {
    meta.metaTags.forEach(({ name, content }) => {
      const existingTag = document.querySelector(`meta[name="${name}"]`);
      if (existingTag) {
        existingTag.content = content;
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', name);
        newTag.setAttribute('content', content);
        document.head.appendChild(newTag);
      }
    });
  }

  next();
});

export default router;