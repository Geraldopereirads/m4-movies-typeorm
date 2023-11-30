import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: "integer" })
  duration: number;

  @Column({ type: "integer" })
  price: number;

  @Column({ type: "text", nullable: true })
  description?: string | undefined | null;
}
