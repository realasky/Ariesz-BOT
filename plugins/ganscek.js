let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Code:* ${command} ${text}
*Sistem:* ${pickRandom(['*Gans Mu Sebesar 97%*','*Gans Mu Sebesar 85%*','*Gans Mu Sebesar 69%*','*Gans Mu Sebesar 42%*','*Gans Mu Sebesar 27%*','*Gans Mu Sebesar 0%*','*Gans Mu Sebesar 11%*','*Gans Mu Sebesar 36%*','*Gans Mu Sebesar 50%*','*Gans Mu Sebesar 76%*','*Gans Mu Sebesar 95%*','*Gans Mu Sebesar 99999999999%*'])}

_*NOTE : Fitur Ini Harus Digunakan Seperti ini Contohnya :*_\n_.ganscek @tagorangnya_
*BY REALASKY AJG!*
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['ganscek <tag orangnya>', 'gantengcek <tag orangnya>']
handler.tags = ['cek']
handler.command = /^ganscek|gantengcek$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.limit = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

