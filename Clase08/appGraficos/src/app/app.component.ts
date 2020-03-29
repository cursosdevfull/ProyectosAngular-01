import { Component } from '@angular/core';
import { SocketService } from './service/socket.service';
import { CovidService } from './service/covid.service';
import { Covid } from './models/covid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: number[] = [700, 500];

  results = [
    { name: 'Candidato 1', value: 4 },
    { name: 'Candidato 2', value: 20 },
    { name: 'Candidato 3', value: 8 },
    { name: 'Candidato 4', value: 12 },
    { name: 'Candidato 5', value: 15 }
  ];

  resultsSeries = [
    {
      name: 'Perú',
      series: [
        {
          name: 'enero',
          value: '1'
        },
        {
          name: 'febrero',
          value: '20'
        },
        {
          name: 'marzo',
          value: 680
        }
      ]
    },
    {
      name: 'Chile',
      series: [
        { name: 'enero', value: 14 },
        { name: 'febrero', value: 80 },
        { name: 'marzo', value: 1200 }
      ]
    },
    {
      name: 'Ecuador',
      series: [
        { name: 'enero', value: 34 },
        { name: 'febrero', value: 120 },
        { name: 'marzo', value: 900 }
      ]
    }
  ];

  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9']
  };

  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Candidatos';
  yAxisLabel = 'Votos';
  xAxisLabelCountries = 'Países';
  yAxixLabelContagiados = 'Cantidad de contagiados';

  legend = true;
  legendPosition = 'below';
  legendTitle = 'Resultados de elecciones';
  legendTitleContagiados = 'Meses';
  legendPositionContagiados = 'right';

  yScaleMin = 2;
  yScaleMax = 30;
  showGridLines = true;

  gradient = true;
  labels = true;

  doughnut = true;

  dataCovid = [];
  legendTitleCovid = 'Datos por país';
  xAxisLabelCovid = 'Países';
  yAxisLabelCovid = 'Cantidad de contagiados';
  viewCovid: number[] = [900, 600];

  constructor(
    private readonly socketService: SocketService,
    private readonly covidService: CovidService
  ) {
    this.socketService.listen('dataupdate').subscribe((results: []) => {
      this.results = results.map((el, ind) => {
        return { name: `Candidato ${ind + 1}`, value: el };
      });
    });

    this.covidService.getAll().subscribe((data: Covid[]) => {
      this.dataCovid = data.map((el: Covid) => {
        return { name: el.countryRegion, value: el.confirmed };
      });
    });
  }

  pieSelected(ev) {
    console.log(ev);
  }
}
