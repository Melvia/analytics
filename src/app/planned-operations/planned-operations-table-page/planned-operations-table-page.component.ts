import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";

export interface PlannedOperations {
  targetDuration: number,
  activityGroup: string,
  activityPhase: string,
  mdFrom: number,
  mdTo: number,
  stepNo: string,
}

@Component({
  selector: 'app-planned-operations-table-page',
  templateUrl: './planned-operations-table-page.component.html',
  styleUrl: './planned-operations-table-page.component.scss',
})
export class PlannedOperationsTablePageComponent implements OnInit {
  @Input() plannedOperationsData : PlannedOperations[];

  displayedColumns: string[] = ['activityGroup', 'activityPhase', 'stepNo', 'mdFrom', 'mdTo', 'targetDuration', 'cost'];
  dataSource = new MatTableDataSource<any>();

  isLoading = true;

  pageNumber: number = 1;
  VOForm: FormGroup;
  isEditableNew: boolean = true;

  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([])
    });

    this.fetchData().subscribe((data) => {
        this.VOForm = this.fb.group({
          VORows: this.fb.array(data.map(val => this.fb.group({
              activityGroup: new FormControl(val.activityGroup),
              activityPhase: new FormControl(val.activityPhase),
            stepNo: new FormControl(val.stepNo),
              mdFrom: new FormControl(val.mdFrom),
              mdTo: new FormControl(val.mdTo),
              targetDuration: new FormControl(val.targetDuration),
              cost:  new FormControl(0),
              action: new FormControl('existingRecord'),
              isEditable: new FormControl(true),
              isNewRow: new FormControl(false),

            })
          )) //end of fb array
        }); // end of form group cretation
        //    this.changeDetector.detectChanges();

        this.isLoading = false;
        this.dataSource = new MatTableDataSource((this.VOForm.get('VORows') as FormArray).controls);
        this.dataSource.paginator = this.paginator;

        const filterPredicate = this.dataSource.filterPredicate;
        this.dataSource.filterPredicate = (data: AbstractControl, filter) => {
          return filterPredicate.call(this.dataSource, data.value, filter);
        }

      }
    );


    //Custom filter according to name column
    // this.dataSource.filterPredicate = (data: {name: string}, filterValue: string) =>
    //   data.name.trim().toLowerCase().indexOf(filterValue) !== -1;


  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  goToPage() {
    this.paginator.pageIndex = this.pageNumber - 1;
    this.paginator.page.next({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginatorList = document.getElementsByClassName('mat-paginator-range-label');

    this.onPaginateChange(this.paginator, this.paginatorList);

    this.paginator.page.subscribe(() => { // this is page change event
      this.onPaginateChange(this.paginator, this.paginatorList);
    });
  }

  applyFilter(event: Event) {
    //  debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // @ViewChild('table') table: MatTable<PeriodicElement>;
  AddNewRow() {
    // this.getBasicDetails();
    const control = this.VOForm.get('VORows') as FormArray;
    control.insert(0, this.initiateVOForm());
    this.dataSource = new MatTableDataSource(control.controls)
    // control.controls.unshift(this.initiateVOForm());
    // this.openPanel(panel);
    // this.table.renderRows();
    // this.dataSource.data = this.dataSource.data;
  }

  // this function will enabled the select field for editd
  EditSVO(VOFormElement, i) {

    // VOFormElement.get('VORows').at(i).get('name').disabled(false)
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(false);
    // this.isEditableNew = true;

  }

  // On click of correct button in table (after click on edit) this method will call
  SaveVO(VOFormElement, i) {
    // alert('SaveVO')
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }

  // On click of cancel button in the table (after click on edit) this method will call and reset the previous data
  CancelSVO(VOFormElement, i) {
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }


  paginatorList: HTMLCollectionOf<Element>;
  idx: number;

  onPaginateChange(paginator: MatPaginator, list: HTMLCollectionOf<Element>) {
    setTimeout((idx) => {
      let from = (paginator.pageSize * paginator.pageIndex) + 1;

      let to = (paginator.length < paginator.pageSize * (paginator.pageIndex + 1))
        ? paginator.length
        : paginator.pageSize * (paginator.pageIndex + 1);

      let toFrom = (paginator.length == 0) ? 0 : `${from} - ${to}`;
      let pageNumber = (paginator.length == 0) ? `0 of 0` : `${paginator.pageIndex + 1} of ${paginator.getNumberOfPages()}`;
      let rows = `Page ${pageNumber} (${toFrom} of ${paginator.length})`;

      if (list.length >= 1)
        list[0].innerHTML = rows;

    }, 0, paginator.pageIndex);
  }


  initiateVOForm(): FormGroup {
    return this.fb.group({
      activityGroup: new FormControl(''),
      activityPhase: new FormControl(''),
      mdFrom: new FormControl(''),
      mdTo: new FormControl(''),
      targetDuration: new FormControl(0),
      cost:  new FormControl(0),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(true),
      isNewRow: new FormControl(false),
    });
  }


  fetchData(): Observable<PlannedOperations[]> {
    return this.http.get<PlannedOperations[]>('assets/6BUVp.json');
  }


}
