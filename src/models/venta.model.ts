import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Factura} from './factura.model';

@model()
export class Venta extends Entity {
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
  placa: string;

 @property({
    type: 'number',
    required: true,
  })  id_cliente: number;

 @property({
    type: 'number',
    required: true,
  })  id_vehiculo: number;

 @property({
    type: 'number',
    required: true,
  })  id_vendedor: number;

  @hasOne(() => Factura, {keyTo: 'id_venta'})
  factura: Factura;

  constructor(data?: Partial<Venta>) {
    super(data);
  }
}

export interface VentaRelations {
  // describe navigational properties here
}

export type VentaWithRelations = Venta & VentaRelations;
