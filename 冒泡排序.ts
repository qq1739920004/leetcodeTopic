function bubblingSort(arr:number[]){
  for(let i=0;i<=arr.length;i++){
    for(let ii=0;ii<=arr.length;ii++){
      if(arr[ii]>arr[ii+1]){
        let tem=arr[ii+1]
        arr[ii+1]=arr[ii]
        arr[ii]=tem
      }
    } 
  }
  return arr
}
console.log(bubblingSort([12,4,1,52,2,2,56,2]));