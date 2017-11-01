import { permissionClass } from './../permission/permissionClass';


export class groupClass {
  id: string;
  name: string;
  description: String;
  permissions: permissionClass[];
}
