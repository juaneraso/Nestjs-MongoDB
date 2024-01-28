import { Controller, Post ,Res,HttpStatus, Body ,Get } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

 constructor( private productService:ProductsService) { }

@Post('/create')
async createPost(@Res() res , @Body() createProductDTO : CreateProductDTO) {
   const product = await this.productService.createProduct(createProductDTO)
//   console.log(createProductDTO);
//   console.log("product controller",product);  

  return  res.status(HttpStatus.OK).json({
        message: 'Product succesfully created',
        product :product
    });

}

@Get()
async getProducts(@Res() res){
  const products = await this.productService.getProducts();
  res.status(HttpStatus.OK).json({
      products : products
  })

}
@Get('/:id')

getProductById(id :string){

    this.productService.getProduct(id); 
}




}
