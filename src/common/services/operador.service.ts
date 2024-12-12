import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Operador } from '../models/operador.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OperadorService {
    private apiUrl = '';

    constructor(private http: HttpClient) { }

    getOperadores(): Observable<Operador[]> {
        const operadores: Operador[] = [
            { id_operador: 1, nombre: 'Claro' },
            { id_operador: 2, nombre: 'Movistar' },
            { id_operador: 3, nombre: 'Operador 3' },
        ];
        return of(operadores);
        return this.http.get<Operador[]>(this.apiUrl);
    }
}
