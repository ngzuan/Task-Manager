import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseIdentityEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', {
        name: 'id',
    })
    id: string

    @CreateDateColumn({
        name: 'createdDateAt'
    })
    createdDateAt: Date

    @DeleteDateColumn({
        name: 'deletedDateAt'
    })
    deletedDateAt: Date

    @UpdateDateColumn({
        name: 'updatedDateAt'
    })
    updatedDateAt: Date
}