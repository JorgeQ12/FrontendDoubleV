export class PersonaDTO {
    NombresDTO: string;
    ApellidosDTO: string;
    NumeroIdentificacionDTO: string;
    TipoIdentificacionDTO: string;
    TipoIdentificacionCodeDTO?: string;
    EmailDTO: string;

    constructor(item?: PersonaDTO){
        this.NombresDTO = item?.NombresDTO ?? '',
        this.ApellidosDTO = item?.ApellidosDTO ?? '',
        this.NumeroIdentificacionDTO = item?.NumeroIdentificacionDTO ?? '',
        this.TipoIdentificacionDTO = item?.TipoIdentificacionDTO ?? '',
        this.TipoIdentificacionCodeDTO = item?.TipoIdentificacionCodeDTO ?? '',
        this.EmailDTO = item?.EmailDTO ?? ''
    }
}
