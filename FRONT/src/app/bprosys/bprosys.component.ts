import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Toastr } from '../services/toastr.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bprosys',
  templateUrl: './bprosys.component.html',
  styleUrls: ['./bprosys.component.scss']
})
export class BprosysComponent implements OnInit {

  inputCedula:FormControl = new FormControl();
  buttonDisable!:boolean;
  data:Array<any> = [];
  statusSpinner = "Bienvenido";
  noFound!:boolean;

  constructor(
    private readonly spinner: NgxSpinnerService,
    private readonly toastr: Toastr,
    private readonly dataService: DataService,
  )
  {
    spinner;
    toastr;
    dataService;
  }

  ngOnInit(): void {
    this.listenInput();
    setTimeout(()=>{
      this.toastr.showSuccess('a la sustentación de la prueba técnica', 'Bienvenido');
    }, 2500);
  }

  initSpinner(){
    this.spinner.show();
    this.delaySpinner();
  }

  listenInput(){
    this.inputCedula.setValidators([Validators.maxLength(12)]);
    this.inputCedula.statusChanges.subscribe((res)=>{
      this.buttonDisable = res === 'INVALID'?true:false;
    });
  }

  getData(){
    this.statusSpinner = 'Buscando datos';
    this.spinner.show();
    try{
      const cedula = this.inputCedula.value;
      const response = this.dataService.getData(cedula);
      response.subscribe((res)=>{
        this.noFound = res?.status === 'Not found' ? true : false;
        this.data = [...res.data];
      });
      this.delaySpinner();
    }catch(err){
      this.toastr.showError('Error en la consulta', 'No hemos podido optener los datos')
      this.delaySpinner();
    }
  }

  resetData(){
    this.statusSpinner = 'Reseteando datos';
    this.noFound = false;
    this.inputCedula.setValue(null);
    this.spinner.show();
    this.data = [];
    this.delaySpinner();
  }

  delaySpinner(){
    setTimeout(()=>{
      this.spinner.hide();
    },500);
  }
}
