import {environment} from '../environments/environment';

export const API_BASE = environment.path;

export class ResponseModel {
  data: any[];
  status: StatusResponse;
}

export class StatusResponse {
  code: number;
  message: string;
}

export class Error {

  constructor() {
  }

  static error(error: Response | any) {
    console.log(error);
    return error;
  }
}
