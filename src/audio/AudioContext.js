import { _window } from '../window.js';

let _context;

const AudioContext = {

	getContext: function () {

		if ( _context === undefined ) {

			_context = new ( _window.AudioContext || _window.webkitAudioContext )();

		}

		return _context;

	},

	setContext: function ( value ) {

		_context = value;

	}

};

export { AudioContext };
