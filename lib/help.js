const fs = require('fs')
const config = JSON.parse(fs.readFileSync(`./config.json`))

exports.start = async(lol, name) => {
    text = `Welcome To RexonC2 DDoS Bot. if you want use it you must join @rexonc2\n/help see my commands`
    await lol.replyWithMarkdown(text, { disable_web_page_preview: true })
}

exports.help = async(lol, name) => {
    text = `This is beta bot not powerfull\n/methods show my methods\n/attack how to attack`
    await lol.replyWithMarkdown(text, { disable_web_page_preview: true })
}

exports.messageError = async(lol) => {
    await lol.reply(`Error! Please report to the [${config.owner}](${config.ownerLink}) about this`, { parse_mode: "Markdown", disable_web_page_preview: true })
}
