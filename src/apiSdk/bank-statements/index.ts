import axios from 'axios';
import queryString from 'query-string';
import { BankStatementInterface, BankStatementGetQueryInterface } from 'interfaces/bank-statement';
import { GetQueryInterface } from '../../interfaces';

export const getBankStatements = async (query?: BankStatementGetQueryInterface) => {
  const response = await axios.get(`/api/bank-statements${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createBankStatement = async (bankStatement: BankStatementInterface) => {
  const response = await axios.post('/api/bank-statements', bankStatement);
  return response.data;
};

export const updateBankStatementById = async (id: string, bankStatement: BankStatementInterface) => {
  const response = await axios.put(`/api/bank-statements/${id}`, bankStatement);
  return response.data;
};

export const getBankStatementById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/bank-statements/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBankStatementById = async (id: string) => {
  const response = await axios.delete(`/api/bank-statements/${id}`);
  return response.data;
};
