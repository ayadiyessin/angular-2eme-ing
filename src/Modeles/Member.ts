import { Article } from "./Article";
import { Evt } from "./Evt";

export interface Member{
    id : string,
    cin : string,
    name : string,
    cv : string,
    type : string,
    createDate : string,
    tab_pub :Article[
      // id :string,
      // type : string,
      //titre : string,
      //date : string,
    ],
    tab_evt:Evt[]

}
