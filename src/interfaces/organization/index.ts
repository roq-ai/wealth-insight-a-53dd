import { BankStatementInterface } from 'interfaces/bank-statement';
import { FinancialRecordInterface } from 'interfaces/financial-record';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  bank_statement?: BankStatementInterface[];
  financial_record?: FinancialRecordInterface[];
  user?: UserInterface;
  _count?: {
    bank_statement?: number;
    financial_record?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
