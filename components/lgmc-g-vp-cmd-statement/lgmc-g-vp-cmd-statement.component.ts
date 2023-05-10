import { Component, OnInit } from '@angular/core';
import { LgmcVPCommand, LgmcVPExpression } from '../../model/lgmc-g-vp-program.model';
import { LgmcVPStatementLanguage } from '../../model/lgmc-g-vp-language.model';
import { LgmcGVPAbstracStatement } from '../../abstract/lgmc-g-vp-abstract-statement';

@Component({
  selector: 'lgmc-g-vp-cmd-statement',
  templateUrl: './lgmc-g-vp-cmd-statement.component.html',
  styleUrls: ['./lgmc-g-vp-cmd-statement.component.css']
})
export class LgmcGVPCmdStatementComponent extends LgmcGVPAbstracStatement<LgmcVPCommand> implements OnInit {

  public values: LgmcVPExpression[] = [];
  
  public typing: boolean = false;

  public updating: boolean = false;

  protected timer: NodeJS.Timeout;

  public readonly defaultStmtLanguage: LgmcVPStatementLanguage = {
    component: "cmd",
    label: "unknown",
    icon: "pi-bolt",
    color: "white",
    backgroundColor: "#F08080",
    extensions: {
      params: {
        type: "array",
        defs: String
      }
    }
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();

    if(!this.stmt.params) {
      this.stmt.params = [];
    }
    this.values = [...this.stmt.params];
  }

  protected getDefaultStatement(): LgmcVPCommand {
    return {
      name: "unknown",
      params: []
    };
  }
  
  protected showUpdating() {
    this.updating = true;
      setTimeout(() => {
        this.updating = false;
        this.typing = false;
      }, 500);
  }

  public onInputChange(value, i) {
    this.values[i] = value;
    this.typing = true;
    if(this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.stmt.params = [...this.values];
      this.timer = undefined;
      this.showUpdating();
      this.update();
    }, 1000);
  }

  public remove(i) {
    this.values.splice(i, 1);
    this.stmt.params = [...this.values];
    this.showUpdating();
    this.update();
  }

  public add() {
    this.values = [...this.values, ""];
    this.stmt.params = [...this.values];
    this.showUpdating();
    this.update();
  }

}
