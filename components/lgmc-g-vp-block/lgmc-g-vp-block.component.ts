import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LgmcVPBlock, LgmcVPStatement, } from '../../model/lgmc-g-vp-program.model';
import { LgmcVPLanguage, LgmcVPStatementLanguage } from '../../model/lgmc-g-vp-language.model';

@Component({
  selector: 'lgmc-g-vp-block',
  templateUrl: './lgmc-g-vp-block.component.html',
  styleUrls: ['./lgmc-g-vp-block.component.css']
})
export class LgmcGVPBlockComponent implements OnInit {

  @Input() block: LgmcVPBlock;
  
  @Input() language: LgmcVPLanguage;

  @Input() parent: LgmcVPStatement = {
    name: "_"
  };

  @Output() onUpdate: EventEmitter<void> = new EventEmitter<void>();

  @Input() level: number = 0;

  public displayDialog: boolean = false;

  public selectedAddStatement: LgmcVPStatementLanguage & { id: string };

  public recommendedAddStatements: (LgmcVPStatementLanguage & { id: string })[] = [];

  constructor() { }

  ngOnInit(): void {
    this.reloadAddStatements();
  }

  protected reloadAddStatements(): void {
  }

  public up(statement: LgmcVPStatement, i: number) {
    if(i > 0) {
      let tmp = this.block[i];
      this.block[i] = this.block[i-1];
      this.block[i-1] = tmp;
      this.update();
    }
  }

  public down(statement: LgmcVPStatement, i: number) {
    if(i < this.block.length-1) {
      let tmp = this.block[i];
      this.block[i] = this.block[i+1];
      this.block[i+1] = tmp;
      this.update();
    }
  }

  public delete(statement: LgmcVPStatement, i: number) {
    this.block.splice(i, 1);
    this.update();
  }

  public add() {
    if(this.selectedAddStatement) {
      this.block.push({
        name: this.selectedAddStatement.id
      });
      this.update();
    }
  }

  public searchSuggestedValues(value) {
    let query = ((value.query) as String).toLowerCase()
    
    // recommended statements
    this.recommendedAddStatements = [];

    // built-in statement models
    Object.entries(this.language.stmt).forEach(([key, val]) => {
      if(
        (!val.levels || val.levels.includes(this.level)) &&
        (!val.avoidLevels || !val.avoidLevels.includes(this.level)) &&
        (!val.parents || val.parents.includes(this.parent.name)) &&
        (!val.avoidParents || !val.avoidParents.includes(this.parent.name)))
      {
        if(key.startsWith(query)) {
          this.recommendedAddStatements.push({
            id: key,
            ...val
          });
        }
      }
    });
  }

  update() {
    this.onUpdate.emit();
  }

}
