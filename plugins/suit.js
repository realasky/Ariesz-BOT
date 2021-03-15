let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*_[ ✨ CARA BERMAIN ✨ ]_*\n\n1. _Kalian Harus Memilih Batu, Kertas Atau Gunting_\n2. _Setelah Kalian Memilih Bot Akan Otomatis Juga Akan Memilih Batu, Kertas Atau Gunting_\n3. _*MENANGKAN GAMES INI BREDER :D*_\n\n✨ *PILIH CUY* ✨\n\n1. .batu\n2. .kertas\n3. .gunting\n\n~[ CREDIT SUIT ]~\n\n*INSTAGRAM* : @realasky_mantap\nYOUTUBE : *REALASKY •-•*
`.trim(), m)
}
handler.help = ['suit']
handler.tags = ['gabutz']
handler.command = /^(suit)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
