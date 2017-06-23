window.SetSize = function (count, width) {
    this.count = count || 32;
    this.style = document.createElement('style');
    this.width = 0;
    this.fontSize = 0;
    this.styleInner = '';
    this.setup();
}
SetSize.prototype = {
    setup: function () {
        document.querySelector('head').appendChild(this.style);
        this.readSize();
        this.bindEvents();
    },
    readSize: function (e) {
        this.width = document.documentElement.clientWidth;
        if (!this.width && !!document.body) {
            this.width = document.body.clientWidth;
        } else if (!this.width) {
            return false;
        }
        this.fontSize = this.width / this.count;
        this.styleInner = 'html {font-size:' + this.fontSize * 2 + 'px} html body,html input,html textarea,html button,html select{ font-size:' + this.fontSize * 2 + 'px}';
        this.style.innerHTML = this.styleInner;
    },
    bindEvents: function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.readSize();
        }, false);
    },
    getFontSize: function () {
        return this.fontSize;
    },
    getEmSize: function (px) {
        return px / this.fontSize;
    }
}
var setSize = new SetSize(32);