import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dtos/createQuiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) { }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: CreateQuizDto) {
    return quizData;
  }
}
