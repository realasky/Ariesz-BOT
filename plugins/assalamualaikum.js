let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
_Wa'alaikumSalam_\n*Gabutz? Ketik Menu Aja*\n_*By : REALASKY*_
`.trim(), m)
}
handler.help = ['assalamualaikum']
handler.tags = ['gabutz']
handler.command = /^(Assalamualaikum)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
