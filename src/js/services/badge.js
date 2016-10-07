const badge = {
    /**
     * Badge counter
     * @type {Void}
     */
    counter: 0,

    /**
     * Refresh badge
     * @return {Void}
     */
    refresh() {
        chrome.browserAction.setBadgeBackgroundColor({ color: '#f44e42' });
        chrome.browserAction.setBadgeText({ text: '' });
        this.counter = 0;
    },

    /**
     * Increment
     * @return {Number}
     */
    increment() {
        chrome.browserAction.setBadgeText({ text: ++this.counter + '' });
    },

    /**
     * Decrement counter
     * @return {Void}
     */
    decrement() {
        chrome.browserAction.setBadgeText({ text: (--this.counter === 0 ? '' : this.counter) + ''})
    },

    /**
     * Increase counter by value
     * @param  {Number} value
     * @return {Void}
     */
    increaseBy(value) {
        this.counter += value;
        chrome.browserAction.setBadgeText({ text: this.counter + '' });
    },

    /**
     * Setter for badge text
     * @param {String} text
     */
    setText(text) {
        chrome.browserAction.setBadgeText({ text: text });
    }
}

chrome.browserAction.setBadgeBackgroundColor({ color: '#f44e42' });

export default badge;