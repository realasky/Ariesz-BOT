let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
_*[ MAU JOIN GC BOT? ]*_\n_https://chat.whatsapp.com/KEfv4KLjt9kCqBuSpgXziW_\n\n_[ JOIN DAN PATUHI RULES KUY ]_
`.trim(), m)
}
handler.help = ['groupbot']
handler.tags = ['gabutz']
handler.command = /^(groupbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
