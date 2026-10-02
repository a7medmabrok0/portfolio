const projectFiles = [
  ['mabroukui-6.webp', 'تطبيق السيارات', 'تجربة تطبيق للبحث عن السيارات', 'Car Marketplace App', 'Mobile car shopping experience'],
  ['mabroukui-7.webp', 'تطبيق تحويل الأموال', 'تجربة مالية للهواتف', 'Money Transfer App', 'Mobile finance experience'],
  ['mabroukui-5.webp', 'لوحة إدارة المتجر', 'تصميم منتج رقمي', 'Store Dashboard', 'Digital product design'],
  ['mabroukui-8.webp', 'إدارة المشاريع', 'تجربة متابعة المشاريع', 'Project Management', 'Project tracking experience'],
  ['mabroukui-3.webp', 'نظام الموارد البشرية', 'لوحة تحكم للموظفين', 'HR Management System', 'Employee dashboard'],
  ['mabroukui-9.webp', 'تطبيق الاتحاد السعودي للاكروس', 'تجربة رياضية', 'Saudi Lacrosse Federation', 'Sports app experience'],
  ['mabroukui-10.webp', 'تطبيق الملف الشخصي', 'تجربة تواصل ومشاركة', 'Profile App', 'Social sharing experience'],
  ['mabroukui-11.webp', 'تطبيق The 6 Talk', 'تصميم تجربة للهواتف', 'The 6 Talk', 'Mobile app experience'],
  ['mabroukui.webp', 'منصتي التعليمية', 'موقع وتطبيق تعليمي', 'My Learning Platform', 'Educational website and app'],
  ['mabroukui-1.webp', 'جمعية طريق السلام', 'موقع جمعية', 'Path of Peace Association', 'Nonprofit website'],
  ['mabroukui-2.webp', 'ميدان التخزين', 'موقع وتطبيق خدمات', 'Midan Storage', 'Service website and app'],
  ['mabroukui-4.webp', 'شركة البناء الحديثة', 'موقع شركة', 'Modern Construction Company', 'Corporate website'],
];

const projectList = document.querySelector('#projectList');
projectFiles.forEach(([file, title, category], index) => {
  const card = document.createElement('figure');
  card.className = 'project-card';
  const img = document.createElement('img');
  img.src = `assets/projects/${file}`;
  img.alt = title;
  img.width = 1200;
  img.height = 900;
  img.loading = index < 2 ? 'eager' : 'lazy';
  img.decoding = 'async';
  const caption = document.createElement('figcaption');
  const heading = document.createElement('strong');
  heading.textContent = title;
  const detail = document.createElement('span');
  detail.textContent = category;
  caption.append(heading, detail);
  card.append(img, caption);
  projectList.append(card);
});

const portrait = document.querySelector('#portraitImage');

const tabs = document.querySelectorAll('.nav-tab, .mobile-tab');
const contentGrid = document.querySelector('.content-grid');
const stackedLayout = matchMedia('(max-width:1023px)');
const panels = {
  work: document.querySelector('#workPanel'),
  experience: document.querySelector('#experiencePanel'),
  about: document.querySelector('#aboutPanel'),
};
function showTab(name) {
  contentGrid.dataset.activeTab = name;
  tabs.forEach(tab => {
    const selected = tab.dataset.tab === name;
    tab.classList.toggle('is-active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  Object.entries(panels).forEach(([key, panel]) => {
    panel.hidden = key !== name;
    panel.classList.toggle('is-visible', key === name);
  });
  if (stackedLayout.matches) window.scrollTo(0, 0);
  updateMobileHeader();
}
tabs.forEach(tab => tab.addEventListener('click', () => showTab(tab.dataset.tab)));

const mobileLayout = matchMedia('(max-width:550px)');
function updateMobileHeader() {
  const profileHidden = contentGrid.dataset.activeTab !== 'work' || document.querySelector('.profile-summary').getBoundingClientRect().bottom <= 52;
  document.body.classList.toggle('mobile-profile-collapsed', mobileLayout.matches && profileHidden);
}
window.addEventListener('scroll', updateMobileHeader, { passive: true });
window.addEventListener('resize', updateMobileHeader);
mobileLayout.addEventListener('change', updateMobileHeader);
updateMobileHeader();
let english = false;
const translations = {
  ar: { about: 'عنــي', experience: 'الخبرات', work: 'معرض الأعمال', available: 'متاح للعمل', name: 'أحمد مبروك', role: 'مصمم واجهة المستخدم', lede: 'متخصص في تصميم المنتجات الرقمية المعقدة وواسعة النطاق. أركز على بناء أنظمة متكاملة وقابلة للتوسع، وتنظيم المنتجات كثيفة البيانات، مع تحقيق التوازن بين احتياجات المستخدم وأهداف المنتج وقابلية التنفيذ.', years: 'سنوات خبرة', projects: 'مشروع', sectors: 'قطاع', message: 'إرسال رسالة', cv: 'تنزيل السيرة الذاتية' },
  en: { about: 'About Me', experience: 'Experience', work: 'Portfolio', available: 'Available for work', name: 'Ahmed Mabrouk', role: 'User Interface Designer', lede: 'Specializing in the design of complex and large-scale digital products, I focus on building integrated and scalable systems, organizing data-intensive products, while balancing user needs, product goals, and feasibility.', years: 'Experience', projects: 'Projects', sectors: 'Industry', message: 'Send Message', cv: 'Download CV' },
};

const englishContent = {
  '#experiencePanel h2': 'Experience',
  '#experiencePanel .experience-meta time': [
    '09/2024 – Present', '02/2024 – 11/2024', '05/2023 – 02/2024', '11/2022 – 05/2023'
  ],
  '#experiencePanel .experience-meta span': ['Saudi Arabia', 'Saudi Arabia', 'Egypt', 'Egypt'],
  '#experiencePanel .experience-points li': [
    'Worked on UI design initiatives, with a strong focus on creating and maintaining a scalable design system for internal products.',
    'Defined design patterns and standardized UI components to ensure product consistency.',
    'Collaborated closely with developers and product managers to ensure accurate implementation of visual designs.',
    'Conducted interface reviews and accessibility assessments of existing platforms.',
    'Improved the visual quality of the product while maintaining usability, responsiveness, and user-centered design principles.',
    'Designed UI/UX for several concurrent projects across healthcare, e-commerce, and services.',
    'Conducted user research, wireframing, prototyping, and usability testing for diverse user groups.',
    'Created responsive layouts and high-fidelity mockups in Figma.',
    'Participated in daily scrums, sprint reviews, and design critiques with agile development teams.',
    'Ensured visual designs aligned with brand guidelines and user needs.',
    'Designed a large-scale ERP system and a POS solution as a Product Designer.',
    'Created interfaces for complex workflows and dashboards that support business operations.',
    'Built and documented a comprehensive design system to ensure consistency across modules.',
    'Analyzed and addressed user complaints through UX audits and customer feedback cycles.',
    'Collaborated with cross-functional teams to improve task flows and navigation and prevent errors.',
    'Created wireframes, prototypes, and interface designs for internal projects and client platforms.'
  ],
  '#experiencePanel .skills-heading': ['Skills', 'Tools I Use'],
  '#aboutPanel h2': 'About Me',
  '#aboutPanel .info-intro': 'I turn the complexity of digital products into clear, easy-to-use experiences.',
  '#aboutPanel .about-section h3': [
    'Who Am I?', 'My Experience', 'How I Work', 'Design Systems', 'My Interest in AI', 'What I Believe'
  ],
  '#aboutPanel .about-section p': [
    'I’m Ahmed Mabrouk, a UI/UX and Product Designer specializing in complex, large-scale digital products. I turn complex processes and information into clear, organized, and easy-to-use experiences.',
    'I’ve worked on a wide range of products, including <strong>ERP systems, dashboards, mobile apps, SaaS platforms, POS systems, and AI products</strong>, across fields such as fintech, e-commerce, education, and services.',
    'I start by understanding the problem and the user’s needs. Then I shape a complete experience that connects <strong>user needs, product goals, and technical feasibility</strong>. I focus on simplifying workflows and organizing data-heavy products.',
    'I have experience building and evolving <strong>scalable design systems</strong> that create consistency, organize components, and speed up design and development, especially in large products.',
    'I’m interested in designing AI products and experiences that turn complex technology into something simple and useful, with a focus on practical value for users.',
    '<strong>Good design does more than make a product look better. It makes it clearer, easier to use, and ready to grow.</strong>'
  ]
};
const localizedContent = Object.entries(englishContent).map(([selector, translation]) => {
  const elements = [...document.querySelectorAll(selector)];
  const englishValues = Array.isArray(translation) ? translation : [translation];
  if (elements.length !== englishValues.length) {
    console.warn(`Translation count mismatch: ${selector}`);
  }
  return { elements, arabic: elements.map(element => element.innerHTML), english: englishValues };
});

function setLanguage(nextLanguage) {
  english = nextLanguage === 'en';
  const t = translations[nextLanguage];
  document.documentElement.lang = nextLanguage;
  document.documentElement.dir = english ? 'ltr' : 'rtl';
  document.documentElement.classList.toggle('english', english);
  document.title = english ? 'Mabroukui — Ahmed Mabrouk' : 'Mabroukui — أحمد مبروك';
  document.querySelector('meta[name="description"]').content = english
    ? 'Mabroukui — Portfolio of Ahmed Mabrouk, UI/UX and Product Designer.'
    : 'Mabroukui — معرض أعمال أحمد مبروك، مصمم واجهات وتجربة المستخدم.';
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = document.querySelector('meta[name="description"]').content;
  tabs.forEach(tab => { (tab.querySelector('span:last-child') || tab).textContent = t[tab.dataset.tab]; });
  document.querySelector('#availabilityText').textContent = t.available;
  document.querySelector('#profileName').textContent = t.name;
  document.querySelector('#compactProfileName').textContent = t.name;
  document.querySelector('#profileRole').textContent = t.role;
  document.querySelector('#profileLede').textContent = t.lede;
  document.querySelector('#yearsLabel').textContent = t.years;
  document.querySelector('.stats div:first-child strong').textContent = english ? '+5y' : '+5';
  document.querySelector('#projectsLabel').textContent = t.projects;
  document.querySelector('#sectorsLabel').textContent = t.sectors;
  document.querySelector('#messageLink').textContent = t.message;
  document.querySelector('#cvButton').innerHTML = `${t.cv} <img src="assets/icons/download-02.svg" width="16" height="16" alt="" aria-hidden="true">`;
  document.querySelector('#languageButton').textContent = english ? 'العربية' : 'English';
  document.querySelector('#languageButton').setAttribute('aria-label', english ? 'Switch to Arabic' : 'Switch to English');
  document.querySelector('.main-nav').setAttribute('aria-label', english ? 'Main navigation' : 'التنقل الرئيسي');
  document.querySelector('.mobile-nav').setAttribute('aria-label', english ? 'Mobile navigation' : 'التنقل الرئيسي للموبايل');
  document.querySelector('.profile-panel').setAttribute('aria-label', english ? 'Profile' : 'الملف الشخصي');
  document.querySelector('.main-panel').setAttribute('aria-label', english ? 'Site content' : 'محتوى الموقع');
  portrait.alt = english ? 'Portrait of Ahmed Mabrouk' : 'بورتريه أحمد مبروك';
  document.querySelector('.stats').setAttribute('aria-label', english ? 'Work statistics' : 'إحصاءات العمل');
  document.querySelector('#workScroll').setAttribute('aria-label', english ? 'Portfolio projects; scroll to browse' : 'الأعمال، مرر لعرض المشاريع');
  document.querySelector('.socials').setAttribute('aria-label', english ? 'Social links' : 'روابط التواصل');
  document.querySelector('.software-list').setAttribute('aria-label', english ? 'Tools I use' : 'البرامج التي أستخدمها');
  localizedContent.forEach(group => group.elements.forEach((element, index) => {
    element.innerHTML = english ? group.english[index] : group.arabic[index];
  }));
  projectList.querySelectorAll('.project-card').forEach((card, index) => {
    const [, arabicTitle, arabicCategory, englishTitle, englishCategory] = projectFiles[index];
    card.querySelector('img').alt = english ? englishTitle : arabicTitle;
    card.querySelector('figcaption strong').textContent = english ? englishTitle : arabicTitle;
    card.querySelector('figcaption span').textContent = english ? englishCategory : arabicCategory;
  });
  updateMobileHeader();
}
document.querySelector('#languageButton').addEventListener('click', () => {
  const nextLanguage = english ? 'ar' : 'en';
  setLanguage(nextLanguage);
  try { localStorage.setItem('mabroukui-language', nextLanguage); } catch (_) { /* Storage may be unavailable. */ }
});
try {
  if (localStorage.getItem('mabroukui-language') === 'en') setLanguage('en');
} catch (_) { /* Keep the default Arabic version. */ }
