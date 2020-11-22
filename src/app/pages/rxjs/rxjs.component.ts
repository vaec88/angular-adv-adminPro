import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;

  constructor() {

    // Cuando alguien se suscribe al observable, es cuando se empieza a ejecutar.
    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //     valor => console.log('Subs: ', valor),
    //     error => console.warn('Error: ', error),
    //     () => console.log('Obs terminado'));
    this.intervalSubs = this.retornaIntervalo()
      .subscribe((valor) => console.log(valor));
  }

  ngOnInit() {
  }

  retornaIntervalo(): Observable<number> {
    return interval(100)
            .pipe(
              //take(10),
              map(valor => valor + 1), // Especifica el número de emisiones del observable y luego hace el complete
              filter(valor => valor % 2 === 0)
            );

  }

  retornaObservable(): Observable<number> {
    let i = -1;

    // El observable no se ejecuta hasta que al menos alguien se suscriba a el.
    return new Observable<number>( observer => {

      const intervalo = setInterval( () => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval( intervalo );
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });

  }

  ngOnDestroy() {
    this.intervalSubs.unsubscribe();
  }

}
