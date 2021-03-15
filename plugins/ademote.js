let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupDemoteAdmin(m.chat, users)
}
handler.help = ['demote','member','v'].map(v => 'a' + v + ' @user')
handler.tags = ['agroups']
handler.command = /^(ademote|amember|av)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
