<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Telegram][telegram-shield]][telegram-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="gambar/logo.png" alt="Logo" width="80" height="80">
    <!-- <img src="gambar/logo.png"> -->
  </a>

  <h3 align="center">Bot Pengingat Sholat HMTI</h3>

  <p align="center">
    Bot telegram sederhana sebagai pengingat sholat
    <br />
    <a href="https://github.com/uluumbch/bot-pengingat-sholat-hmti"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/uluumbch/bot-pengingat-sholat-hmti/issues">Report Bug</a>
    ·
    <a href="https://github.com/uluumbch/bot-pengingat-sholat-hmti/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Daftar isi</summary>

- [Tentang Projek](#tentang-projek)
  - [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Memulai](#memulai)
  - [Prasyarat](#prasyarat)
  - [Konfigurasi](#konfigurasi)
- [Penggunaan](#penggunaan)
- [Masalah yang sering muncul](#masalah-yang-sering-muncul)
  - [cara menemukan grup id](#cara-menemukan-grup-id)
  - [Mengatasi Bot tidak mengirim pesan pada waktu tertentu](#mengatasi-bot-tidak-mengirim-pesan-pada-waktu-tertentu)
  - [Cara menambahkan gambar](#cara-menambahkan-gambar)
- [Berkontribusi](#berkontribusi)
- [Lisensi](#lisensi)
- [Kontak](#kontak)
  </details>

<!-- ABOUT THE PROJECT -->

## Tentang Projek

<p align = "center">
<img src="gambar/screenshot.png">
</p>
Sebuah bot sederhana yang dapat mengirimkan pesan secara otomatis ke grup telegram. Bot akan mengirimkan pesan(berupa gambar) berdasarkan waktu sholat pada hari itu.

Kenapa menggunakan Bot?

- Bot dapat mengirimkan pesan secara otomatis sesuai dengan waktu yang kita tentukan.
- Tidak perlu sumber daya yang besar untuk dapat menjalankan Bot di server lokal
- Bot tidak memiliki nomor telepon seperti akun biasa. Sehingga tidak mungkin untuk terkena spam.

### Teknologi yang Digunakan

Beberapa teknologi yang digunakan untuk membangun Bot ini diantaranya:

- [Node.js](http://nodejs.org/)
  <details>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width=100/>

  Node.js adalah runtime environment untuk JavaScript yang bersifat open-source dan cross-platform. Dengan Node.js kita dapat menjalankan kode JavaScript di mana pun, tidak hanya terbatas pada lingkungan browser.

  Node.js menjalankan V8 JavaScript engine (yang juga merupakan inti dari Google Chrome) di luar browser. Ini memungkinkan Node.js memiliki performa yang tinggi.
  </details>

- [Axios](https://www.npmjs.com/package/axios)
  <details>
  Axios adalah sebuah library pada Node js yang dapat digunakan untuk melakukan fetch pada API. Axios lebih mudah digunakan jika dibandingkan dengan library lain yang juga digunakan untuk fetch API, selain itu axios juga gratis (open source)
  </details>
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api/)
  <details>
  package pada Node.js yang digunakan untuk berkomunikasi dengan <a href="https://github.com/yagop/node-telegram-bot-api/">API Telegram Bot</a>. Package ini membantu kita untuk mengirim dan menerima API telegram.
  </details>
- [node-cron](https://github.com/node-cron/node-cron)
  <details>
  Paket ini memungkinkan kita untuk menjadwalkan perintah(menjalankan fungsi) dan mengotomatisasi perintah di node.js menggunakan sintaks crontab.

  Kita menggunakan <a href="https://en.wikipedia.org/wiki/Cron">Cron</a> agar dapat menjalankan perintah secara otomatis atau melakukan perintah seperti menjalankan sebuah fungsi sesuai dengan jadwal yang kita inginkan.
  </details>

<!-- GETTING STARTED -->

## Memulai

Untuk dapat menjalankan projek ini di komputer lokal kita atau melakukan pengembangan lebih jauh, ikuti langkah-langkah dibawah ini:

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prasyarat

- node js

  download disini

  [![Node Js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download/)

  cek versi

  ```sh
  node -v
  ```

  atau

  ```sh
  node --version
  ```

- npm

  instal npm

  ```sh
  npm install npm@latest -g
  ```

  cek versi npm untuk memastikan sudah terinstal

  ```sh
  npm -v
  ```

  atau

  ```sh
  npm --version
  ```

### Konfigurasi

1. Buat bot telegram terlebih dahulu melalui [@botfather](t.me/botfather). Lalu dapatkan token bot dan tambahkan bot ke dalam grup.
2. Download repo atau clone dengan cara
   ```sh
   git clone https://github.com/uluumbch/bot-pengingat-sholat-hmti.git
   ```
3. Buka hasil download menggunakan kode editor
4. Instal paket npm yang dibutuhkan. Jalankan perintah
   ```sh
   npm install
   ```
5. Buka file `index.js` dan edit pada bagian berikut

   ```JS
   const token = "12345:abcdefghijklmnxasas"; // tulis bot token disini
   const id_grup = "-123456789"; // id grup anda disini
   const zona_waktu = "Asia/Makassar"; // konfigurasi zona waktu
   ```

   untuk zona waktu dapat dilihat pada [list zona waktu](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

   untuk mengetahui grup id anda, baca bagian [cara menemukan id grup](#cara-menemukan-grup-id)

6. Konfigurasi waktu sholat yang ingin ditampilkan. Ubah menjadi `false` jika tidak ingin tampil di waktu sholat tertentu
   ```js
   const waktuSholat = {
     imsak: false,
     subuh: true,
     dzuhur: true,
     ashar: true,
     maghrib: true,
     buka_puasa: false,
     isya: true,
   };
   ```

<!-- USAGE EXAMPLES -->

## Penggunaan

jalankan perintah

```
node index
```

Setelah kode dijalankan kita dapat mengirimkan pesan ke bot untuk dapat menerima respon. Coba buka bot dan klik start atau kirim pesan `/start`. Jika tidak ada error maka bot akan memberikan balasan kepada pengirim pesan. Untuk dapat mengetahui hasil respon bot dapat dilihat pada konsol.

_Untuk mengedit perintah silakan membaca [Dokumentasi Telegram](https://core.telegram.org/bots/api) atau [Dokumentasi node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api/)_

<!-- CONTRIBUTING -->

## Masalah yang sering muncul

### cara menemukan grup id

1. Tambahkan bot anda ke grup
2. Buka terminal dan jalankan server bot dengan perintah `node index`
3. Kirim pesan di grup
4. Akan ada response pada console, bagian id grup dapat dilihat di `chat.id`
   ```js
   {
   message_id: 1024,
   from: {
    id: 64545345,
    is_bot: false,
    first_name: 'nama',
    last_name: 'akun',
    username: 'usernameakun',
    language_code: 'id'
   },
   chat: {
    id: -591569107, // kode grup id anda disini
    title: 'Nama grup',
    type: 'group',
    all_members_are_administrators: true
   },
   date: 1652200084,
   text: 'test kirim pesan pada grup'
   }
   ```

### Mengatasi Bot tidak mengirim pesan pada waktu tertentu

Jika bot tidak berjalan pada waktu tertentu, buka terminal pada server dan lihat apakah ada error.
untuk mengirim pesan secara manual melalui bot ikuti perintah berikut:

1. Edit file `manual.js` sesuaikan isi dengan pesan yang diinginkan
2. Ubah menjadi `true` pada waktu sholat yang ingin dikirimkan ucapan.
3. Jika ingin menggunakan caption, _uncomment_ baris caption. contoh:
   ```js
   bot.sendPhoto(
     id_grup,
     `gambar/subuh/${subuh[Math.floor(Math.random() * subuh.length)]}`
     // , {caption: "Selamat menunaikan sholat subuh",}
   );
   ```
   ubah menjadi
   ```js
   bot.sendPhoto(
     id_grup,
     `gambar/subuh/${subuh[Math.floor(Math.random() * subuh.length)]}`,
     { caption: "Selamat menunaikan sholat subuh" }
   );
   ```

### Cara menambahkan gambar

Untuk menambahkan gambar baru, kita hanya perlu menambahkan gambar ke folder yang telah ada. Misalkan ingin menambahkan gambar pada waktu maghrib maka tambahkan gambar ke folder `/gambar/maghrib` begitu juga dengan gambar lain, tempatkan sesuai pada folder masing-masing.

## Berkontribusi

Dengan berkontribusi kita dapat saling membantu untuk membuat sebuah projek yang lebih baik. Kontribusi anda akan sangat berpengaruh untuk kesempurnaan sebuah sistem. **Segala jenis kontribusi anda akan sangat berguna**

1. Fork projek ini
2. Buat branch baru (`git checkout branchBaru`)
3. Commit perubahan (`git commit -m 'menambahkan fitur baru yang keren'`)
4. Push perubahan ke branch anda (`git push origin branchBaru`)
5. Lakukan pull request

<!-- LICENSE -->

## Lisensi

Projek ini didistribusikan dibawah lisensi MIT. Untuk informasi lebih lengkap silakan merujuk pada `LICENSE`.

<!-- CONTACT -->

## Kontak

Bachrul Uluum - [@uluumbch](t.me/uluumbch) - halo.uluum@gmail.com

Link Projek: [https://github.com/uluumbch/bot-pengingat-sholat-hmti](https://github.com/uluumbch/bot-pengingat-sholat-hmti)

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/uluumbch/bot-pengingat-sholat-hmti.svg?style=for-the-badge
[contributors-url]: https://github.com/uluumbch/bot-pengingat-sholat-hmti/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/uluumbch/bot-pengingat-sholat-hmti.svg?style=for-the-badge
[forks-url]: https://github.com/uluumbch/bot-pengingat-sholat-hmti/network/members
[stars-shield]: https://img.shields.io/github/stars/uluumbch/bot-pengingat-sholat-hmti.svg?style=for-the-badge
[stars-url]: https://github.com/uluumbch/bot-pengingat-sholat-hmti/stargazers
[issues-shield]: https://img.shields.io/github/issues/uluumbch/bot-pengingat-sholat-hmti.svg?style=for-the-badge
[issues-url]: https://github.com/uluumbch/bot-pengingat-sholat-hmti/issues
[license-shield]: https://img.shields.io/github/license/uluumbch/bot-pengingat-sholat-hmti.svg?style=for-the-badge
[license-url]: https://github.com/uluumbch/bot-pengingat-sholat-hmti/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/bachrul-uluum
[telegram-shield]: https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white
[telegram-url]: t.me/uluumbch

```

```

```

```
