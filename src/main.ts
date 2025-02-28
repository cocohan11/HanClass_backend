import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // 전역 ValidationPipe 설정
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // 값전달안하면 서버터지는게 아니라, 에러 출력해줌
    forbidNonWhitelisted: true, // 정의 안 한 데이터보내면 에러 출력해줌줌
    transform: true, // 자동변환
  }))

  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
