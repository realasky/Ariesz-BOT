let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
_PapePape Mulu Salam Napa :v_\n_Kalo Gabutz Ketik .help Aja_\n*By : REALASKY*
`.trim(), m)
}
handler.help = ['p']
handler.tags = ['gabutz']
handler.command = /^(p)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
