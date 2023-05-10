import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { LgmcVPAbstractStatement, LgmcVPBlock } from "../model/lgmc-g-vp-program.model";
import { LgmcVPLanguage } from "../model/lgmc-g-vp-language.model";
import { LgmcGVpTestPosPipe } from "../pipes/lgmc-g-vp-testpos.pipe";

@Component({ template: '' })
export abstract class LgmcGVPAbstracStatement<T extends LgmcVPAbstractStatement> implements OnInit, OnChanges {
  
  @Input() stmt: T;

  @Input() language: LgmcVPLanguage;

  @Input() blockLength: number;

  @Input() position: number = -1;

  @Input() parent: LgmcVPAbstractStatement;

  @Input() level: number = 0;

  @Output() onUp: EventEmitter<void> = new EventEmitter<void>();

  @Output() onDown: EventEmitter<void> = new EventEmitter<void>();

  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  @Output() onUpdate: EventEmitter<void> = new EventEmitter<void>();

  public correctPos: boolean = true;

  public constructor() {
  }

  public ngOnInit(): void {
    if(!this.stmt) {
      this.stmt = this.getDefaultStatement();
    }
    
    this.checkPosition();
  }

  protected abstract getDefaultStatement(): T;

  public ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'blockLength': {
            this.checkPosition();
          }
          case 'position': {
            this.checkPosition();
          }
          case 'language': {
            this.checkPosition();
          }
        }
      }
    }
  }

  protected checkPosition() {
    const transformPipe = new LgmcGVpTestPosPipe()
    this.correctPos =
      transformPipe.transform(this.position, this.blockLength,
        true, this.language.stmt[this.stmt.name]?.positions) &&
      transformPipe.transform(this.position, this.blockLength,
        false, this.language.stmt[this.stmt.name]?.avoidPositions) &&
      this.isInCorrectParent() && this.isInCorrectLevel()
  }

  protected isInCorrectParent() {
    const parents = this.language.stmt[this.stmt.name]?.parents;
    const avoidParents = this.language.stmt[this.stmt.name]?.avoidParents;
    const result = (!parents || parents.includes(this.parent.name)) &&
        (!avoidParents || !avoidParents.includes(this.parent.name))
    return result;
  }

  protected isInCorrectLevel() {
    const levels = this.language.stmt[this.stmt.name]?.levels;
    const avoidLevels = this.language.stmt[this.stmt.name]?.avoidLevels;
    const result = (!levels || levels.includes(this.level)) &&
        (!avoidLevels || !avoidLevels.includes(this.level))
    return result;
  }

  up() {
    this.onUp.emit();
  }

  down() {
    this.onDown.emit();
  }

  delete() {
    this.onDelete.emit();
  }

  update() {
    this.onUpdate.emit();
  }
}