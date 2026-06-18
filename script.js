/* =========================================================
   Dr. Cihad Gök — Естетична клиника | Система за записване
   --------------------------------------------------------
   НАСТРОЙКИ / AYARLAR: WhatsApp/телефон номера на клиниката
   се въвежда тук. Само цифри, с код на държавата, без "+"
   (напр. България: 359XXXXXXXXX).
   ========================================================= */
const CONFIG = {
  whatsapp: "359000000000",           // WhatsApp (само цифри, без +)
  phoneDisplay: "+359 00 000 00 00",   // Показван телефон
  clinicName: "Dr. Cihad Gök",

  // Работни правила / Çalışma kuralları
  workingDays: [6, 0],   // 6 = събота/Cumartesi, 0 = неделя/Pazar
  firstHour: 8,          // Първи час / İlk saat
  slotsPerDay: 8,        // Пациенти на ден / Günlük hasta
  slotMinutes: 45,       // Времетраене (мин) / Süre (dk)
  weeksAhead: 6,         // Колко уикенда напред / Kaç haftasonu
  defaultLang: "bg",     // "bg" или "tr"
};

/* ---------- Преводи / Çeviriler ---------- */
const I18N = {
  bg: {
    htmlLang: "bg",
    brandSub: "Естетична клиника",
    navServices: "Услуги", navAbout: "За нас", navContact: "Контакти", navBook: "Запази час",
    heroEyebrow: "България · Естетика и красота",
    heroTitle: "Разкрийте естествената си красота <em>в опитни ръце</em>",
    heroLead: "В клиниката на Dr. Cihad Gök — ботокс, PRP и мезотерапия за безопасни и естествени резултати, съобразени с вас.",
    heroCtaBook: "Онлайн записване", heroCtaServices: "Вижте услугите",
    heroNote: "🗓️ Записванията са само в <strong>събота и неделя</strong> · Всеки сеанс 45 мин",
    heroCardTitle: "Индивидуална грижа", heroCardSub: "Всяка кожа е уникална",
    stat1: "Доволни пациенти", stat2n: "10+ год.", stat2: "Опит", stat3: "Стерилна среда", stat4n: "Естествени", stat4: "Резултати",
    servicesEyebrow: "Нашите услуги", servicesTitle: "Естетични решения, специално за вас",
    svc1Title: "Ботокс", svc1Desc: "Естествено и контролирано премахване на мимическите бръчки.",
    svc2Title: "PRP", svc2Desc: "Обновяване на кожата и подкрепа при косопад чрез плазма от собствената ви кръв.",
    svc3Title: "Мезотерапия", svc3Desc: "Хидратиране, сияние и жизненост на кожата чрез коктейл от витамини и минерали.",
    aboutEyebrow: "За нас",
    aboutText: "При естетичните процедури предпочита естествен вид, дискретни и безопасни резултати. За всеки пациент изготвя индивидуален план, поставяйки комфорта, хигиената и удовлетворението на първо място.",
    aboutTick1: "Индивидуална оценка и планиране", aboutTick2: "Стерилна и модерна клинична среда", aboutTick3: "Естествени и балансирани резултати",
    bookEyebrow: "Записване", bookTitle: "Онлайн записване на час",
    bookSub: "Клиниката работи само в <strong>събота и неделя</strong>. Първи сеанс 08:00, последен 15:00; всеки сеанс е 45 минути.",
    bookStep1: "Изберете ден", bookStep2: "Изберете час", bookStep3: "Вашите данни", bookHint: "Първо изберете ден.",
    fLabelName: "Име и фамилия", fPhName: "Вашето име и фамилия", fLabelPhone: "Телефон",
    fLabelService: "Услуга", fServiceConsult: "Консултация / ще решим",
    fLabelNote: "Бележка (по избор)", fPhNote: "Какво искате да добавите...",
    fSubmit: "Потвърди записването", fSubmitHint: "След потвърждение заявката ви се изпраща към клиниката чрез WhatsApp.",
    contactTitle: "Свържете се с нас", contactLocation: "България", contactWaText: "Пишете в WhatsApp",
    contactHours: "Събота и неделя · 08:00 – 16:00",
    contactCtaTitle: "Имате въпроси?", contactCtaText: "За информация относно процедурите и цените ни пишете в WhatsApp.", contactCtaBtn: "Пишете в WhatsApp",
    footerNote: "Този сайт е с информационна цел и не замества медицинска консултация.",
    // динамични / dinamik
    days: ["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],
    months: ["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],
    sumLabel: "Избран час:", sumPickTime: "изберете час", sumEmpty: "—",
    taken: "Зает", past: "Изминал час",
    errNamePhone: "Моля, въведете име и телефон.", errDayTime: "Моля, изберете ден и час.",
    toastReady: "Заявката ви е готова — отваря се WhatsApp...",
    waTitle: "Нова заявка за час", waClinic: "Клиника", waDate: "Дата", waTime: "Час", waService: "Услуга", waName: "Име", waPhone: "Телефон", waNote: "Бележка", waMin: "мин",
  },
  tr: {
    htmlLang: "tr",
    brandSub: "Estetik Klinik",
    navServices: "Hizmetler", navAbout: "Hakkında", navContact: "İletişim", navBook: "Randevu Al",
    heroEyebrow: "Bulgaristan · Estetik & Güzellik",
    heroTitle: "Doğal güzelliğinizi <em>uzman ellerde</em> ortaya çıkarın",
    heroLead: "Dr. Cihad Gök kliniğinde Botoks, PRP ve mezoterapi uygulamaları; kişiye özel, güvenli ve doğal sonuçlar için.",
    heroCtaBook: "Online Randevu Al", heroCtaServices: "Hizmetleri Gör",
    heroNote: "🗓️ Randevular yalnızca <strong>Cumartesi & Pazar</strong> · Her seans 45 dk",
    heroCardTitle: "Kişiye özel bakım", heroCardSub: "Her cilt eşsizdir",
    stat1: "Mutlu Hasta", stat2n: "10+ Yıl", stat2: "Deneyim", stat3: "Steril Ortam", stat4n: "Doğal", stat4: "Sonuçlar",
    servicesEyebrow: "Hizmetlerimiz", servicesTitle: "Size özel estetik çözümler",
    svc1Title: "Botoks", svc1Desc: "Mimik çizgileri ve kırışıklıkların doğal ve kontrollü şekilde giderilmesi.",
    svc2Title: "PRP", svc2Desc: "Kendi kanınızdan elde edilen plazma ile cilt yenileme ve saç dökülmesine destek.",
    svc3Title: "Mezoterapi", svc3Desc: "Vitamin ve mineral kokteyli ile cildin nemlendirilmesi, ışıltı ve canlılık.",
    aboutEyebrow: "Hakkında",
    aboutText: "Estetik uygulamalarda hastaların doğal görünümünü koruyan, abartısız ve güvenli sonuçları önceleyen bir yaklaşıma sahiptir. Her hasta için kişiye özel planlama yapar; konfor, hijyen ve memnuniyeti ön planda tutar.",
    aboutTick1: "Kişiye özel değerlendirme ve planlama", aboutTick2: "Steril ve modern klinik ortamı", aboutTick3: "Doğal ve dengeli sonuç anlayışı",
    bookEyebrow: "Randevu", bookTitle: "Online Randevu Al",
    bookSub: "Kliniğimiz yalnızca <strong>Cumartesi ve Pazar</strong> hizmet vermektedir. İlk seans 08:00, son seans 15:00; her seans 45 dakikadır.",
    bookStep1: "Gün seçin", bookStep2: "Saat seçin", bookStep3: "Bilgileriniz", bookHint: "Önce bir gün seçin.",
    fLabelName: "Ad Soyad", fPhName: "Adınız Soyadınız", fLabelPhone: "Telefon",
    fLabelService: "Hizmet", fServiceConsult: "Danışmanlık / Karar verilecek",
    fLabelNote: "Not (opsiyonel)", fPhNote: "Eklemek istedikleriniz...",
    fSubmit: "Randevuyu Onayla", fSubmitHint: "Onayladığınızda randevu talebiniz WhatsApp üzerinden kliniğe iletilir.",
    contactTitle: "Bize ulaşın", contactLocation: "Bulgaristan", contactWaText: "WhatsApp ile yazın",
    contactHours: "Cumartesi & Pazar · 08:00 – 16:00",
    contactCtaTitle: "Sorularınız mı var?", contactCtaText: "Uygulamalar ve fiyatlar hakkında bilgi almak için WhatsApp üzerinden bize yazabilirsiniz.", contactCtaBtn: "WhatsApp'tan Yaz",
    footerNote: "Bu site bilgilendirme amaçlıdır; tıbbi tavsiye yerine geçmez.",
    days: ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],
    months: ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],
    sumLabel: "Seçili randevu:", sumPickTime: "saat seçin", sumEmpty: "—",
    taken: "Dolu", past: "Geçmiş saat",
    errNamePhone: "Lütfen ad soyad ve telefon bilgisini girin.", errDayTime: "Lütfen gün ve saat seçin.",
    toastReady: "Randevu talebiniz hazır — WhatsApp açılıyor...",
    waTitle: "Yeni Randevu Talebi", waClinic: "Klinik", waDate: "Tarih", waTime: "Saat", waService: "Hizmet", waName: "Ad Soyad", waPhone: "Telefon", waNote: "Not", waMin: "dk",
  },
};

/* ---------- Помощни / Yardımcılar ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, "0");
const dayKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const LANG_KEY = "cg_lang";
let lang = localStorage.getItem(LANG_KEY) || CONFIG.defaultLang;
const t = () => I18N[lang];

/* Резервирани часове (на устройство) / Alınmış randevular (cihaz bazlı) */
const STORE_KEY = "cg_booked_slots";
const loadBooked = () => { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; } };
const saveBooked = (b) => localStorage.setItem(STORE_KEY, JSON.stringify(b));
let booked = loadBooked();

/* ---------- Състояние / Durum ---------- */
const state = { day: null, dayDate: null, slot: null };

/* ---------- Дни / Günler ---------- */
function buildDays() {
  const days = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cursor = new Date(today);
  while (days.length < CONFIG.weeksAhead * CONFIG.workingDays.length) {
    if (CONFIG.workingDays.includes(cursor.getDay())) days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getFullYear() - today.getFullYear() > 1) break;
  }
  return days;
}

function dayLabel(d) {
  return `${t().days[d.getDay()]} ${d.getDate()} ${t().months[d.getMonth()]} ${d.getFullYear()}`;
}

function renderDays() {
  const list = $("#daysList");
  const days = buildDays();
  list.innerHTML = "";
  days.forEach((d) => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "day" + (state.day === dayKey(d) ? " active" : "");
    el.dataset.key = dayKey(d);
    el.innerHTML = `<span><strong>${t().days[d.getDay()]}</strong><br><small>${d.getDate()} ${t().months[d.getMonth()]} ${d.getFullYear()}</small></span><span>›</span>`;
    el.addEventListener("click", () => selectDay(d, el));
    list.appendChild(el);
  });
}

function selectDay(d, el) {
  state.day = dayKey(d);
  state.dayDate = new Date(d);
  state.slot = null;
  $$(".day").forEach((x) => x.classList.remove("active"));
  el.classList.add("active");
  renderSlots(d);
  updateSummary();
}

/* ---------- Часове / Saatler ---------- */
function renderSlots(d) {
  const wrap = $("#slotsList");
  wrap.innerHTML = "";
  const key = dayKey(d);
  const takenForDay = booked[key] || [];
  const now = new Date();

  for (let i = 0; i < CONFIG.slotsPerDay; i++) {
    const startH = CONFIG.firstHour + i;
    const startLabel = `${pad(startH)}:00`;
    const endLabel = `${pad(startH)}:${pad(CONFIG.slotMinutes)}`;
    const slotDate = new Date(d); slotDate.setHours(startH, 0, 0, 0);
    const isTaken = takenForDay.includes(startLabel);
    const isPast = slotDate < now;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "slot" + (isTaken || isPast ? " taken" : "") + (state.slot === startLabel ? " active" : "");
    btn.innerHTML = `${startLabel}<small>${startLabel}–${endLabel}</small>`;
    if (isTaken || isPast) {
      btn.disabled = true;
      btn.title = isPast ? t().past : t().taken;
    } else {
      btn.addEventListener("click", () => {
        state.slot = startLabel;
        $$(".slot").forEach((x) => x.classList.remove("active"));
        btn.classList.add("active");
        updateSummary();
      });
    }
    wrap.appendChild(btn);
  }
}

/* ---------- Резюме / Özet ---------- */
function updateSummary() {
  const sum = $("#summary");
  const btn = $("#submitBtn");
  const label = state.dayDate ? dayLabel(state.dayDate) : "";
  if (state.day && state.slot) {
    sum.innerHTML = `${t().sumLabel} <strong>${label} · ${state.slot}</strong>`;
    btn.disabled = false;
  } else {
    sum.innerHTML = `${t().sumLabel} <strong>${label ? label + " · " + t().sumPickTime : t().sumEmpty}</strong>`;
    btn.disabled = true;
  }
}

/* ---------- Изпращане / Gönderim ---------- */
function handleSubmit(e) {
  e.preventDefault();
  const name = $("#fName").value.trim();
  const phone = $("#fPhone").value.trim();
  const service = $("#fService").value;
  const note = $("#fNote").value.trim();

  if (!name || !phone) { showToast(t().errNamePhone); return; }
  if (!state.day || !state.slot) { showToast(t().errDayTime); return; }

  booked[state.day] = booked[state.day] || [];
  if (!booked[state.day].includes(state.slot)) booked[state.day].push(state.slot);
  saveBooked(booked);

  const L = t();
  const msg =
    `*${L.waTitle}*%0A` +
    `${L.waClinic}: ${encodeURIComponent(CONFIG.clinicName)}%0A` +
    `${L.waDate}: ${encodeURIComponent(dayLabel(state.dayDate))}%0A` +
    `${L.waTime}: ${encodeURIComponent(state.slot)} (${CONFIG.slotMinutes} ${L.waMin})%0A` +
    `${L.waService}: ${encodeURIComponent(service)}%0A` +
    `${L.waName}: ${encodeURIComponent(name)}%0A` +
    `${L.waPhone}: ${encodeURIComponent(phone)}` +
    (note ? `%0A${L.waNote}: ${encodeURIComponent(note)}` : "");

  showToast(L.toastReady);
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, "_blank");

  renderSlots(state.dayDate);
  e.target.reset();
  state.slot = null;
  updateSummary();
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(text) {
  const el = $("#toast");
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 4000);
}

/* ---------- Прилагане на език / Dili uygula ---------- */
function applyLang() {
  const L = t();
  document.documentElement.lang = L.htmlLang;
  $$("[data-i18n]").forEach((el) => { const k = el.dataset.i18n; if (L[k] != null) el.textContent = L[k]; });
  $$("[data-i18n-html]").forEach((el) => { const k = el.dataset.i18nHtml; if (L[k] != null) el.innerHTML = L[k]; });
  $$("[data-i18n-ph]").forEach((el) => { const k = el.dataset.i18nPh; if (L[k] != null) el.placeholder = L[k]; });
  $$("#langSwitch button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  renderDays();
  if (state.dayDate) renderSlots(state.dayDate);
  updateSummary();
}

function setLang(next) {
  if (next === lang) return;
  lang = next;
  localStorage.setItem(LANG_KEY, lang);
  applyLang();
}

/* ---------- Контакт / İletişim ---------- */
function wireContact() {
  const wa = `https://wa.me/${CONFIG.whatsapp}`;
  $("#contactWa").href = wa;
  $("#contactWaBtn").href = wa;
  $("#contactPhone").href = `tel:+${CONFIG.whatsapp}`;
  $("#contactPhone").textContent = CONFIG.phoneDisplay;
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- Навигация / Menü ---------- */
function wireNav() {
  const toggle = $("#navToggle");
  const links = $(".nav__links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  $$(".nav__links a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
  $$("#langSwitch button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
}

/* ---------- Старт / Başlat ---------- */
document.addEventListener("DOMContentLoaded", () => {
  wireContact();
  wireNav();
  $("#bookingForm").addEventListener("submit", handleSubmit);
  applyLang();
});
