var api_key = "7c0aac3c1f9012e766113da8d16f7f23";

function sendRequest () {
    var xhr = new XMLHttpRequest();
    var city = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?q="+city+"&appid="+api_key+"&format=json"+"&units=metric", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
        }
    };
}
