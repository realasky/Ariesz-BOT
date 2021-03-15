let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${Math.floor(Math.random() * 10)} ${pickRandom(['detik\n*CREATOR REALASKY AJG*', 'menit\n*CREATOR REALASKY AJG*', 'jam\n*CREATOR REALASKY AJG*', 'hari\n*CREATOR REALASKY AJG*', 'minggu\n*CREATOR REALASKY AJG*', 'bulan\n*CREATOR REALASKY AJG*', 'tahun\n*CREATOR REALASKY AJG*', 'dekade\n*CREATOR REALASKY AJG*', 'abad\n*CREATOR REALASKY AJG*'])} lagi ...
`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <pertanyaan>')
handler.tags = ['kerang']
handler.command = /^kapan(kah)?$/i
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

