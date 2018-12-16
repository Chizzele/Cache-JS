$(document).ready(function(){
  //checking for cache
  if(localStorage.getItem('mainCache') != undefined || localStorage.getItem('mainCache') != null){
    $('#clearCacheDiv').show();
    mainCache.read();
  }else if(localStorage.getItem('testCache') != undefined || localStorage.getItem('testCache') != null){
    testCache.read();
  }else{
    $('#clearCacheDiv').hide();
  }

  $('#clearCache').click(function(){
    localStorage.clear();
    list.reset();
    test_list.reset();
    backup_list.reset();
    $('#clearCacheDiv').hide();
    console.clear();
  });

  $('button[id^="createCache$"]').click(function(){
    list.appendNewNode_n(parseInt(this.id.split('$')[1]))
    list.traverseNodes('forward', prepareForSaveMain);
    $('#giphy').addClass('gifyActive');
    $('#saveCache').prop('disabled', false);
  });

  $('#showCache').click(function(){
    mainCache.read();
  });

  $('#showDL').click(function(){
    list.logListOfNodes();
  });

  $('#saveCache').click(function(){
    mainCache.save()
    $('#showCache').prop('disabled', false);
    $('#showDL').prop('disabled', false);
    $('#clearCacheDiv').show();
  });


  $('#testCache100').click(function(){
    test_list.appendNewNode_n("", Node.preInitInstanceArr);
    test_list.traverseNodes('forward', prepareForSaveTest);
    $('#saveCache2s').prop('disabled', false);
  });

  $('#saveCache2s').click(function(){
    testCache.save()
    $('#showCache2s').prop('disabled', false);
    $('#showDL2s').prop('disabled', false);
    $('#removoeOldCache2s').prop('disabled', false);
    $('#breaker1').prop('disabled', false);
    $('#clearCacheDiv').show();
  });

  $('#showCache2s').click(function(){
    testCache.read();
  });

  $('#showDL2s').click(function(){
    test_list.logListOfNodes();
  });

  $('#removoeOldCache2s').click(function(){
    test_list.traverseNodes("reverse", removeOldestTest)
    // list.traverseNodes('forward', prepareForSaveTest);
  });

  $('breaker1').click(function(){
    const testerNode101 = new Node("TESTNODE", "THIS WILL KICK U OUT T32TQE2", minusHours(new Date(),1), new Date());
    test_list.appendNode(testerNode101)
  });






});
