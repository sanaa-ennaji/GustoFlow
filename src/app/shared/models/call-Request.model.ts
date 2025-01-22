import { Table } from './table.model';

export interface CallRequest {
  id: string;
  requestType: String;
  RequestStatus: String;
  table: Table;
 
}

