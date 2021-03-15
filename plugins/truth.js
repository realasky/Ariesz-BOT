let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Code:* ${command} ${text}
*Challange:* ${pickRandom(['*Apakah kamu pernah diam-diam mencuri sesuatu dari orang tua atau orang lain?*','*Pernah salah sebut nama orang saat di jalan? Ceritain, dong!*','*Apakah menurut kamu, kamu lebih jelek atau lebih cakep dibanding teman-teman kamu?*','*Siapakah satu orang yang kamu harap masih ada dalam hidup kamu?*','*Siapakah orang yang tidak kamu sukai, tapi mesti pura-pura suka?*','*Hal apa yang tidak kamu sukai tentang saya?*','*Apa hal paling menjijikkan yang pernah kamu dengar yang dilakukan seseorang?*','*Lebih pilih jelek tapi kaya harta, atau ganteng/cantik tapi miskin?*','*Apakah kamu pernah pipis di celana saat dewasa atau remaja?*','*Apa hal paling kejam yang pernah kamu lakukan pada seseorang?*','*Berapa banyak mantan kamu?*','*Siapa yang lagi kamu taksir sekarang? Pernah naksir guru, dosen, atau teman kantor?*','*Apa momen paling canggung yang pernah kamu alami saat berkencan?*','*Apa hal paling kekanak-kanakan yang pernah kamu lakukan di atas usia 13 tahun?*','*Hal apa yang paling memalukan yang pernah kamu lakukan?*'])}

*BY REALASKY AJG!*
*NOTE :* _JAWAB DENGAN JUJUR YA :D_
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^truth$/i
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
