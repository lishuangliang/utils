(function(win,doc){
    win.lsl = win.lsl || {};

    //函数节流
    lsl.throttle = function throttle(fn, threshhold){
        var timeout,
            start = new Date-0,
            threshhold = threshhold || 160;
        return function(){
            var context = this,
                args = arguments,
                curr = new Date-0;
    
            clearTimeout(timeout);
            if(curr - start >= threshhold){
                //console.log('now', curr, curr-start);
                fn.apply(context, args);
                start = curr;
            }else{
                timeout = setTimeout(function(){
                    fn.apply(context, args)
                }, threshhold);
            }
        }
    }

})(window, document);