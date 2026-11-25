# WorkMate — Marketing To-Do List + Pingo AI

Aplikasi to-do list marketing yang ringan, satu file HTML, bisa dibuka offline. Dilengkapi maskot **Pingo**, asisten AI yang bisa ngobrol, bantu tugas, baca berkas, dan pakai API key (Groq, Gemini, OpenRouter, Claude).

## Fitur utama

- To-do list dengan prioritas, tenggat, campaign
- Kalender & jadwal konten
- Laporan progres
- Tema gelap/terang + custom warna
- **Pingo AI**: asisten yang bisa memakai kunci API (Groq / Gemini / OpenRouter / Claude)
- Baca file (PDF, gambar, Excel, dll)
- Data tersimpan di browser (localStorage)

## Cara pakai cepat (tanpa GitHub)

1. Download `index.html` atau `WorkMate_Pingo_AI.html`
2. Buka file tersebut di browser (double-click)
3. Selesai — tidak perlu server

## Host di GitHub Pages (gratis)

### 1. Buat repository baru
- Buka [github.com/new](https://github.com/new)
- Nama repo bebas (contoh: `workmate` atau `pingo-todo`)
- Public
- **Jangan** centang "Add a README" (karena kita sudah punya)

### 2. Upload file
Upload kedua file ini ke root repository:
- `index.html` ← wajib (ini yang akan ditampilkan)
- `README.md` (opsional)

Cara termudah:
1. Di halaman repo → klik **Add file** → **Upload files**
2. Drag & drop `index.html` dan `README.md`
3. Commit

Atau pakai Git:

```bash
git clone https://github.com/USERNAME/NAMA-REPO.git
cd NAMA-REPO
# salin index.html dan README.md ke sini
git add .
git commit -m "Add WorkMate + Pingo"
git push
```

### 3. Aktifkan GitHub Pages
1. Buka repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` (atau `master`) → folder `/ (root)`
4. Save

Tunggu 1–2 menit, lalu buka:
`https://USERNAME.github.io/NAMA-REPO/`

## Mengaktifkan Pingo AI (opsional)

1. Buka aplikasi → **Pengaturan → Pingo**
2. Pilih penyedia (disarankan **Groq** karena ada free tier)
3. Ambil API key di [console.groq.com/keys](https://console.groq.com/keys)
4. Tempel di kolom Kunci API → simpan

Setelah itu Pingo bisa ngobrol seperti chatbot biasa, mendukung bold, tabel, list, dll.

## Catatan

- Semua data (tugas, chat, pengaturan) disimpan di **localStorage** browser.
- Tidak ada backend. Aman untuk dipakai offline setelah dibuka sekali.
- API key hanya disimpan di browser kamu dan dikirim langsung ke penyedia AI.

## Lisensi

Bebas dipakai dan dimodifikasi untuk keperluan pribadi maupun tim.
