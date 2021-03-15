let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
_Ya, Bang Ownerku Yang Tamvan_\n*Bot Ariesz Siap Melayani Mu*
`.trim(), m)
}
handler.help = ['riesz']
handler.tags = ['owner']
handler.command = /^(riesz)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
