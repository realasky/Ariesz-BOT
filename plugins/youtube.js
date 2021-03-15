let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
_*[ YOUTUBE ]*_\n\n_Mau Subscribe Channel Owner Bot? Yuk Di Subscribe Linknya Ku Taruh Di Bawah Ya :_\n\n_~ https://youtube.com/channel/UCBeTQsm1FDg_yhYNvD3E_jQ_
`.trim(), m)
}
handler.help = ['youtube']
handler.tags = ['info']
handler.command = /^(youtube)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
