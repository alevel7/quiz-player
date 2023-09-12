import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Oluranti08056965',
  database: 'quiz',
  autoLoadEntities: true,
  entities: [__dirname + '/ ../**/*.entity{.ts, .js}'],
  synchronize: true,
};
