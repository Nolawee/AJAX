var url = '/employees.php'
var data = {
  firstName: "Dave",
  lastName: "Chappelle"
};

var callback = function (response) {
  // do something with response
}

$.get(url,data,callback);
