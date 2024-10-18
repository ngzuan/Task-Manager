import { BaseIdentityEntity } from "src/helpers/base-identity.entity";
import { UserStatus } from "src/helpers/constants/user.enum";
import { Column, Entity } from "typeorm";

@Entity({ name: 'users' })
export class User extends BaseIdentityEntity {

    @Column({ name: "name" })
    name: string

    @Column({ type: "varchar" })
    email: string

    @Column({ type: "varchar" })
    password: string

    @Column({ type: "enum", enum: UserStatus, enumName: "UserStatus" })
    status: UserStatus

    @Column({ name: "country" })
    country: string

    @Column({ name: "bio" })
    bio: string

    @Column({ type: "varchar" })
    photo: string

    @Column({ name: "dob" })
    dob: Date

    @Column({ type: "json" })
    setting: object

}