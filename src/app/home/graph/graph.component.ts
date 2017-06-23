import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  
  private _graph = [];
  public title: string;
  public description: string;

  @Input()
  set graph (graph: Array<any>) {
    this._graph = graph;
    this.title = graph['title'];
    this.description = graph['description'];

  }
  get graph (): Array<any> {
    return this._graph;
  }
  constructor() { }

  ngOnInit() {
  }
}
