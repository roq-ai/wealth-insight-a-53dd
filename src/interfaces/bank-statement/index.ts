import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BankStatementInterface {
  id?: string;
  file_path: string;
  upload_date: any;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface BankStatementGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_path?: string;
  organization_id?: string;
}
