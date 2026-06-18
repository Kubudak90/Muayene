# Dr. Cihad Gök — Estetik Klinik

Botoks · PRP · Mezoterapi kliniği için tek sayfa tanıtım sitesi ve online randevu sistemi (Bulgaristan).

## Özellikler
- **İki dilli**: Bulgarca (varsayılan) + Türkçe — sağ üstteki BG/TR düğmesiyle anında geçiş, seçim hatırlanır
- Şık, mobil uyumlu tanıtım sitesi (Hizmetler, Hakkında, İletişim)
- Online randevu sistemi:
  - Yalnızca **Cumartesi & Pazar**
  - İlk seans **08:00**, saatte bir, günde **8 hasta** (08:00 → 15:00)
  - Her seans **45 dakika**
  - Önümüzdeki 6 haftasonu otomatik listelenir
  - Randevu talebi tek tıkla **WhatsApp** üzerinden kliniğe iletilir
  - Dolan/geçmiş saatler işaretlenir (cihaz bazlı)

## Kurulum / Ayarlar
Klinik telefon ve WhatsApp numarasını `script.js` dosyasının başındaki `CONFIG`
bölümünden güncelleyin:

```js
const CONFIG = {
  whatsapp: "359000000000",          // WhatsApp numarası (sadece rakam, + olmadan)
  phoneDisplay: "+359 00 000 00 00",  // Sitede gösterilen telefon
  ...
};
```

## Çalıştırma
Saf statik site — herhangi bir derleme gerektirmez. `index.html` dosyasını
tarayıcıda açmak yeterlidir. Canlı yayın için Vercel / GitHub Pages kullanılabilir.

## Not
Randevu eşleştirmesi şu an cihaz bazlı (localStorage) yapılmaktadır; tüm
kullanıcılar arasında ortak/merkezi takvim istenirse bir backend (ör. Supabase)
eklenebilir.
