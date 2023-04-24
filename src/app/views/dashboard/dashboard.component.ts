import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from '../login/login.component';
import { CrudService } from 'src/app/services/crud.service';
import { IPagamentos } from 'src/app/models/IPagamentos';
import { MatDialog } from '@angular/material/dialog';
import { NovoPagamentoComponent } from 'src/app/components/novo-pagamento/novo-pagamento.component';
import { EditarPagamentoComponent } from 'src/app/components/editar-pagamento/editar-pagamento.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'data',
    'firstName',
    'lastName',
    'isPayed',
    'title',
    'username',
    'value',
    'editar',
  ];

  listPayments: IPagamentos[] = [];

  dataSource: any = [];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private crudService: CrudService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initializeFields();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  initializeFields() {
    this.crudService.getAllPayments().subscribe({
      next: (pagamentos) => {
        console.log(pagamentos.items);
        this.listPayments = pagamentos.items;
        console.log(this.listPayments);
        this.dataSource = new MatTableDataSource<IPagamentos>(
          this.listPayments
        );
        this.dataSource.sort = this.sort;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  openDialog() {
    this.dialog.open(NovoPagamentoComponent);
  }


  checkLogin() {
    console.log(this.loginService.isLoggedIn$);
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
    console.log('logout feito, localStorage limpo');
    this.loginService.statusLogIn();
    console.log(this.loginService.isLoggedIn$);
  }

  getPayments() {
    this.crudService.getAllPayments().subscribe({
      next: (dataPayments) => {
        console.log(dataPayments);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletarPagamento() {}
}
