$(document).ready(function(){

  // emptying cache

  // binding click handlers with Jquery because ... vanilla JS is ...
  // $('#createCache10').click(function(){
  //   list.reset()
  //   list.appendNewNode_n(10)
  // });
  //
  // $('#createCache100').click(function(){
  //   list.reset()
  //   list.appendNewNode_n(100)
  //
  //   console.log('cache = ', mainCache);
  // });

  $('button[id^="createCache$"]').click(function(){
    list.appendNewNode_n(parseInt(this.id.split('$')[1]))
  });



  function runTest(amount){
    if(amount){
      switch (parseInt(amount)) {
        case 10:
          console.log('running a case with 10 records');



          break;
        case 100:
          console.log('running a case with 100 records');
          // code here
          break;
        default:
      }
    }else{
      console.error('please specify 10 OR 99 OR 100 OR 101 in method call');
    }

  }

  function runAllTests(){

  }



});
