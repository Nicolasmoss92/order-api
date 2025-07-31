import { Pet } from 'src/core/entities/pet';

export interface IGetOrderByIdUseCase {
  getById(id: string): Promise<Pet>;
}
