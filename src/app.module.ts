import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';


@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5555,
      username: 'postgres',
      password: 'postgres',
      database: 'hanclass',
      entities: [
        User,
      ],
      synchronize: true, // 개발 환경에서만 true로 설정, 프로덕션에서는 false 권장
    }),
  ],
    

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
