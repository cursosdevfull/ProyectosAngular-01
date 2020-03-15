import { Message } from './message';
export interface Member {
  _id: string;
  name: string;
  photo: string;
  mensajes: Array<Message>;
}
