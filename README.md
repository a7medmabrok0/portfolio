# Mabroukui

موقع أحمد مبروك على `https://mabroukui.com/`: بورتفوليو داكن سينمائي، هيرو بكلمة PORTFOLIO عملاقة خلف البورتريه، أعمال مختارة، الشغل والأثر، مقارنة Wireframe ↔ Final UI، خط زمني للخبرات، وصفحة تواصل.

- ملف واحد `index.html` (فيه الـ CSS والـ JS) + مجلد `assets/`.
- عربي (RTL) افتراضيًا مع زر English، واللغة بتتحفظ في المتصفح.
- الخطوط: Ping محليًا في `assets/fonts`، وAnton / Alexandria / Aref Ruqaa / Caveat Brush / DM Sans من Google Fonts.
- صورة معاينة الرابط: `assets/share-cover-en.jpg`.

## التشغيل محليًا

دبل كليك على `index.html`، أو من داخل المجلد:

```sh
python3 -m http.server 8000
```

وافتح `http://localhost:8000`.

## الرفع على الاستضافة

ارفع `index.html` ومجلد `assets/` في جذر الموقع (غالبًا `public_html`).
