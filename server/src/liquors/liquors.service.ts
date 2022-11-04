import { Injectable } from '@nestjs/common';
import { Liquor } from './liquor.model';
import { v1 as uuid } from 'uuid';
import { CreateLiquorDto } from './dto/create-liquor.dto';
@Injectable()
export class LiquorsService {
  private liquors: Liquor[] = [];

  getAllLiquors(): Liquor[] {
    return this.liquors;
  }

  getLiquorById(id: string): Liquor {
    return this.liquors.find((liquor) => liquor.id === id);
  }

  createNewLiquor(createLiquorDto: CreateLiquorDto) {
    const { isWine, name, type, country, year, price, quantity } = createLiquorDto;
    const newLiquor: Liquor = {
      id: uuid(),
      isWine,
      name,
      type,
      country,
      year,
      price,
      quantity,
    };
    this.liquors.push(newLiquor);

    return newLiquor;
  }
}
