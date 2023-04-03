import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';

export interface Usuarios {
  position: number;
  nome: string;
  sobrenome: string;
  email:string;
  //dataNascimento: '';
  //escolaridade: number;
}

const ELEMENT_DATA: Usuarios[] = [
  {position: 1, nome: 'Eric', sobrenome: 'Ranzani', email: 'eric@gmail.com'},
  {position: 2, nome: 'Gabi', sobrenome: 'Gabisson', email: 'gabi@gmail.com"'},
  {position: 3, nome: 'Gui', sobrenome: 'Guisson', email: 'gui@gmail.com'},
  {position: 4, nome: 'Lucas', sobrenome: 'Lucasson', email: 'lucas@gmail.com'},
  {position: 5, nome: 'Barbara', sobrenome: 'Barbarasson', email: 'barbara@gmail.com'},
  {position: 6, nome: 'João', sobrenome: 'Joãosson', email: 'joao@gmail.com'},
  {position: 7, nome: 'Bia', sobrenome: 'Biasson', email: 'bia@gmail.com'},
  {position: 8, nome: 'Caio', sobrenome: 'Caiosson', email: 'caio@gmail.com'},
  {position: 9, nome: 'Bianca', sobrenome: 'Biacasson', email: 'bianca@gmail.com'},
  {position: 10, nome: 'Bruno', sobrenome: 'Brunosson', email: 'bruno@gmail.com'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable) //ViewChild para pegar o id filho
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'nome', 'sobrenome', 'email', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

  }

  openDialog(usuario: Usuarios | null): void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: usuario === null ? {
        position: null,
        nome: '',
        sobrenome: '',
        email:'',
      } : {
        position: usuario.position,
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        email: usuario.email,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        if (this.dataSource.map(p => p.position).includes(result.position)){
          this.dataSource[result.position - 1] = result;
          this.table.renderRows();
        }else{
          this.dataSource.push(result);
          this.table.renderRows();
        }  
      }
    });
  }

  editUsuario(usuario: Usuarios): void {
    this.openDialog(usuario);
  }

  deleteUsuario(position : number): void{
    this.dataSource = this.dataSource.filter(p => p.position !== position);
  } 
}
