import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transactionExist = await transactionsRepository.findOne(id);
    if (!transactionExist) {
      throw new AppError('Invalid ID', 401);
    }
    await transactionsRepository.remove(transactionExist);
  }
}

export default DeleteTransactionService;
