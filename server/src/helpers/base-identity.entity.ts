import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseIdentityEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn({
        default: () => 'now()',
        name: 'createdAt'
    })
    createdAt: Date

    @DeleteDateColumn({
        default: () => 'now()',
        name: 'deletedAt'
    })
    deletedAt: Date

    @UpdateDateColumn({
        default: () => 'now()',
        name: 'updatedAt'
    })
    updatedAt: Date
}