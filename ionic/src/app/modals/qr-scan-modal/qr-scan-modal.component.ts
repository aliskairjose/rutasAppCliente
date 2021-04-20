import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { CommonService } from '../../services/common.service';

@Component( {
  selector: 'app-qr-scan-modal',
  templateUrl: './qr-scan-modal.component.html',
  styleUrls: [ './qr-scan-modal.component.scss' ],
} )
export class QrScanModalComponent implements OnInit {

  constructor(
    private common: CommonService,
    private barcodeScanner: BarcodeScanner,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.scanBarcode();
  }

  private scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan( options ).then( barcodeData => {
      this.closeModal( barcodeData );
    } ).catch( () => {
      const message = 'Ha ocurrido un error';
      const color = 'danger';
      this.common.presentToast( { message, color } );
    } );
  }

  async closeModal( scannedData ) {
    await this.modalController.dismiss( scannedData, 'scanned' );

  }

}
