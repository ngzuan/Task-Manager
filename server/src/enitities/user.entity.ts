import { BaseIdentityEntity } from "src/helpers/base-identity.entity";
import { Column } from "typeorm";

export class User extends BaseIdentityEntity {

    @Column({ type: "nvarchar" })
    name: string

    @Column({ type: "varchar" })
    email: string

    @Column({ type: "varchar" })
    password: string

}