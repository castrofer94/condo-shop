import {Component, OnInit} from '@angular/core';
import {Municipio, Uf} from '../../shared/models/regiao.model';
import {RegiaoService} from '../../shared/services/regiao.service';

@Component({
  selector: 'cs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private regiaoService: RegiaoService) {
  }

  loading = false;
  listaUf: Uf[];
  uf = '1';
  listaMunicipio: Municipio[];
  municipio = '1';

  ngOnInit() {
    this.loading = true;
    this.regiaoService.buscaTodasUf().subscribe(resp => {
      this.listaUf = resp;
      this.loading = false;
    });
  }

  carregaMunicipio() {
    this.loading = true;
    if (this.uf === '1') {
      this.listaMunicipio = undefined;
      this.municipio = '1';
    } else {
      this.regiaoService.buscaMunicipioUf(this.uf).subscribe(resp => {
        this.listaMunicipio = resp;
        this.loading = false;
      });
    }
    this.loading = false;
  }
}
