let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Code:* ${command} ${text}
*Sistem:* ${pickRandom(['*Gay Mu Sebesar 97%*','*Gay Mu Sebesar 85%*','*Gay Mu Sebesar 69%*','*Gay Mu Sebesar 42%*','*Gay Mu Sebesar 27%*','*Gay Mu Sebesar 0%*','*Gay Mu Sebesar 11%*','*Gay Mu Sebesar 36%*','*Gay Mu Sebesar 50%*','*Gay Mu Sebesar 76%*','*Gay Mu Sebesar 95%*','*Gay Mu Sebesar 99999999999%*'])}

_*NOTE : Fitur Ini Harus Digunakan Seperti ini Contohnya :*_\n_.gaycek @tagorangnya_
*BY REALASKY AJG!*
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gaycek <tag orangnya>']
handler.tags = ['cek']
handler.command = /^gaycek$/i
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

