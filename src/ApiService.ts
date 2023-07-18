import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Cliente, Compra, RespuestaProducto} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  };
  errorHandl(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<RespuestaProducto> {
    return this.http.post<RespuestaProducto>('http://localhost:8082/obtenerProductos', null,
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  registrarUsuario(data: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8082/registrarUsuario', data,
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  registrarCompra(data: Compra): Observable<Compra> {
    return this.http.post<Compra>('http://localhost:8082/registrarCompra', data,
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

}
