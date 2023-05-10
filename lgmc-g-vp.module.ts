import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LgmcGVPStatementComponent } from './components/lgmc-g-vp-statement/lgmc-g-vp-statement.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LgmcGVPCmdStatementComponent } from './components/lgmc-g-vp-cmd-statement/lgmc-g-vp-cmd-statement.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LgmcGVPExpressionComponent } from './components/lgmc-g-vp-expression/lgmc-g-vp-expression.component';
import { LgmcGVPBlockComponent } from './components/lgmc-g-vp-block/lgmc-g-vp-block.component';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { LgmcGVPCompoundStatementComponent } from './components/lgmc-g-vp-compound-statement/lgmc-g-vp-compound-statement.component';
import { LgmcGVPToStringPipe } from './pipes/lgmc-g-vp-tostring.pipe';
import { LgmcGVpTestPosPipe } from './pipes/lgmc-g-vp-testpos.pipe';
import { LgmcGVpProgramComponent } from './components/lgmc-g-vp-program/lgmc-g-vp-program.component';
import { LgmcGVpGeneratePipe } from './pipes/lgmc-g-vp-generate.pipe';
import { LgmcGVpTextEditorComponent } from './components/lgmc-g-vp-text-editor/lgmc-g-vp-text-editor.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    LgmcGVPBlockComponent,
    LgmcGVPCmdStatementComponent,
    LgmcGVPCompoundStatementComponent,
    LgmcGVPExpressionComponent,
    LgmcGVpProgramComponent,
    LgmcGVPStatementComponent,
    LgmcGVpTestPosPipe,
    LgmcGVPToStringPipe,
    LgmcGVpGeneratePipe,
    LgmcGVpTextEditorComponent
  ],
  imports: [
    AutoCompleteModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    InputTextareaModule,
    InputTextModule,
    ToggleButtonModule,
    TranslateModule,
  ],
  exports: [
    LgmcGVPBlockComponent,
    LgmcGVPCmdStatementComponent,
    LgmcGVPCompoundStatementComponent,
    LgmcGVPExpressionComponent,
    LgmcGVpProgramComponent,
    LgmcGVPStatementComponent,
    LgmcGVpGeneratePipe,
  ]
})
export class LgmcGVPModule { }
