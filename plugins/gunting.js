let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Lu:* ${command} ${text}
*Sistem:* ${pickRandom(['_BOT PILIH KERTAS_\n✨ *YOU WIN :D* ✨\n*CREATOR REALASKY AJG*','_BOT PILIH BATU_\n✨ *BOT WIN* ✨\n*CREATOR REALASKY AJG*','_BOT PILIH GUNTING_\n✨ *DRAW?....* ✨\n*CREATOR REALASKY AJG*'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.command = /^gunting$/i
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
