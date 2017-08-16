/**
 * [lutils description]
 * 工具集
 * @type {Object}
 */
var lutils = {
    /**
     * 排序
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    sort1: function (arr) {
        var a = array.filter(function(ele, index) {
            return index === array.indexOf(ele);
        })
    },
    /**
     * 效率最高的排序方式
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    sort: function (arr) {
        var result = {};
        var newArr = [];
        for (var i = 0; i < arr.length; i++)　 {
            if (!result[arr[i]]) {
                newArr.push(arr[i]);
                result[arr[i]] = 1;
            }
        }
        return newArr
    },
    /**
     * 判断一个对象是否是数组
     * @param  {[type]}  arg [description]
     * @return {Boolean}     [description]
     */
    isArray: function (arg) {
        //如果浏览器支持Array.isArray()可以直接判断
        if (typeof Array.isArray === 'function') {
            return Array.isArray(arg);
        } else {
            if (typeof arg === 'object') {
                return Object.prototype.toString.call(arg) === '[object Array]';
            } else {
                return false;
            }
        }
    },
    /**
     *
     * @param  {[type]} time [传入的时间值]
     * @param  {[type]} type [传入的时间类型]
     * @return {[type]} lan  [输出语言形式]
     */
    formatTime: function(time, type, lan) {
        // ms: 毫秒  s: 秒  m: 分钟  h: 小时
        if (lan === 0) {
            if (type === 'ms') {
                var left = parseInt(time / 1000);
                var day1 = Math.floor(left / (60 * 60 * 24));
                var hour = Math.floor((left - day1 * 24 * 60 * 60) / 3600);
                var minute = Math.floor((left - day1 * 24 * 60 * 60 - hour * 3600) / 60);
                var second = Math.floor(left - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
                var format = (day1 ? (day1 + "天") : '') + (hour ? (hour + "小时") : '') + (minute ? (minute + "分") : '') + (second ? (second + "秒") : '');
            } else if (type === 's') {
                var day1 = Math.floor(time / (60 * 60 * 24));
                var hour = Math.floor((time - day1 * 24 * 60 * 60) / 3600);
                var minute = Math.floor((time - day1 * 24 * 60 * 60 - hour * 3600) / 60);
                var second = Math.floor(time - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
                var format = (day1 ? (day1 + "天") : '') + (hour ? (hour + "小时") : '') + (minute ? (minute + "分") : '') + (second ? (second + "秒") : '');
            } else if (type === 'm') {
                var day1 = Math.floor(time / (60 * 24));
                var hour = Math.floor((time - day1 * 24 * 60) / 60);
                var minute = Math.floor((time - day1 * 24 * 60 - hour * 60));
                var format = (day1 ? (day1 + "天") : '') + (hour ? (hour + "小时") : '') + (minute ? (minute + "分") : '');
            } else if (type === 'h') {
                var day1 = Math.floor(time / 24);
                var hour = Math.floor(time - day1 * 24);
                var format = (day1 ? (day1 + "天") : '') + (hour ? (hour + "小时") : '');
            }
        } else if (lan === 1) {
            if (type === 'ms') {
                var left = parseInt(time / 1000);
                var day1 = Math.floor(left / (60 * 60 * 24));
                var hour = Math.floor((left - day1 * 24 * 60 * 60) / 3600);
                var minute = Math.floor((left - day1 * 24 * 60 * 60 - hour * 3600) / 60);
                var second = Math.floor(left - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
                var format = (day1 ? (day1 + "d") : '') + (hour ? (hour + "h") : '') + (minute ? (minute + "m") : '') + (second ? (second + "s") : '');
            } else if (type === 's') {
                var day1 = Math.floor(time / (60 * 60 * 24));
                var hour = Math.floor((time - day1 * 24 * 60 * 60) / 3600);
                var minute = Math.floor((time - day1 * 24 * 60 * 60 - hour * 3600) / 60);
                var second = Math.floor(time - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
                var format = (day1 ? (day1 + "d") : '') + (hour ? (hour + "h") : '') + (minute ? (minute + "m") : '') + (second ? (second + "s") : '');
            } else if (type === 'm') {
                var day1 = Math.floor(time / (60 * 24));
                var hour = Math.floor((time - day1 * 24 * 60) / 60);
                var minute = Math.floor((time - day1 * 24 * 60 - hour * 60));
                var format = (day1 ? (day1 + "d") : '') + (hour ? (hour + "h") : '') + (minute ? (minute + "m") : '');
            } else if (type === 'h') {
                var day1 = Math.floor(time / 24);
                var hour = Math.floor(time - day1 * 24);
                var format = (day1 ? (day1 + "d") : '') + (hour ? (hour + "h") : '');
            }
        }
        return format;
    }
}