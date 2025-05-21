import {Column, Model,Table, Unique, AllowNull } from 'sequelize-typescript'


interface NumsProps {
  number: number,
  sound: string
}

@Table({ tableName: 'nums' })
export class Nums extends Model<NumsProps> {
  
  @AllowNull(false)
  @Unique('user_indices')
  @Column
  number!: number

  @Column
  sound!: string
}

