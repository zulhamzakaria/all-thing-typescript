function use(response: { value: string }) {
  console.log("write to db", response.value);
}

let valueFromNetwork = getValueFromAPI();

!!valueFromNetwork && use(valueFromNetwork);
Boolean(valueFromNetwork) && use(valueFromNetwork);

function getValueFromAPI() {
  return { value: "somtam" };
}
