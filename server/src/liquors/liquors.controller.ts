import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Liquor } from './liquor.model';
import { LiquorsService } from './liquors.service';
import { CreateLiquorDto } from './dto/create-liquor.dto';

@Controller('liquors')
export class LiquorsController {
  constructor(private liquorsService: LiquorsService) {}
  @Get()
  getAllLiquors(): Liquor[] {
    return this.liquorsService.getAllLiquors();
  }

  @Get('/:id')
  getLiquorById(@Param('id') id: string): Liquor {
    return this.liquorsService.getLiquorById(id);
  }

  @Post('/liquor')
  createNewLiquor(@Body() createLiquorDto: CreateLiquorDto): Liquor {
    return this.liquorsService.createNewLiquor(createLiquorDto);
  }
}
