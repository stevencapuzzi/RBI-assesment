function dirReduc(arr){
    let changes = false;
    let j = 1;
    for(let i=0;i<arr.length;i++){
      if(arr[i]=="NORTH" && arr[j]=="SOUTH" || arr[i]=="SOUTH" && arr[j]=="NORTH"){
         arr[i] = null;
         arr[j] = null;
         changes = true;
      }else if(arr[i]=="EAST" && arr[j]=="WEST" || arr[i]=="WEST" && arr[j]=="EAST"){
         arr[i] = null;
         arr[j] = null;
         changes = true;
      }
      j++;
    }
   let filteredArr = arr.filter(a => a !== null);
 if( filteredArr.length==0 || changes==false){
    return filteredArr;
 }else{
  return dirReduc(filteredArr);
 }  

}
