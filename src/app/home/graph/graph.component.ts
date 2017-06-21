import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  
  private _graph = [];

  @Input()
  set graph (graph: Array<any>) {
    this._graph = graph;
    this.onInitGraph();
  }
  get graph (): Array<any> {
    return this._graph;
  }
  constructor() { }

  ngOnInit() {
  }

  onInitGraph() {
    
  }

}
