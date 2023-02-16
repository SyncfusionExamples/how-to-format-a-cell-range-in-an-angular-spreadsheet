import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from 
'@syncfusion/ej2-angular-spreadsheet';
import {FormatData} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  @ViewChild("spreadsheet")
  public ssObj: SpreadsheetComponent|undefined;

  public data:object = FormatData;

  public onCreate(){
    this.ssObj?.cellFormat({ fontWeight: 'bold', 
    textAlign: 'center' }, 'A1:H2');

    this.ssObj?.numberFormat("$#,##0.00","D3:F15");

    this.ssObj?.cellFormat({fontWeight:"bold", textAlign:"center", verticalAlign:"middle", fontSize:"13pt",
                            backgroundColor:"#1E88EE", color: "#FFFFFF"});
    this.ssObj?.cellFormat({fontWeight:'bold', textAlign:"center", backgroundColor:"#BBDEFB"}, "A2:H2");
    this.ssObj?.cellFormat({backgroundColor: "#F9FBE7"}, "D3:F15");
    
    this.ssObj?.conditionalFormat({type:"BlueDataBar", range:"D3:D15"});
    this.ssObj?.conditionalFormat({type:"GreenDataBar", range:"E3:E15"});

    this.ssObj?.conditionalFormat({type:"ThreeStars", range:"H3:H15"});
  }
}
