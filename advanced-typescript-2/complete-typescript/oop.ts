class Phone {
  constructor(public model) {}
  getPhone() {
    console.log(this.model);
  }
}

const honor = new Phone("p200 pro");
honor.getPhone();
