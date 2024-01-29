import { Injectable , NotFoundException} from '@nestjs/common';
import { Model ,Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/products.interface';
import { CreateProductDTO } from './dto/products.dto';


@Injectable()
export class ProductsService {

  constructor(@InjectModel('Product') private productModel: Model<Product>){}

  async getProducts() : Promise <Product[]>{
    const products =  await  this.productModel.find();

      return products;

   }

    async getProduct(productID: string): Promise<Product>{
      const objectId = new Types.ObjectId(productID);
     const product = await this.productModel.findById(objectId)
     
     
    // if (!product) {
    //   throw new NotFoundException('Product does not exist');
    // }

      return product;
   }
   
   async createProduct(createProductDTO:CreateProductDTO):Promise<Product>{
    const product = new this.productModel(createProductDTO);
     await  product.save();
    // console.log(product);
    return product;
   }
   
   async updateProduct(productId:string, createProductDTO:CreateProductDTO) : Promise<Product>{

    const updateProduct = await this.productModel.findByIdAndUpdate(productId,createProductDTO,{new:true}); // con new true devuelve el objeto nuevo no el viejo
    return updateProduct;
      
   }

   async deleteProduct(productID : string): Promise<Product>{

    const deleteProduct = await this.productModel.findByIdAndDelete(productID);
    return deleteProduct;

   }



}
