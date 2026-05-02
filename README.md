# Auth Praktikum

**Nama:** Benita Aryani
**NIM:** 2410501023
**Kelas:** B

---

## Deskripsi

Aplikasi mobile authentication dan authorization menggunakan React Native (Expo blank template) dengan Firebase Authentication dan Firestore sebagai provider utama.

---

## Tech Stack

| Package | Versi |
|---|---|
| expo | ~54.0.33 |
| react | 19.1.0 |
| react-native | 0.81.5 |
| firebase | ^12.12.1 |
| @react-navigation/native | ^7.2.2 |
| @react-navigation/native-stack | ^7.14.12 |
| @react-native-async-storage/async-storage | 2.2.0 |
| expo-secure-store | ~15.0.8 |
| expo-local-authentication | ~17.0.8 |

---

## Cara Install & Run

```bash
# 1. Clone repository
git clone https://github.com/lensilen/2410501023-P9-auth-praktikum.git

# 2. Masuk ke folder project
cd 2410501023-P9-auth-praktikum

# 3. Install dependencies
npm install

# 4. Jalankan project
npx expo start
```

Scan QR code menggunakan aplikasi **Expo Go** di HP.

---

## Tugas Mandiri

**Role-based Authorization** — user yang register otomatis mendapat role `user` di Firestore. Admin diarahkan ke AdminScreen, user biasa ke HomeScreen.

**Auto-logout Idle** — app otomatis logout setelah 5 menit tidak aktif menggunakan `AppState` + `setTimeout`.

---

## Video Demo

> Link video demo: [drive](https://drive.google.com/file/d/1SfmnPv9Re4HNAfG3s_7NOSl5mdcGHF9P/view?usp=sharing)

---

## Referensi

- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/)
- [Expo LocalAuthentication](https://docs.expo.dev/versions/latest/sdk/local-authentication/)
- [React Native AppState](https://reactnative.dev/docs/appstate)