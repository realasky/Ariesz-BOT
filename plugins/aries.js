let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
_Ya, Bang Ada Apa Bang xixixixixixi?._ *Pasti Mau Mainin Aink Ya*
`.trim(), m)
}
handler.help = ['ries']
handler.tags = ['gabutz']
handler.command = /^(ries)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
