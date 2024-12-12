import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recarga } from '../models/recarga.interface';

@Injectable({
    providedIn: 'root'
})
export class RecargaService {
    private apiUrl = '';

    constructor(private http: HttpClient) { }

    postRecarga(recarga: Recarga): Observable<any> {
        return of(recarga);
        return this.http.post(this.apiUrl, recarga);
    }

    getAllrecargas(payload: string = ''): Observable<any[]> {
        const recargas: Partial<Recarga>[] = [
            { id_recarga: 1, monto: 100, telefono: 1234567890, fecha: new Date('2023-11-20'), id_operador: 1, estado: 'APROBADO' },
            { id_recarga: 2, monto: 200, telefono: 9876543210, fecha: new Date('2023-12-01'), id_operador: 2, estado: 'APROBADO' },
            { id_recarga: 3, monto: 50, telefono: 1112223333, fecha: new Date('2023-11-15'), id_operador: 1, estado: 'APROBADO' },
            { id_recarga: 4, monto: 150, telefono: 4445556666, fecha: new Date('2023-11-25'), id_operador: 2, estado: 'APROBADO' },
            { id_recarga: 5, monto: 250, telefono: 7778889999, fecha: new Date('2023-12-05'), id_operador: 1, estado: 'APROBADO' },
            { id_recarga: 6, monto: 100, telefono: 3451112222, fecha: new Date('2023-11-28'), id_operador: 2, estado: 'APROBADO' },
            { id_recarga: 7, monto: 150, telefono: 3334445555, fecha: new Date('2023-12-02'), id_operador: 1, estado: 'APROBADO' },
            { id_recarga: 8, monto: 200, telefono: 6667778888, fecha: new Date('2023-11-29'), id_operador: 2, estado: 'APROBADO' },
            { id_recarga: 9, monto: 50, telefono: 9990001111, fecha: new Date('2023-12-03'), id_operador: 1, estado: 'APROBADO' },
            { id_recarga: 10, monto: 100, telefono: 2223334444, fecha: new Date('2023-11-27'), id_operador: 2, estado: 'APROBADO' },

        ];
        return of(recargas);
        return this.http.get<Recarga[]>(this.apiUrl + payload);
    }

    getTotales(payload: string = ''): Observable<any[]> {
        const recargas: any[] = [
            { id_operador: 9, cantidad: 5, total: 99898 },
        ];
        return of(recargas);
        return this.http.get<any[]>(this.apiUrl + payload);
    }
}
