const { BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

module.exports = {
    ctx: null,
    init() {
        this.ctx = new BrowserWindow({
            show: false,
            width: 300,
            height: 290,
        })

        this.ctx.loadURL(url.format({
            pathname: path.join(`${__dirname}/../views`, 'about.html'),
            protocol: 'file:',
            slashes: true,
        }))

        return this.ctx
    },
}