function showresult(){
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;

    var yes = document.getElementsByClassName('aa')
    for(let i =0;i<yes.length;i++){
      if(yes[i].checked && yes[i].value==1)
      {
        count1++
      }
    else if(yes[i].checked && yes[i].value==2)
      {
        count2++
      }
      else if(yes[i].checked && yes[i].value==3)
      {
        count3++
        
      }
      else if (yes[i].checked && yes[i].value==4)
      {
        count4++
        
      }
      
   
    }
    
    

alert(` 1:${count1} 2:${count2} 3:${count3} 4:${count4} `);
  }