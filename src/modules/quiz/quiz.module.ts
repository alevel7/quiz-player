import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController, QuizController],
  providers: [QuizService]
})
export class QuizModule { }
