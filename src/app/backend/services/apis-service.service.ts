import { Injectable } from '@angular/core';
import {GlobalVariablesService} from "../global/global-variables.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApisServiceService {
  constructor(private gv:GlobalVariablesService , private http: HttpClient,) {}

//-------------------- Coffee Niaz API Security: START --------------------//
  /**
   * add default user: کاربر افزودن
   * @param defPass پیشفرض عبور رمز
   * @returns Observable<any>
   */
  addDefaultUser(defPass: number): Observable<any> {
    const body = { defPass };
    return this.http.post(this.gv.ADD_USER_URL , body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /**
   * admin login : ادمین ورود
   * @param fullname مدیر کامل نام
   * @param password مدیر عبور رمز
   * @returns Observable<any>
   */
  adminLogin(fullname: string, password: string): Observable<any> {
    const body = { fullname, password };
    return this.http.post(this.gv.ADMIN_LOGIN_URL , body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
// -------------------- Coffee Niaz API Security: END --------------------//


//-------------------- Coffee Niaz API Customer: START --------------------//

  /**
   * customers signin , مشتری ورود
   * @param userData including customers information: username , fullname , password , phoneNumber and email
   * @returns Observable<any>
   */
  signup(userData: {
    username: string;
    fullname: string;
    password: string;
    phoneNumber: string;
    email: string;
  }): Observable<any> {
    return this.http.post(this.gv.SIGNUP_URL, userData, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /**
   * کاربر ورود
   * @param username کاربری نام
   * @param password عبور رمز
   * @returns Observable<any>
   */
  signin(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.gv.SIGNIN_URL, body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

//-------------------- Coffee Niaz API Customer: END --------------------//


//-------------------- Coffee Niaz API Product: START --------------------//

  /**
   * جدید محصول افزودن
   * @param productData product information
   * @returns Observable<any>
   */
  addNewProduct(productData: {
    name: string;
    brand: string;
    password: number;
    price: string;
    packagingType: string;
    productType: string;
    size: number;
    material: string;
    stock: number;
    description: string;
    category: string;
  }): Observable<any> {
    return this.http.post(this.gv.ADD_NEW_PRODUCT_URL, productData, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /**
   * محصول ویرایش
   * @param productData product information with id
   * @returns Observable<any>
   */
  editProduct(productData: {
    id: number;
    name: string;
    brand: string;
    password: number;
    price: string;
    packagingType: string;
    productType: string;
    size: number;
    material: string;
    stock: number;
    description: string;
    category: string;
  }): Observable<any> {
    return this.http.post(this.gv.EDIT_PRODUCTS_URL, productData, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /**
   * محصول حذف
   * @param id product id
   * @returns Observable<any>
   */
  removeProduct(id: number): Observable<any> {
    const body = { id };
    return this.http.post(this.gv.REMOVE_PRODUCTS_URL, body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /**
   * محصولات همه
   * @returns Observable<any>
   */
  getAllProducts(): Observable<any> {
    return this.http.post(this.gv.ALL_PRODUCTS_URL, {}, {
      headers: { 'accept': '*/*' },
    });
  }

  /**
   * تصویر نمایش
   * @param id شناسه تصویر محصول
   * @returns Observable<any>
   */
  showPhoto(id: number): Observable<Blob> {
    return this.http.get(this.gv.SHOW_PHOTO_URL + `/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'blob',
    });
  }

//-------------------- Coffee Niaz API Product: END --------------------//

}
