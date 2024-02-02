function use(res: { value: string }) {
  console.log("do somn", res.value);
}

let valueFromNetwork = getValueFromAPI();

!!valueFromNetwork && use(valueFromNetwork);
Boolean(valueFromNetwork) && use(valueFromNetwork);
