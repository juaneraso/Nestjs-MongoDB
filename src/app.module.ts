import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MyConfigModule } from 'config.module';
import { ConfigService } from '@nestjs/config';

// @Module({
//   imports: [ProductsModule,MongooseModule.forRoot('URL')],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}

@Module({
  imports: [ MyConfigModule,ProductsModule,    
    MongooseModule.forRootAsync({
      imports: [MyConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

