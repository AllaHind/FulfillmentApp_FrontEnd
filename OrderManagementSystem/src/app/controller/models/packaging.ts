import {Order} from './order';

export class Packaging {

  public id : number ;
  public code : string;
  public status : string;
  public createdAt : string;
  public order = new Order();
}
