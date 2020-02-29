const org1_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
      ],
    },
    {
      name: 'finance',
      children: [],
    },
  ]
  
  const org2_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]

  function PrintDepts(depts, obj)
  {
    if( !depts || !depts.length)
        return;

    var length = depts.length;
    var ul = document.createElement('ul');
    ul.id = "list";
    
    for(var i = 0; i < length ; i++) 
    {
        var li = document.createElement('li');
        li.innerText = (depts[i].name);
        ul.appendChild(li);
        PrintDepts(depts[i].children, li);
    }
    
    obj.appendChild(ul);
}
PrintDepts(org1_depts, document.getElementById('org1'));
PrintDepts(org2_depts, document.getElementById('org2'));