import { v4 as uuidv4 } from "uuid"
export class Artist {
  constructor(name){
    this.id = uuidv4()
    this.name = name
  }
}