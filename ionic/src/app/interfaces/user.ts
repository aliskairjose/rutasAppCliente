import { Role } from './role';

export interface User {
  address?: string;
  charge?: string;
  client_id?: number;
  created_at?: string;
  deleted_at?: string;
  department?: string;
  email?: string;
  email_verified_at?: string;
  id?: number;
  identification?: null
  license?: string;
  license_expiration?: string;
  name?: string;
  phone?: string;
  roles?: Array<Role>;
  updated_at?: "2021-03-15T17?:27?:48.000000Z"
  verified_by_admin?: number
  verified_by_client?: number
  years_experiencie?: number;
}
