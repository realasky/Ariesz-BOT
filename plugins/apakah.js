let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya\n*CREATOR REALASKY AJG*','Mungkin iya\n*CREATOR REALASKY AJG*','Mungkin\n*CREATOR REALASKY AJG*','Mungkin tidak\n*CREATOR REALASKY AJG*','Tidak\n*CREATOR REALASKY AJG*','Tidak mungkin\n*CREATOR REALASKY AJG*'])}
`.trim(), m)
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
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

