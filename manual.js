const Telegram = require("node-telegram-bot-api");

const token = "12345:abcdefghijklmnxasas"; // tulis bot token disini
const id_grup = "-123456789"; // id grup anda disini

const bot = new Telegram(token, { polling: true });
const fs = require("fs");

// file gambar untuk dikirim
// tiap variabel berupa array dari nama-nama file
// file ini tidak perlu diubah
let subuh = fs.readdirSync("./gambar/subuh");
let dzuhur = fs.readdirSync("./gambar/dzuhur");
let ashar = fs.readdirSync("./gambar/ashar");
let maghrib = fs.readdirSync("./gambar/maghrib");
let isya = fs.readdirSync("./gambar/isya");

const waktuSholat = {
  imsak: false,
  subuh: true, // hanya gambar subuh yang akan dikirim
  dzuhur: false,
  ashar: false,
  maghrib: false,
  buka_puasa: false,
  isya: false,
};

if (waktuSholat.imsak) {
  bot.sendPhoto(id_grup, `gambar/IMSAK.png`),
    { caption: "Tulis caption disini" };
} else if (waktuSholat.subuh) {
  bot.sendPhoto(
    id_grup,
    `gambar/subuh/${subuh[Math.floor(Math.random() * subuh.length)]}`
    // , {caption: "Selamat menunaikan sholat subuh",}
  );
} else if (waktuSholat.dzuhur) {
  bot.sendPhoto(
    id_grup,
    `gambar/dzuhur/${dzuhur[Math.floor(Math.random() * dzuhur.length)]}`
    // , {caption: "Selamat menunaikan sholat dzuhur",}
  );
} else if (waktuSholat.ashar) {
  bot.sendPhoto(
    id_grup,
    `gambar/ashar/${ashar[Math.floor(Math.random() * ashar.length)]}`
    // , {caption: "Selamat menunaikan sholat ashar",}
  );
} else if (waktuSholat.maghrib) {
  bot.sendPhoto(
    id_grup,
    `gambar/maghrib/${maghrib[Math.floor(Math.random() * maghrib.length)]}`
    // , {caption: "Selamat menunaikan sholat maghrib",}
  );
} else if (waktuSholat.buka_puasa) {
  bot.sendPhoto(
    id_grup,
    "gambar/BUKA.png"
    // {caption:"Selamat berbuka puasa untuk wilayah Banjarmasin dan sekitarnya",}
  );
} else if (waktuSholat.isya) {
  bot.sendPhoto(
    id_grup,
    `gambar/isya/${isya[Math.floor(Math.random() * isya.length)]}`,
    { caption: "Selamat menunaikan sholat isya" }
  );
}
