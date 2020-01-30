import { Component, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DOCUMENT } from '@angular/common'; 

declare var MrzScanner: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {  	

constructor(public platform: Platform) {
platform.ready().then(() => {

MrzScanner.setMaxThreads([2],null,null);

MrzScanner.registerWithLicenseKey(["LicenceKey"],null,null);

    });
}

  // getSdkVersion(){
  //   MrzScanner.getSdkVersion(null,versionStringSuccess=>{
  //     alert(versionStringSuccess);
  //   },null);
  // }


  // scanGallery(){
  //   MrzScanner.scanFromGallery(null,successfulMrzScan => {
  //     alert(
  //             "result "  + successfulMrzScan.document_type_raw + "\n"
  //             + successfulMrzScan.document_type_readable + "\n"
  //             + successfulMrzScan.issuing_country + "\n"
  //             + successfulMrzScan.surname + "\n"
  //             + successfulMrzScan.document_number + "\n"
  //             + successfulMrzScan.nationality + "\n"
  //             + successfulMrzScan.dob_raw + "\n"
  //             + successfulMrzScan.dob_readable + "\n"
  //             + successfulMrzScan.sex + "\n"
  //             + successfulMrzScan.est_issuing_date_raw + "\n"
  //             + successfulMrzScan.est_issuing_date_eadable + "\n"
  //             + successfulMrzScan.expiration_date_raw + "\n"
  //             + successfulMrzScan.expiration_date_readable + "\n"
  //             + successfulMrzScan.given_names_readale + "\n"
  //             + successfulMrzScan.optionals);
  //   }, null);
  // }

 //  startScanner3(){
 //        MrzScanner.setScannerType([2],null,null);
 //        MrzScanner.startScanner(null,successfulScanWithDocumentImage=>{
 //      var image = document.getElementById("scanImage").setAttribute("src","data:image/png;base64," + successfulScanWithDocumentImage );
 //    },null);
 //  }

	// startScanner2(){
	// 	MrzScanner.setScannerType([1],null,null);
	// 	MrzScanner.startScanner(null,successfulScanWithDocumentImage=>{
	// 		var image = document.getElementById("scanImage").setAttribute("src","data:image/png;base64," + successfulScanWithDocumentImage );
	// 	},null);
	// }

	startScanner1(){

		MrzScanner.startScanner(null,
			successfulMrzScan => {
         var surnameInputField = <HTMLInputElement>document.getElementById('surnameText')
         surnameInputField.value = successfulMrzScan.surname

         var givennameInputField = <HTMLInputElement>document.getElementById('givennameText')
         givennameInputField.value = successfulMrzScan.given_names_readable

         var documentNumberInputField = <HTMLInputElement>document.getElementById('dnText')
         documentNumberInputField.value = successfulMrzScan.document_number

         var dnInputField = <HTMLInputElement>document.getElementById('icText')
         dnInputField.value = successfulMrzScan.issuing_country

         var nationalityInputField = <HTMLInputElement>document.getElementById('nationalityText')
         nationalityInputField.value = successfulMrzScan.nationality

         var dateofBirthInputField = <HTMLInputElement>document.getElementById('dobText')
         dateofBirthInputField.value = successfulMrzScan.dob_readable

         var sexInputField = <HTMLInputElement>document.getElementById('sexText')
         sexInputField.value = successfulMrzScan.sex

         var eidInputField = <HTMLInputElement>document.getElementById('eidText')
         eidInputField.value = successfulMrzScan.est_issuing_date_eadable

         var exDateInputField = <HTMLInputElement>document.getElementById('exDateText')
         exDateInputField.value = successfulMrzScan.expiration_date_readable

         var ovInputField = <HTMLInputElement>document.getElementById('ovText')
         ovInputField.value = successfulMrzScan.optionals

		},null);
  }
 
}

		
	

