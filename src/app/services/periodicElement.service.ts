
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PeriodicElement } from "../models/PeriodicElement";

@Injectable()
export class PeriodicElementService {
    elementApiUrl = 'https://localhost:44366/api/PeriodcElemets';
    constructor(private http: HttpClient){}

    getElements(): Observable<PeriodicElement[]>{
        return this.http.get<PeriodicElement[]>(this.elementApiUrl);
    }
 }