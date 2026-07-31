# SIPRAKATA Landing Page

Landing page statis SIPRAKATA untuk deploy di Vercel. Murni HTML/CSS/JS tanpa PHP.

## Isi Repo

- `index.html` — halaman landing + dokumentasi (asal: `siprakata/resources/views/landing.blade.php`)
- `docs/` — 8 diagram PNG (use case, activity, sequence, ERD, arsitektur, user flow, class)
- `siprakata.apk` — APK aplikasi mobile (~50 MB)
- `flutter/` — build web Flutter (base href `/flutter/`)
- `vercel.json` — rewrites untuk `/login` (ke backend) dan `/flutter`

## Catatan Penting

- **Vercel tidak bisa menjalankan PHP/Laravel.** Tombol Login diarahkan (rewrite) ke backend yang hidup.
- Ganti URL di `vercel.json` (source `/login`) ke URL backend permanen bila sudah di-host (Railway/VPS).
- API aplikasi Flutter tertanam di `flutter/main.dart.js` → URL ngrok `paralysis-shelf-ivory.ngrok-free.dev`. Ganti dengan URL backend permanen lalu rebuild: `flutter build web --base-href /flutter/`.
- Total ukuran deploy ~84 MB (di bawah limit 100 MB Vercel).

## Deploy

1. Import repo ini ke Vercel (Import Project → GitHub → repo ini).
2. Framework Preset: `Other` (tanpa build command).
3. Deploy. Landing langsung tampil di root.
