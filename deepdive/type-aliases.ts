type Client = {
  name: string;
  email: string;
};

function printClient(client: Client) {
  console.log(client.name + client.email);
}

printClient({ name: "cockburn", email: "cockburn19887@gmail.com" });
