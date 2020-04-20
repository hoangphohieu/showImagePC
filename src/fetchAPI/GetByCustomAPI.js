import * as type from "../constants";
import axios from 'axios';
export default function callAPi(param) {
      console.log(param);

      return new Promise((resolve, reject) => {
            let url = param;
            // let url = type.URL_PC_FAIL ;
            // console.log("GetTacking", url);


            fetch(url, {
                  method: "GET",
                  headers: {
                        'Content-Type': 'application/json'
                  }
            })    
                  .then(response => response.json())
                  .then(res => {
                        console.log(res);

                        resolve(res);
                  })
                  .catch(err => {
                        console.log(err);

                        reject(err)
                  })
      })
}
