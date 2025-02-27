import {  Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string;
  public tituloSubs$!: Subscription;

  constructor( private router: Router, private route: ActivatedRoute){

    console.log( route.snapshot.children[0].data );

    this.tituloSubs$ = this.getArgumentoRuta()
                                            .subscribe( ({titulo}) => {
                                              this.titulo = titulo;
                                              document.title = `Admin pro - ${titulo}`;
                                            } );

  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentoRuta() {

    return this.router.events
      .pipe(
        filter<any>( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot.data ),
      )


  }

}
