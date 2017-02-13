import styles from './toast.scss';

/*eslint-disable*/
function DeadToast () {
  this.bodyDOM = document.getElementsByTagName('body')[0];
}

DeadToast.makeText = function (message, duration) {
  var duration = duration | 2000;
  const deadToast = new DeadToast();
  deadToast.message = message;
  deadToast.duration = duration;
  return deadToast;
};

DeadToast.prototype.show = function () {
  if (this.timeoutId) {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  } else {
    var deadToastDOM = document.createElement('div');
    deadToastDOM.className = `${styles.deadToast}`;
    this.deadToastDOM = deadToastDOM;

    var deadToastContentDOM = document.createElement('div');
    deadToastContentDOM.className = `${styles.deadToastContent}`;
    deadToastContentDOM.innerHTML = this.message;
    deadToastDOM.appendChild(deadToastContentDOM);

    this.bodyDOM.appendChild(deadToastDOM);
    setTimeout(function () {
      deadToastDOM.className += ` ${styles.show}`;
    }, 10);
  }

  this.timeoutId = setTimeout(function () {
    this.cancel();
  }.bind(this), this.duration);
};

DeadToast.prototype.cancel = function (immediately) {
  if (this.deadToastDOM) {
    this.deadToastDOM.className = `${styles.deadToast}`;
    this.timeoutId = null;
    if (immediately === true) {
      this.bodyDOM.removeChild(this.deadToastDOM);
      return;
    }

    var self = this;
    ['transitionend', 'webkitTransitionEnd', 'mozTransitionEnd', 'MSTransitionEnd'].forEach(function (transition) {
      self.deadToastDOM.addEventListener(transition, function () {
        self.bodyDOM.removeChild(self.deadToastDOM);
      }, false);
    });
  }
};

export default DeadToast;
/*eslint-enable*/

