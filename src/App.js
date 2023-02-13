
const projects=
 [
   {
    tittle:'Monarch-Clothing',
    info:'a full fledged clothing app',
    technology:'React,SASS',
  },
  {
    tittle:'Quote Generator',
    info:'App that Create random Quote',
    technology:'Java,Css,Html',
  },{
    tittle:'BackGround Generator',
    info:'Creates radient background',
    technology:'Java,Css,Html',
  },
]


const App=()=> {
  return (
    <div >
    {
     projects.map(({tittle,info,technology})=>(
     <div>
       <h2>{tittle}</h2>
       <h3>About</h3>
      <p>{info}</p>
      <h3>Technology Used</h3>
      <p>{technology}</p>
     </div>
     ))
    }
    </div>
  );
}

export default App;
