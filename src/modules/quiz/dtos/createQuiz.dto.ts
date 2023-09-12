import { IsString, IsInt, IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'the quiz should have a title' })
  @Length(3)
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'the quiz should have a description' })
  @IsString()
  @Length(5, 100, {
    message: 'the description should be between 5 and 100 characters',
  })
  description: string;
}
