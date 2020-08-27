import { ErrorHandler, Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root',
})
export class AppErrorHandler extends ErrorHandler {
  constructor(private logger: NGXLogger) {
    super();
  }

  handleError(error: any): void {
    this.logger.error(error);
    super.handleError(error);
  }
}
