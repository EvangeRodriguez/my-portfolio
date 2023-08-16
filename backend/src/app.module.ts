import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './modules/profile.module';
import { AuthModule } from './modules/auth.module';
import { AdminModule } from './modules/admin.module';
import { ProjectModule } from './modules/project.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://evangerodriguez00:XLfRM7qfaVDvxhTm@cluster0.pb6wjqt.mongodb.net/portfolio',
    ),
    AdminModule,
    AuthModule,
    ProfileModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
