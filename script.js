/* =========================================================
   Dr. Cihad Gök — Estetik Klinik | Randevu Sistemi
   --------------------------------------------------------
   AYARLAR: Klinik telefon/WhatsApp numarasını buradan
   güncelleyin. Numarayı ülke koduyla, sadece rakam olarak
   girin (örn. Bulgaristan: 359XXXXXXXXX).
   ========================================================= */
const CONFIG = {
  whatsapp: "359000000000",          // WhatsApp (sadece rakam, + olmadan)
  phoneDisplay: "+359 00 000 00 00",  // Sitede gösterilen telefon
  clinicName: "Dr. Cihad Gök Estetik Klinik",

  // Çalışma kuralları
  workingDays: [6, 0],   // 6 = Cumartesi, 0 = Pazar
  firstHour: 8,          // İlk hasta saati
  slotsPerDay: 8,        // Günlük hasta sayısı (saatte bir)
  slotMinutes: 45,       // Muayene süresi (dk)
  weeksAhead: 6,         // Kaç haftasonu ileriye randevu açılsın
};

/* ---------- Yardımcılar ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, "0");
const DAY_NAMES = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const MONTHS = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

const dayKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/* Yerel olarak alınmış randevular (çift kayıt önleme — cihaz bazlı) */
const STORE_KEY = "cg_booked_slots";
const loadBooked = () => {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch { return {}; }
};
const saveBooked = (b) => localStorage.setItem(STORE_KEY, JSON.stringify(b));
let booked = loadBooked();

/* ---------- Durum ---------- */
const state = { day: null, dayLabel: "", slot: null };

/* ---------- Günleri üret ---------- */
function buildDays() {
  const days = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cursor = new Date(today);
  while (days.length < CONFIG.weeksAhead * CONFIG.workingDays.length) {
    if (CONFIG.workingDays.includes(cursor.getDay())) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getFullYear() - today.getFullYear() > 1) break; // emniyet
  }
  return days;
}

function renderDays() {
  const list = $("#daysList");
  const days = buildDays();
  list.innerHTML = "";
  days.forEach((d) => {
    const key = dayKey(d);
    const el = document.createElement("button");
    el.type = "button";
    el.className = "day";
    el.dataset.key = key;
    el.innerHTML = `<span><strong>${DAY_NAMES[d.getDay()]}</strong><br><small>${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}</small></span><span>›</span>`;
    el.addEventListener("click", () => selectDay(d, el));
    list.appendChild(el);
  });
}

function selectDay(d, el) {
  state.day = dayKey(d);
  state.dayLabel = `${DAY_NAMES[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  state.slot = null;
  $$(".day").forEach((x) => x.classList.remove("active"));
  el.classList.add("active");
  renderSlots(d);
  updateSummary();
}

/* ---------- Saatleri üret ---------- */
function renderSlots(d) {
  const wrap = $("#slotsList");
  wrap.innerHTML = "";
  const key = dayKey(d);
  const takenForDay = booked[key] || [];
  const now = new Date();

  for (let i = 0; i < CONFIG.slotsPerDay; i++) {
    const startH = CONFIG.firstHour + i;
    const endMin = CONFIG.slotMinutes;
    const startLabel = `${pad(startH)}:00`;
    const endLabel = `${pad(startH)}:${pad(endMin)}`;

    const slotDate = new Date(d);
    slotDate.setHours(startH, 0, 0, 0);

    const isTaken = takenForDay.includes(startLabel);
    const isPast = slotDate < now;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "slot" + (isTaken || isPast ? " taken" : "");
    btn.innerHTML = `${startLabel}<small>${startLabel}–${endLabel}</small>`;
    if (isTaken || isPast) {
      btn.disabled = true;
      btn.title = isPast ? "Geçmiş saat" : "Dolu";
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

/* ---------- Özet & buton ---------- */
function updateSummary() {
  const sum = $("#summary");
  const btn = $("#submitBtn");
  if (state.day && state.slot) {
    sum.innerHTML = `Seçili randevu: <strong>${state.dayLabel} · ${state.slot}</strong>`;
    btn.disabled = false;
  } else {
    sum.innerHTML = `Seçili randevu: <strong>${state.dayLabel ? state.dayLabel + " · saat seçin" : "—"}</strong>`;
    btn.disabled = true;
  }
}

/* ---------- Form gönderimi ---------- */
function handleSubmit(e) {
  e.preventDefault();
  const name = $("#fName").value.trim();
  const phone = $("#fPhone").value.trim();
  const service = $("#fService").value;
  const note = $("#fNote").value.trim();

  if (!name || !phone) {
    showToast("Lütfen ad soyad ve telefon bilgisini girin.");
    return;
  }
  if (!state.day || !state.slot) {
    showToast("Lütfen gün ve saat seçin.");
    return;
  }

  // Yerel olarak slotu dolu işaretle (cihaz bazlı çift kayıt önleme)
  booked[state.day] = booked[state.day] || [];
  if (!booked[state.day].includes(state.slot)) booked[state.day].push(state.slot);
  saveBooked(booked);

  // WhatsApp mesajı oluştur
  const msg =
    `*Yeni Randevu Talebi*%0A` +
    `Klinik: ${encodeURIComponent(CONFIG.clinicName)}%0A` +
    `Tarih: ${encodeURIComponent(state.dayLabel)}%0A` +
    `Saat: ${encodeURIComponent(state.slot)} (${CONFIG.slotMinutes} dk)%0A` +
    `Hizmet: ${encodeURIComponent(service)}%0A` +
    `Ad Soyad: ${encodeURIComponent(name)}%0A` +
    `Telefon: ${encodeURIComponent(phone)}` +
    (note ? `%0ANot: ${encodeURIComponent(note)}` : "");

  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${msg}`;

  showToast("Randevu talebiniz hazır — WhatsApp açılıyor...");
  window.open(waUrl, "_blank");

  // UI'yi tazele
  renderSlots(new Date(state.day));
  e.target.reset();
  state.slot = null;
  updateSummary();
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 4000);
}

/* ---------- İletişim linkleri ---------- */
function wireContact() {
  const wa = `https://wa.me/${CONFIG.whatsapp}`;
  $("#contactWa").href = wa;
  $("#contactWaBtn").href = wa;
  $("#contactPhone").href = `tel:+${CONFIG.whatsapp}`;
  $("#contactPhone").textContent = CONFIG.phoneDisplay;
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- Mobil menü ---------- */
function wireNav() {
  const toggle = $("#navToggle");
  const links = $(".nav__links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  $$(".nav__links a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

/* ---------- Başlat ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderDays();
  wireContact();
  wireNav();
  $("#bookingForm").addEventListener("submit", handleSubmit);
});
