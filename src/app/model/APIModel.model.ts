export class APIModel<T>{
  private success:boolean;
  private message:string;
  private _data: T;


    /**
     * Getter data @return {T}
     */
    public get data(): T {
        return this._data;
    }


/**
     * Setter data@param {T} value
     */
    public set data(value: T) {
        this._data= value;
    }


}
