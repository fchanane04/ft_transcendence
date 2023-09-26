import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['username', 'email']) // Ensures that both username and email are unique in the database
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  username: string;

  @Column({unique:true})
  email: string;

  // Add additional columns and relationships as needed
}