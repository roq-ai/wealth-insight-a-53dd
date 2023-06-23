import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface FinancialRecordInterface {
  id?: string;
  type: string;
  amount: number;
  date: any;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface FinancialRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  organization_id?: string;
}
