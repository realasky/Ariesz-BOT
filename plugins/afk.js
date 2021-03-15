let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} Sedang *Afk* Jan Ganggu Ajg${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['gabutz']
handler.command = /^afk$/i

handler.limit = true
handler.register = true

module.exports = handler
