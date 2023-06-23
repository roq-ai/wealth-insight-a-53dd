const mapping: Record<string, string> = {
  'bank-statements': 'bank_statement',
  'financial-records': 'financial_record',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
