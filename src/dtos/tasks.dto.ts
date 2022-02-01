import { IsNumber, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsNumber()
  public taskID: number;

  @IsBoolean()
  public isParent: boolean;
}
