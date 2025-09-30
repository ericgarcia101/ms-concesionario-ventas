import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Venta} from './venta.model';

@model({
  settings:{
    foreignKeys:{
      fk_factura_id_venta:{
        name: 'fk_factura_id_venta',
        entity:'Venta',
        entityKey:'id',
        foreignKey: 'id_venta'
      },

    }
  }
})
export class Factura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  consecutivo: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  precio_venta: number;

  @belongsTo(() => Venta, {name: 'pertenece_a'})
  id_venta: number;

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
