import { Module } from '@nestjs/common';
import { LugaresModule } from './lugares/lugares.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@app/core/prisma/prisma.module';
import { EventosModule } from './eventos/eventos.module';
import { AuthModule } from '@app/core/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.partner2',
    }),
    PrismaModule,
    AuthModule,
    EventosModule,
    LugaresModule,
  ],
})
export class Partner2Module {}