$(document).ready(function(){
  //checking for cache
  if(localStorage.getItem('mainCache') != undefined || localStorage.getItem('mainCache') != null){
    $('#clearCacheDiv').show();
    mainCache.read();
  }else{
    $('#clearCacheDiv').hide();
  }
  $('#clearCache').click(function(){
    localStorage.clear();
    $('#clearCacheDiv').hide();
    console.clear();
  });
  $('button[id^="createCache$"]').click(function(){
    list.appendNewNode_n(parseInt(this.id.split('$')[1]))
    list.traverseNodes(prepareForSave);
    $('#giphy').addClass('gifyActive');
    $('#saveCache').prop('disabled', false);
  });

  $('#saveCache').click(function(){
    mainCache.save()
    $('#showCache').prop('disabled', false);
    $('#showDL').prop('disabled', false);
    $('#clearCacheDiv').show();
  });
  $('#showCache').click(function(){
    mainCache.read();
  });
  $('#showDL').click(function(){
    list.logListOfNodes();
  });


});
