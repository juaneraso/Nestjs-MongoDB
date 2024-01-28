import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ProductsModule,MongooseModule.forRoot('mongodb+srv://juangui9508:tZQWXS4XLCYGibZh@cluster0.iqmicdw.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule {}
