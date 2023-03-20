const axios = require("axios");
const cron = require("node-cron");
const Telegram = require("node-telegram-bot-api");

const db = require("./db");

const token = "12345:abcdefghijklmnxasas"; // tulis bot token disini
const id_grup = "-123456789"; // id grup anda disini
const zona_waktu = "Asia/Makassar"; // konfigurasi zona waktu dapat dilihat di https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

const bot = new Telegram(token, { polling: true });
const luxon = require("luxon");
const fs = require("fs");

const waktuSholat = {
  imsak: true,
  subuh: true,
  dzuhur: true,
  ashar: true,
  maghrib: true,
  buka_puasa: true,
  isya: true,
};

bot.onText(/\/perintah/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Halo ${msg.from.username} silakan pilih perintah yang diinginkan`,
    {
      reply_markup: {
        keyboard: [["Jadwal Sholat"], ["Quotes Islami"]],
        resize_keyboard: true,
        one_time_keyboard: true
      },
    }
  );
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Halo ${msg.from.first_name} ${msg.from.last_name}. Terimakasih telah mencoba bot ini.
Bot ini masih dalam tahap pengembangan. Untuk feedback atau saran silakan hubungi t.me/uluumbch
silakan pilih perintah yang diinginkan`,
    {
      reply_markup: {
        keyboard: [["Jadwal Sholat"], ["Quotes Islami"]],
      },
    }
  );
});

bot.onText(/\/info/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Bot ini dijalankan menggunakan Framework *Node.js* dan dibuat di bawah bahasa JavaScript.
Source kode bot dipublikasikan secara open source dan dapat dilihat di github - https://github.com/uluumbch/bot-pengingat-sholat-hmti`,
    {
      parse_mode: "Markdown",
    }
  );
});

bot.on("message", (msg) => {
  console.log(msg);

  // bot.sendMessage(msg.chat.id, "Message logged to console!");
  if (msg.text == "Jadwal Sholat") {
    let dt = luxon.DateTime.now().setZone(zona_waktu);

    // const tanggal = new Date();
    let year = dt.year;
    let month = dt.month;
    let day = dt.day;
    axios
      .get(
        `https://api.myquran.com/v1/sholat/jadwal/2113/${year}/${month}/${day}`
      )
      .then((resp) => {
        console.log(resp.data.data.jadwal);
        bot.sendMessage(
          msg.chat.id,
          `          
*jadwal sholat Banjarmasin* 
\`\`\` 
Hari dan Tanggal 	: ${resp.data.data.jadwal.tanggal}
imsak     				: ${resp.data.data.jadwal.imsak}
subuh     				: ${resp.data.data.jadwal.subuh}
dzuhur    				: ${resp.data.data.jadwal.dzuhur}
ashar     				: ${resp.data.data.jadwal.ashar}
maghrib   				: ${resp.data.data.jadwal.maghrib}
isya      				: ${resp.data.data.jadwal.isya}\`\`\`
				`,
          { parse_mode: "Markdown" }
        );
      });
  }
  // endif

  // if "Quotes Islami"
  if (msg.text == "Quotes Islami") {
    bot.sendMessage(msg.chat.id, "Fitur sedang dalam tahap pengembangan🙏🏻");
  }

  // new if
  if (msg.text == "jam") {
    let dt = luxon.DateTime.now().setZone("Asia/Makassar");

    let year = dt.year;
    let month = dt.month;
    let day = dt.day;
    let ho = dt.hour;
    let min = dt.minute;
    bot.sendMessage(
      msg.chat.id,
      `tanggal ${year}-${month}-${day}
						jam ${ho} : menit ${min}`
    );
  }
  // endif
});

// perintah untuk dijalankan setiap menit
cron.schedule(
  "* * * * *",
  () => {
    let botDate = luxon.DateTime.now().setZone("Asia/Makassar");
    let year = botDate.year;
    let month = botDate.month;
    let day = botDate.day;
    let jam = botDate.hour;
    let menit = botDate.minute;

    // file gambar untuk dikirim
    // tiap variabel berupa array dari nama-nama file
    let subuh = fs.readdirSync("./gambar/subuh");
    let dzuhur = fs.readdirSync("./gambar/dzuhur");
    let ashar = fs.readdirSync("./gambar/ashar");
    let maghrib = fs.readdirSync("./gambar/maghrib");
    let isya = fs.readdirSync("./gambar/isya");

    console.log(`tanggal ${year}-${month}-${day}`);
    console.log(`${jam} : ${menit}`);

    // get data dari API
    axios
      .get(
        `https://api.myquran.com/v1/sholat/jadwal/2113/${year}/${month}/${day}`
      )
      .then((resp) => {
        let waktu = {
          imsak: {
            jam: parseInt(resp.data.data.jadwal.imsak.substring(0, 2)),
            menit: parseInt(resp.data.data.jadwal.imsak.substring(3, 5)),
          },
          subuh: {
            jam: parseInt(resp.data.data.jadwal.subuh.substring(0, 2)),
            menit: parseInt(resp.data.data.jadwal.subuh.substring(3, 5)),
          },
          dzuhur: {
            jam: parseInt(resp.data.data.jadwal.dzuhur.substring(0, 2)),
            menit: parseInt(resp.data.data.jadwal.dzuhur.substring(3, 5)),
          },
          ashar: {
            jam: parseInt(resp.data.data.jadwal.ashar.substring(0, 2)),
            menit: parseInt(resp.data.data.jadwal.ashar.substring(3, 5)),
          },
          maghrib: {
            jam: parseInt(resp.data.data.jadwal.maghrib.substring(0, 2)),
            menit: parseInt(resp.data.data.jadwal.maghrib.substring(3, 5)),
          },
          isya: {
            jam: parseInt(resp.data.data.jadwal.isya.substring(0, 2)),
            menit: parseInt(resp.data.data.jadwal.isya.substring(3, 5)),
          },
        };
        // perintah untuk waktu imsak
        if (
          waktuSholat.imsak &&
          jam == waktu.imsak.jam &&
          menit == waktu.imsak.menit
        ) {
          bot.sendPhoto(id_grup, "gambar/IMSAK.png"),
          {
            caption:
              "Waktunya imsak untuk wilayah Banjarmasin dan sekitarnya",
          };
          db.addData(id_grup)
        }

        // perintah untuk subuh
        if (
          waktuSholat.subuh &&
          jam == waktu.subuh.jam &&
          menit == waktu.subuh.menit
        ) {
          bot.sendPhoto(
            id_grup,
            `gambar/subuh/${subuh[Math.floor(Math.random() * subuh.length)]}`
            // , {caption: "Selamat menunaikan sholat subuh",}
          );
          db.addData(id_grup)
        }
        // endif

        // perintah untuk dzuhur
        if (
          waktuSholat.dzuhur &&
          jam == waktu.dzuhur.jam &&
          menit == waktu.dzuhur.menit
        ) {
          bot.sendPhoto(
            id_grup,
            `gambar/dzuhur/${dzuhur[Math.floor(Math.random() * dzuhur.length)]}`
            // , {caption: "Selamat menunaikan sholat dzuhur",}
          );
          db.addData(id_grup)
        }
        // endif

        // perintah untuk ashar
        if (
          waktuSholat.ashar &&
          jam == waktu.ashar.jam &&
          menit == waktu.ashar.menit
        ) {
          bot.sendPhoto(
            id_grup,
            `gambar/ashar/${ashar[Math.floor(Math.random() * ashar.length)]}`
            // , { caption: "Selamat menunaikan sholat ashar",}
          );
          db.addData(id_grup)
        }
        // endif

        // perintah untuk maghrib
        if (
          waktuSholat.maghrib &&
          jam == waktu.maghrib.jam &&
          menit == waktu.maghrib.menit
        ) {
          bot.sendPhoto(
            id_grup,
            `gambar/maghrib/${maghrib[Math.floor(Math.random() * maghrib.length)]
            }`
            // , {caption: "Selamat menunaikan sholat maghrib",}
          );
          db.addData(id_grup)
          if (waktuSholat.buka_puasa) {
            bot.sendPhoto(id_grup, "gambar/BUKA.png", {
              caption:
                "Selamat berbuka puasa untuk wilayah Banjarmasin dan sekitarnya",
            });
            db.addData(id_grup)
          }
        }
        // endif

        // perintah isya
        if (
          waktuSholat.isya &&
          jam == waktu.isya.jam &&
          menit == waktu.isya.menit
        ) {
          bot.sendPhoto(
            id_grup,
            `gambar/isya/${isya[Math.floor(Math.random() * isya.length)]}`
            // , {caption: "Selamat menunaikan sholat isya",}
          );
          db.addData(id_grup)
        }
        // endif
      });
  },
  {
    scheduled: true,
    timezone: zona_waktu,
  }
);

// perintah untuk dijalankan pada jam 23.00 WITA
cron.schedule("0 23 * * *", () => {
  let msg_id = db.readData()
  // bot.sendMessage("646854648",`daftar chat id: ${msg_id}`)
  for (const i in msg_id) {
    bot.deleteMessage(bot_id, msg_id[i]);
  }
  db.clearData()
}, {
  scheduled: true,
  timezone: "Asia/Makassar",
})
