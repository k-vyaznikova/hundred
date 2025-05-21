import {Column, Model,Table, AllowNull } from 'sequelize-typescript'


interface PicsProps {
  picture: string
}

@Table({ tableName: 'pics' })
export class Pics extends Model<PicsProps> {
  
  @AllowNull(false)
  @Column
  picture!: string
}

