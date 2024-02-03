type Data = {name:string, location:string}

function App(){
  return (
<List<Data> items = {[{name:'Alpha', location:'Australia'},{name:'beta', location:"America"}]}
renderItem = {(item)=> item.location === 'America' ? <strong>{item.name}</strong>:item.name}
  );
}

export default App;

type ListProps<TItem>={
  items: TItem[];
  renderItem: (item:TItem)=> React.ReactNode;
}

function List<TItem>(props:ListProps<TItem){
  return(
    props.items.map((x,i)=>
      <div key={i} style=({display:black})>
      {props.renderItem(x)}
      </div>
    )
  )
}