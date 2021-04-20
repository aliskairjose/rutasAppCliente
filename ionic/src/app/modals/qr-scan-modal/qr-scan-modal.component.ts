import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component( {
  selector: 'app-qr-scan-modal',
  templateUrl: './qr-scan-modal.component.html',
  styleUrls: [ './qr-scan-modal.component.scss' ],
} )
export class QrScanModalComponent implements OnInit {

  constructor(
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() { }

  onClick(): void {
    this.barcodeScanner.scan().then( barcodeData => {
      // success. barcodeData is the data returned by scanner
      alert( 'Ok' );
    } ).catch( err => {
      // error
      alert( 'Error' );
    } );
  }


}
