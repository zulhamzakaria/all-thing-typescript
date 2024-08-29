/*
- dont use namespace
- use import keyword
- use * as actions to import all. (alias is required)
- actions.CreateUser()
- export default class User
- named export requires {}
- for default export, directly import the file i.e import User from './User.js'
*/

export class User {
  constructor(public name: string) {}
}
