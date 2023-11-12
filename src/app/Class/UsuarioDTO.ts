export class UsuarioDTO {
    NombreUsuarioDTO: string;
    ContraseñaDTO: string;

    constructor(item?: UsuarioDTO){
        this.NombreUsuarioDTO = item?.NombreUsuarioDTO ?? '',
        this.ContraseñaDTO = item?.ContraseñaDTO ?? ''
    }
}
