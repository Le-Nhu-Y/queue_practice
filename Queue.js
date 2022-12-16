"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.storage = [];
    }
    Queue.prototype.enqueue = function (data) {
        this.storage.push(data);
    };
    Queue.prototype.dequeue = function () {
        return this.storage.shift();
    };
    Queue.prototype.size = function () {
        return this.storage.length;
    };
    return Queue;
}());
exports.Queue = Queue;
