import { Controller, Post ,Res,HttpStatus, Body ,Get, Param, NotFoundException ,Delete, Query ,Put } from '@nestjs/common';
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
@Get('/:productID')

async getProductById(@Res() res, @Param('productID')  productID){

  const product = await  this.productService.getProduct(productID); 

  if(!product){
     throw new NotFoundException('Product does not exists');
  }

  return res.status(HttpStatus.OK).json(product);

}

@Delete('/delete')

async deleteProduct(@Res() res , @Query('productID') productID) {
   const ProductDeleted = await this.productService.deleteProduct(productID);

   if(!ProductDeleted) {
     throw new NotFoundException('Product does not exists');
   }
     return res.status(HttpStatus.OK).json({
          message: 'Product deleted succesfully',
          ProductDeleted : ProductDeleted

     })

   }

   @Put('/update')
   async updateProduct(@Res() res, @Body() createProductDTO : CreateProductDTO ,@Query('productID') productID){

    const updateProduct =  await  this.productService.updateProduct(productID,createProductDTO)
    
    if(!updateProduct) {
      throw new NotFoundException('Product does not exists');
    }
    
    return res.status(HttpStatus.OK).json({

       message: 'Product updated succesfully',
       updateProduct: updateProduct
    })


   }

}






