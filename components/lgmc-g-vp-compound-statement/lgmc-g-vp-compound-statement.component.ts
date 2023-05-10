import { Component, Input, OnInit } from '@angular/core';
import { LgmcGVPAbstracStatement } from '../../abstract/lgmc-g-vp-abstract-statement';
import { LgmcVPCompoundStatement, LgmcVPExpression } from '../../model/lgmc-g-vp-program.model';
import { LgmcVPLanguage, LgmcVPStatementLanguage } from '../../model/lgmc-g-vp-language.model';

@Component({
  selector: 'lgmc-g-vp-compound-statement',
  templateUrl: './lgmc-g-vp-compound-statement.component.html',
  styleUrls: ['./lgmc-g-vp-compound-statement.component.css']
})
export class LgmcGVPCompoundStatementComponent extends LgmcGVPAbstracStatement<LgmcVPCompoundStatement> implements OnInit {

  public condition: LgmcVPExpression = "";
  
  public typing: boolean = false;
  
  public updating: boolean = false;

  protected timer: NodeJS.Timeout;

  public readonly defaultStmtLanguage: LgmcVPStatementLanguage = {
    component: "compound",
    label: "if",
    icon: "pi-question-circle",
    color: "white",
    backgroundColor: "#F08080",
    extensions: {
      enableCondition: true
    }
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();

    if(!this.stmt.block) {
      this.stmt.block = [];
    }
    if(!this.stmt.condition) {
      this.stmt.condition = "";
    }
  }

  protected getDefaultStatement(): LgmcVPCompoundStatement {
    return {
      name: "if",
      condition: "",
      block: []
    };
  }
  
  protected showUpdating() {
    this.updating = true;
      setTimeout(() => {
        this.updating = false
        this.typing = false;
      }, 500);
  }

  public onInputChange(value) {
    this.condition = value;
    this.typing = true;
    if(this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.stmt.condition = this.condition;
      this.timer = undefined;
      this.showUpdating();
      this.update();
    }, 1000);
  }

}
