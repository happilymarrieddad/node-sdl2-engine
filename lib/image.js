'use strict'

let SDL2_image = require('sdl2-image')
let IMG_Factory = SDL2_image.class('image')

class image {
	constructor(file) {
		let img = new IMG_Factory(file)
		Object.assign(this,img)
	}

	static init() {
		return IMG_Factory.init()
	}

	static quit() {
		return IMG_Factory.quit()
	}

}

exports = image