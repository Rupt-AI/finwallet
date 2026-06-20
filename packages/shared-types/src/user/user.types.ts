import { BaseEntity } from "../common/base.types";
import { UserRole } from "../common/enums";

export interface User extends BaseEntity {
  email: string;
  phone: string;
  passwordHash: string;
  role: UserRole;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
}