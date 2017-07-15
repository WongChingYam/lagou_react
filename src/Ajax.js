const send = function(ops){
    var options = ops || {};

    var url = options.url;
    if (!url)
        return;

    var xhr = new XMLHttpRequest();


    var method = options.type || "get";
    var async = (typeof options.async === "boolean") ? options.async : true;

    var param = null;
    if (options.data) {
        var array = [];
        for (var atr in options.data) {
            array.push(atr + "=" + options.data[atr]);
        }
        param = array.join("&");
    }

    if (method === "get" && param){
        url += "?" + param;
        param = null;
    }

    xhr.open(method, url, async);

    if (method === "post"){

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }

    if (options.headers) {
        for (var attr in options.headers) {
            xhr.setRequestHeader(attr, options.headers[attr]);
        }
    }

    xhr.send(param);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            options.complete && options.complete(xhr);

            if (xhr.status === 200) {
                var data = xhr.responseText;
                if (options.dataType === "json")
                    data = JSON.parse(data);
                options.success && options.success(data)
            } else {
                options.error && options.error(xhr.statusText)
            }
        }
    }
}
export function ajax(options){
    send(options);
}