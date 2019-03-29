
function remoteFunction() 
{
  console.log('remoteFunction called');
  readMLmembers();
}

function readMLmembers()
{
  console.log('readMLmembers called');
  var url = 'https://paml-beta.crm.dynamics.com/api/data/v9.0/listmembers?$select=entitytype,listmemberid&$filter=_listid_value%20eq%20%2782E1A099-214C-E911-A956-000D3A124EF5%27';
  console.log('readMLmembers url' + url);
  $.get( url, function( data ) {
    console.log('data retrieved');
});
}

