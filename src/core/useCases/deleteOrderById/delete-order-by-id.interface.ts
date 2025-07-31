export interface IDeleteOrderByIdUseCase {
  deleteById(id: string): Promise<void>;
}
