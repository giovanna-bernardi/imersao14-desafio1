import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
// import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private prismaService: PrismaService) {}

  create(createRouteDto: CreateRouteDto) {
    return this.prismaService.route.create({
      data: {
        name: createRouteDto.name,
        source: {
          name: createRouteDto.source_id,
          location: {
            lat: 0,
            lng: 0,
          },
        },
        destination: {
          name: createRouteDto.destination_id,
          location: {
            lat: 0,
            lng: 0,
          },
        },
      },
    });
  }

  findAll() {
    return this.prismaService.route.findMany();
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} route`;
  // }

  // update(id: number, updateRouteDto: UpdateRouteDto) {
  //   return `This action updates a #${id} route`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} route`;
  // }
}
