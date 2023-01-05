import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-bprosys',
  templateUrl: './table-bprosys.component.html',
  styleUrls: ['./table-bprosys.component.scss']
})
export class TableBprosysComponent implements OnChanges {
  @Input() dataTable!:Array<any>;
  displayedColumns: string[] = ['Cedula','Nombre', 'PIN', 'Monto' ,'Fecha',];
  dataSource!:MatTableDataSource<any>;
  total:any;

  ngOnChanges(){
    if(this.dataTable)this.dataSource = new MatTableDataSource(this.dataTable);
    let contador = 0;
    this.dataTable.map((res:any)=>{
      contador = contador + res.Monto;
    });
    this.total = contador;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
