import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: []
})
export class BreadCrumbsComponent implements OnInit, OnDestroy {

  titulo: string;
  tituloSubs$: Subscription;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta()
                        .subscribe( data => {
                          this.titulo = data.titulo;
                          document.title = `AdminPro - ${this.titulo}`;
                        });
  }

  ngOnInit() {
  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter( (event: ActivationEnd) => event instanceof ActivationEnd && event.snapshot.firstChild === null),
        map( (event: ActivationEnd) => event.snapshot.data )
      );
  }

  ngOnDestroy() {
    this.tituloSubs$.unsubscribe();
  }

}
