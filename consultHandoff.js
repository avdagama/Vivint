function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

var query = getQueryParams(document.location.search);
if (query.email==undefined) {}
else  {
  document.getElementById("emailInput").value = query.email;
}

function submitPressed() {
  document.getElementById("name").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("message").value = "";
  document.getElementById("submit").value = "Sent!";
}
