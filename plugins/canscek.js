let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Code:* ${command} ${text}
*Sistem:* ${pickRandom(['*Cantik Mu Sebesar 97%*','*Cantik Mu Sebesar 85%*','*Cantik Mu Sebesar 69%*','*Cantik Mu Sebesar 42%*','*Cantik Mu Sebesar 26%*','*Cantik Mu Sebesar 0%*','*Cantik Mu Sebesar 11%*','*Cantik Mu Sebesar 38%*','*Cantik Mu Sebesar 56%*','*Cantik Mu Sebesar 70%*','*Cantik Mu Sebesar 92%*','*Cantik Mu Sebesar 99999999%*'])}

_*NOTE : Fitur Ini Harus Digunakan Seperti Ini, Contohnya :*_\n_.canscek @tagorangnya_
*BY REALASKY AJG!*
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['canscek <tag orangnya>', 'cantikcek <tag orangnya>']
handler.tags = ['cek']
handler.command = /^canscek|cantikcek$/i
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
