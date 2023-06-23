import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { bankStatementValidationSchema } from 'validationSchema/bank-statements';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.bank_statement
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getBankStatementById();
    case 'PUT':
      return updateBankStatementById();
    case 'DELETE':
      return deleteBankStatementById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getBankStatementById() {
    const data = await prisma.bank_statement.findFirst(convertQueryToPrismaUtil(req.query, 'bank_statement'));
    return res.status(200).json(data);
  }

  async function updateBankStatementById() {
    await bankStatementValidationSchema.validate(req.body);
    const data = await prisma.bank_statement.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteBankStatementById() {
    const data = await prisma.bank_statement.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
