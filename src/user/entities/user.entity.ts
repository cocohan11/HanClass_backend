import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { IsPhoneNumber } from "class-validator";
import { BaseTable } from "src/common/entity/base.entity";


// LoginType Enum 정의
export enum LoginType { 
    KAKAO = 'kakao',
    GOOGLE = 'google',
    NAVER = 'naver',
    EMAIL = 'email' // 현재는 email이 디폴트. 추후 확장예정
}
  

@Entity() 
export class User extends BaseTable {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    @Exclude() // 은닉
    password: string;

    @Column({
        type: 'enum',
        enum: LoginType,
        default: LoginType.EMAIL
    })
    loginType: string;

    @Column()
    @IsPhoneNumber(null, { message: '유효한 전화번호 형식이 아닙니다.' })
    phone: string;

    @Column() // 필수값 
    name: string;

    @Column({ default: true })
    isActive: boolean;
    
    //------------ 필수 X ---------------

    @Column({ nullable: true, default: 'https://example.com/default-profile.png' }) // TODO: 기본이미지가 올라와있는 url로 변경하기기
    profileImgUrl: string;
    
}
