
# Proje Takip Sistemi

## Genel Bakış

Bu proje, ekiplerin görev yönetimini ve kullanıcı yönetimini kolaylaştırmak için geliştirilmiş tam kapsamlı bir Proje Takip Sistemi'dir. Modern bir arayüz ve güçlü bir backend ile görev atama, durum takibi, kullanıcı yönetimi ve bildirimler gibi birçok özelliği destekler.

## İçerik

- [Özellikler](#özellikler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Teknolojiler](#teknolojiler)
- [Dizin Yapısı](#dizin-yapısı)
- [API Endpoints](#api-endpoints)
- [Geliştirici Notları](#geliştirici-notları)

---

## Özellikler

- **Kullanıcı Yönetimi:** Kayıt, giriş, şifre değiştirme, kullanıcı ekleme/silme, aktif/pasif yapma.
- **Görev Yönetimi:** Görev oluşturma, güncelleme, silme, alt görevler, öncelik ve durum takibi (To Do, In Progress, Completed).
- **Takım Yönetimi:** Görevleri birden fazla kullanıcıya atama.
- **Bildirimler:** Görev atamaları ve değişiklikler için bildirim paneli.
- **Yönetici Paneli:** Sadece admin yetkisiyle kullanıcı ve görev yönetimi.
- **Modern Arayüz:** Responsive, kullanıcı dostu ve hızlı arayüz.
- **İstatistikler ve Grafikler:** Görevler ve kullanıcılar için özet ve grafikler.
- **Firebase ile Dosya Yükleme:** Görevler için dosya/asset ekleme.

---

## Kurulum

### Gereksinimler

- Node.js (v18+ önerilir)
- MongoDB (lokal veya bulut)
- (Opsiyonel) Firebase hesabı

### 1. Backend (server) Kurulumu

```powershell
cd server
npm install
```

`.env` dosyası oluşturun ve aşağıdaki gibi doldurun:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

Sunucuyu başlatmak için:

```powershell
npm start
```

### 2. Frontend (client) Kurulumu

```powershell
cd client
npm install
```

`.env` dosyası oluşturun ve aşağıdaki gibi doldurun:

```
VITE_APP_BASE_URL=http://localhost:5000
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
```

Projeyi başlatmak için:

```powershell
npm run dev
```

---

## Kullanım

- `http://localhost:5173` adresinden frontend arayüzüne erişebilirsiniz.
- Kayıt olun veya admin olarak giriş yapın.
- Görev oluşturun, ekibe atayın, durumunu ve önceliğini yönetin.
- Bildirim panelinden güncellemeleri takip edin.

---

## Teknolojiler

### Frontend

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit & RTK Query
- React Router
- React Hook Form
- Firebase (dosya yükleme için)
- Recharts (grafikler için)
- React Toastify (bildirimler için)

### Backend

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT ile kimlik doğrulama
- Bcrypt ile şifreleme
- CORS, Morgan, Cookie-Parser

---

## Dizin Yapısı

```
projetakipsistemi_ime_web-main/
│
├── client/      # Frontend React uygulaması
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   └── assets/
│   └── ...
│
└── server/      # Backend Node.js/Express API
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middlewares/
    └── ...
```

---

## API Endpoints (Örnekler)

### Kullanıcı

- `POST /api/user/register` – Kullanıcı kaydı
- `POST /api/user/login` – Giriş
- `GET /api/user/get-team` – Takım listesini getir (admin)
- `PUT /api/user/profile` – Profil güncelle

### Görev

- `POST /api/task/create` – Görev oluştur (admin)
- `GET /api/task/` – Tüm görevleri getir
- `GET /api/task/dashboard` – Dashboard istatistikleri
- `PUT /api/task/update/:id` – Görev güncelle (admin)
- `DELETE /api/task/delete-restore/:id` – Görev sil/geri al (admin)

---

## Geliştirici Notları

- Frontend ve backend ayrı portlarda çalışır, CORS ayarları yapılmıştır.
- JWT ile kimlik doğrulama ve rol bazlı yetkilendirme vardır.
- Firebase sadece dosya yükleme için kullanılır, opsiyoneldir.
- Proje, modern ve ölçeklenebilir bir mimariye sahiptir.

---

Daha fazla bilgi veya katkı için lütfen proje dosyalarını inceleyin veya iletişime geçin.

---
