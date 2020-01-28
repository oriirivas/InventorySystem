export interface ResponseSell {
    cantidadVendidosDto: number;
    fechaVentaDto: Date;
    modeloDto: string;
    nombreSucursalDto: string;
    vendedorDto: string;

    
}
export interface ResponseSellItem {
    

    nombreVendedorDto: string;
    fechaDto: Date;
    productoDto:number;
    cantidadVendidoDto:  number;
    sucursalDto: string;

    total: number;
}