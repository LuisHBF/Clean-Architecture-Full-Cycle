import Product from "../../../domain/product/entity/product"
import { OutputFindProductDto, InputFindProductDto } from "./find.product.dto";
import FindProductUseCase from "./find.product.usecase";

const product = new Product("123", "mouse", 100);

const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
      };
}

describe("Unit Test find product use case", () => {
    it("should find a product", async () => {
      const productRepository = MockRepository();
      const usecase = new FindProductUseCase(productRepository);
  
      const input: InputFindProductDto = {
        id: "123",
      };
  
      const output: OutputFindProductDto = {
        id : "123",
        name : "mouse",
        price: 100
      };
  
      const result = await usecase.execute(input);
  
      expect(result).toEqual(output);
    });
});