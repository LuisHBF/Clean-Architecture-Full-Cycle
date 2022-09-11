import ProductFactory from "../../../domain/product/factory/product.factory";
import { InputUpdateProductDto } from "./update.product.dto";
import UpdateProductUseCase from "./update.product.usecase";
import Product from "../../../domain/product/entity/product";
import ProductInterface from "../../../domain/product/entity/product.interface";

const product: any = ProductFactory.create(
    "a",
    "keyboard",
    150
  );
  
  const input: InputUpdateProductDto = {
    id: product.id,
    name: "keyboard",
    price: 125
  };
  
  const MockRepository = () => {
    return {
      create: jest.fn(),
      findAll: jest.fn(),
      find: jest.fn().mockReturnValue(Promise.resolve(product)),
      update: jest.fn(),
    };
  };
  
  describe("Unit test for product update use case", () => {
    it("should update a product", async () => {
      const productRepository = MockRepository();
      const productUpdateUseCase = new UpdateProductUseCase(productRepository);
  
      const output = await productUpdateUseCase.execute(input);
  
      expect(output).toEqual(input);
    });
  });
  