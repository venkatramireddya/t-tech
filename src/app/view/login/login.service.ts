import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public downloadDocuments() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/pdf",
        responseType: "blob",
        Accept: "application/pdf",
        observe: "response",
      }),
    };
    //const url= `${environment.api}/download/help/pdf2`;
    const url= `${environment.api}/login-gateway/login`;
    return this.http.get(
      url, { responseType: 'blob' }
      ).toPromise().then(data => {
        const blob= new Blob([data], {type: 'application/pdf'})
        LoginService.downloadHelper(blob,'Test');
      });
  }

  public static downloadHelper(blob: Blob, fileName: string):void {
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fileName+'pdf');
    } else {
      const blobUrl = URL.createObjectURL(blob)
      //window.open(blobUrl, '_blank');
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download= 'file';
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(blobUrl);
        link.remove();
    }, 100);
    }
  }
}
