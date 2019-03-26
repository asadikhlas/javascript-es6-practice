const request = (url, data) => {
  $.ajax({ method: "post", url, data });
};

request("http://request,com", { car: ford });
