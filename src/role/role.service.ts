import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}

  async findOneByName(name: string) {
    const role = await this.roleRepository.findOne({ name });

    if (role) {
      return role;
    }

    throw new NotFoundException(`There is no role under this name ${name}`);
  }
}
