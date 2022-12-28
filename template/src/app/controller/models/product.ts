import {Category} from "./category";

export class Product {
  public id: number;
  public name: string;
  public sku: string;
  public description: string;
  public sellingPrice: number;
  public costPrice: number;
  public stockQuantity: number;
  public supplyLevel: number;
  public status: string;
  public volume: number;
  public weight: number;
  public category = new Category();
}
