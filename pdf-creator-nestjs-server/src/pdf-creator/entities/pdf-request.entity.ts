import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PdfCreateRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    identityNumber: string

    @Column()
    templateName: string;
}