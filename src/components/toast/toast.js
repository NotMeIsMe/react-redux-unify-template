/*eslint-disable*/
'use strict';

var iqwerty = iqwerty || {};

iqwerty.toast = (function() {
	const TOAST_ANIMATION_SPEED = 400;

	const Transitions = {
		SHOW: {
			'-webkit-transition': 'opacity ' + TOAST_ANIMATION_SPEED + 'ms, -webkit-transform ' + TOAST_ANIMATION_SPEED + 'ms',
			'transition': 'opacity ' + TOAST_ANIMATION_SPEED + 'ms, transform ' + TOAST_ANIMATION_SPEED + 'ms',
			'opacity': '1',
			'-webkit-transform': 'translateY(-100%) translateZ(0)',
			'transform': 'translateY(-100%) translateZ(0)'
		},

		HIDE: {
			'opacity': '0',
			'-webkit-transform': 'translateY(150%) translateZ(0)',
			'transform': 'translateY(150%) translateZ(0)'
		}
	};

	function Toast(text, options, transitions) {
		if(getToastStage() !== null) {
			// If there is already a Toast being shown, put this Toast in the queue to show later
			Toast.prototype.toastQueue.push({
				text: text,
				options: options,
				transitions: transitions
			});
		} else {
			Toast.prototype.Transitions = transitions || Transitions;
			var _options = options || {};
			_options = Toast.prototype.mergeOptions(Toast.prototype.DEFAULT_SETTINGS, _options);

			Toast.prototype.show(text, _options);
			
			_options = null;
		}
	}

	var _toastStage = null;
	function getToastStage() {
		return _toastStage;
	}
	function setToastStage(toastStage) {
		_toastStage = toastStage;
	}

	Toast.prototype.DEFAULT_SETTINGS = {
		style: {
			main: {
				'background': 'rgba(0, 0, 0, .85)',
				'box-shadow': '0 0 10px rgba(0, 0, 0, .8)',

				'border-radius': '3px',

				'z-index': '99999',

				'color': 'rgba(255, 255, 255, .9)',
				
				'padding': '10px 15px',
				'max-width': '60%',
				'width': '100%',
				'word-break': 'keep-all',
				'margin': '0 auto',
				'text-align': 'center',

				'position': 'fixed',
				'left': '0',
				'right': '0',
				'bottom': '0',

				'-webkit-transform': 'translateY(150%) translateZ(0)',
				'transform': 'translateY(150%) translateZ(0)',
				'-webkit-filter': 'blur(0)',
				'opacity': '0'
			}
		},

		settings: {
			duration: 4000
		}
	};

	Toast.prototype.Transitions = {};

	Toast.prototype.toastQueue = [];

	Toast.prototype.timeout = null;

	Toast.prototype.mergeOptions = function(initialOptions, customOptions) {
		var merged = customOptions;
		for(var prop in initialOptions) {
			if(merged.hasOwnProperty(prop)) {
				if(initialOptions[prop] !== null && initialOptions[prop].constructor === Object) {
					merged[prop] = Toast.prototype.mergeOptions(initialOptions[prop], merged[prop]);
				}
			} else {
				merged[prop] = initialOptions[prop];
			}
		}
		return merged;
	};

	Toast.prototype.generate = function(text, style) {
		var toastStage = document.createElement('div');

		if(typeof text === 'string') {
			text = document.createTextNode(text);
		}
		toastStage.appendChild(text);


		setToastStage(toastStage);
		toastStage = null;

		Toast.prototype.stylize(getToastStage(), style);
	};

	Toast.prototype.stylize = function(element, styles) {
		Object.keys(styles).forEach(function(style) {
			element.style[style] = styles[style];
		});
	};

	Toast.prototype.show = function(text, options) {
		this.generate(text, options.style.main);
		
		var toastStage = getToastStage();
		document.body.insertBefore(toastStage, document.body.firstChild);

		toastStage.offsetHeight;


		Toast.prototype.stylize(toastStage, Toast.prototype.Transitions.SHOW);


		toastStage = null;

		clearTimeout(Toast.prototype.timeout);
		Toast.prototype.timeout = setTimeout(Toast.prototype.hide, options.settings.duration);
	};

	Toast.prototype.hide = function() {
		var toastStage = getToastStage();
		Toast.prototype.stylize(toastStage, Toast.prototype.Transitions.HIDE);

		clearTimeout(Toast.prototype.timeout);
		toastStage.addEventListener('transitionend', Toast.prototype.animationListener);
		toastStage = null;
	};

	Toast.prototype.animationListener = function() {
		getToastStage().removeEventListener('transitionend', Toast.prototype.animationListener);
		Toast.prototype.destroy.call(this);
	};

	Toast.prototype.destroy = function() {
		var toastStage = getToastStage();
		document.body.removeChild(toastStage);

		toastStage = null;
		setToastStage(null);


		if(Toast.prototype.toastQueue.length > 0) {

			var toast = Toast.prototype.toastQueue.shift();
			Toast(toast.text, toast.options, toast.transitions);

			toast = null;
		}
	};

	return {
		Toast: Toast
	};
})();

if(typeof module !== 'undefined') {
	module.exports = iqwerty.toast;
}
/*eslint-enable*/

// var toast = new iqwerty.toast.Toast();
// toast
// .setText('This is a basic toast message!')
// .stylize({
//   background: 'pink',
//   color: 'black',
//   'box-shadow': '0 0 50px rgba(0, 0, 0, .7)'
// })
// .show();
