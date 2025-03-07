import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    // obs$.subscribe(
    //   valor => console.log('Subs: ', valor ),
    //   error => console.warn('Error: ', error),
    //   () => console.info('Obs terminado')
    // );


    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe({
    //   next: (valor) => console.log('Subs:', valor),
    //   error: (error) => console.warn('Error:', error),
    //   complete: () => console.info('Obs complete')
    // });

    this.intervalSubs = this.retornaIntervalo().subscribe( console.log )

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(10)
                        .pipe(
                          // take(10),
                          map( valor => valor + 1 ),
                          filter( valor => ( valor % 2 == 0 ) ? true : false ),
                        );

  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>( observer => {


      const intervalo = setInterval( () => {

        i++;
        observer.next(i)

        if( i === 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if( i === 2 ) {
          observer.error('i llego al valor de 2');
        }

      }, 1000)

    });

  }

}
