let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Code:* ${command} ${text}
*Challange:* ${pickRandom(['*Kirimkan tangkapan layar pesanmu dengan orang terakhir selain aku.*','*Pejamkan mata dan raih lemari es atau dapur. Hal pertama yang kamu sentuh, harus kamu makan.*','*Berjalan mengelilingi kompleks perumahan kamu dan berbicara sendiri sepanjang waktu, terutama saat lagi banyak orang di sekitar kamu.*','*Rekam video kamu sedang melakukan tarian gila dan unggah ke media sosial.*','*Letakkan es batu di celana kamu dan coba keluarkan dan kirimkan saya videonya.*','*Potong sebagian rambut kamu.*','*Pilih orang Terakhir Yang Kamu Chat dan kirimi dia puisi konyol.*','*Kirim pesan ke orang yang kamu sukai dan ajak dia kencan.*','*Lakukan panggilan prankke seseorang.*','*Cobalah menjilat ketiak kamu, lalu foto dan kirim ke lima orang teman kamu!*','*Kirim pesan kepada seseorang yang belum pernah kamu ajak bicara selama setidaknya 1 minggu dan screenshoot hasil perbicaraannya.*','*Campurkan setetes atau satu sendok dari setiap bumbu di rumah kamu dan minum/makanlah.*','*Rekam diri kamu sendiri saat menyanyikan sebuah lagu dan posting di YouTube atau media sosialmu*','*Aku tantang kamu untuk kirim foto selfie ke mantan, tunggu sampai dibuka dan kirim buktinya ke aku.*','*Pesan makanan di aplikasi, dan kasih makanan yang kamu pesan ke pengantar itu*'])}

*BY REALASKY AJG!*
*NOTE :* _Jawab Dengan Jujur Ya :D_
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^dare$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
