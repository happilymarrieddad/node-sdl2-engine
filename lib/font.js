'use strict'

let SDL2_ttf = require('sdl2-ttf')
let FT_factory = SDL2_ttf.class('ttf')

class font {
	constructor(file,pixelsize,index) {
		let ft = new FT_factory(file,pixelsize,index)
		Object.assign(this,ft)
	}

	static init() {
		return FT_factory.init()
	}

	static wasInit() {
		return FT_factory.wasInit()
	}

	static quit() {
		return FT_factory.quit()
	}

}

exports = font