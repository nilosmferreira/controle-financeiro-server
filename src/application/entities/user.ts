import { BaseEntity } from './base.entity';
import { PermissionsOfUser } from './permissions.of.user';

interface UserProps {
  name: string;
  email: string;
  cellphone?: string;
  password: string;
  createdAt: Date;
  deleteAt?: Date;
  permissions: PermissionsOfUser[];
}
export class User extends BaseEntity<UserProps> {
  get name() {
    return this.data.name;
  }
  get email() {
    return this.data.email;
  }
  get cellphone() {
    return this.data.cellphone;
  }
  get password() {
    return this.data.password;
  }
  get createdAt() {
    return this.data.createdAt;
  }
  get deleteAt() {
    return this.data.deleteAt;
  }
  get active() {
    return !!this.data.deleteAt;
  }
  get permissions() {
    return this.data.permissions;
  }
  toggleActive() {
    if (this.active) {
      this.data.deleteAt = new Date();
    } else {
      this.data.deleteAt = undefined;
    }
  }
}
