/*global window, document */
define([], function () {
    return {
        getPseudoStylePropertyValue: function(selector, pseudoStyle, property) {
            var item = document.querySelector(selector);
            if (!item) {
                return null;
            }
            return window.getComputedStyle(item, pseudoStyle).getPropertyValue(property);
        }
}   ;
});
