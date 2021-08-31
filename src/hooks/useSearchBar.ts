import { useState } from "react";

const WAIT_INTERVAL = 1000;

export const useSearchBar = () => {
     let result: any[] = [];
     let timer: NodeJS.Timeout; 
     
     const searchByName = (nameSearching: string, array: any[]) => {
          return new Promise<any[]>((resolve) => {
               clearInterval(timer);
     
               setTimeout(() => {
                    let tempSearch = nameSearching.toLocaleLowerCase().trim();
                    let tempResults = array.filter((item) => {
                         let tempName = item.name.toLocaleLowerCase().trim();
                         return tempName.includes(tempSearch)
                    });               
                    resolve(tempResults);            
               }, WAIT_INTERVAL);
          })
     }
     
     return {
          searchByName,
          result
     }

}
