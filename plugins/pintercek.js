let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Code:* ${command} ${text}
*Sistem:* ${pickRandom(['*Pinter Mu Sebesar 97%*','*Pinter Mu Sebesar 85%*','*Pinter Mu Sebesar 69%*','*Pinter Mu Sebesar 42%*','*Pinter Mu Sebesar 27%*','*Pinter Mu Sebesar 0%*','*Pinter Mu Sebesar 11%*','*Pinter Mu Sebesar 36%*','*Pinter Mu Sebesar 50%*','*Pinter Mu Sebesar 76%*','*Pinter Mu Sebesar 95%*','*Pinter Mu Sebesar 99999999999%*'])}

_*NOTE : Fitur Ini Harus Digunakan Seperti ini Contohnya :*_\n_.gaycek @tagorangnya_
*BY REALASKY AJG!*
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['pintercek <tag orangnya>']
handler.tags = ['cek']
handler.command = /^pintercek$/i
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

