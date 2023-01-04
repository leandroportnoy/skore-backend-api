import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column
  } from 'typeorm';
import { ContentType } from './enums/content-type.enums';

  @Entity()
  @Unique(['name'])
  export class Content extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    description: string;
  
    @Column({ nullable: false, type: 'varchar', length: 20 })
    type: ContentType;
  
  }