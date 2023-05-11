import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {

  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>, 
    
  ) {}

  create(createRolDto: CreateRolDto) {
    const user = this.rolRepository.create(createRolDto);
    return this.rolRepository.save(user);
    //return 'This action adds a new rol';
  }

  findAll() {

    return this.rolRepository.find({ relations: ['user'] });
    //return `This action returns all users`;
  }

  findOne(id: number) {
    return this.rolRepository.findOne({
      where: { id: id },
    });
    //return `This action returns a #${id} user`;
  }
  
 

  findByUser(nickname: string): Promise<Rol | undefined>  { 
    return this.rolRepository.findOne({
      where: { name: nickname },
    });
    //return `This action returns a #${id} user`;
  }

  getUsers() {
    return this.rolRepository.find();
  }

  update(id: number, updateUserDto: UpdateRolDto) {
    return this.rolRepository.update({ id }, updateUserDto);
    //return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.rolRepository.delete({ id });
    //return `This action removes a #${id} user`;
  }
}
