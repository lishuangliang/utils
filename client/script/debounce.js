(function(win,doc){
    win.lsl = win.lsl || {};

    //函数防抖
    lsl.debounce = function debounce(func, delay){
        var  timeout = null;
    
        return function(e){
            //console.log('clear', timeout, e.target.value);
            clearTimeout(timeout);
            var context = this, args = arguments;
            //console.log('new', timeout, e.target.value);
            timeout = setTimeout(function(){
                //console.log('--------------');
                func.apply(context, args);
            }, delay || 600)
        }
    }


})(window, document);


