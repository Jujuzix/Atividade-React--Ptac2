import {useState} from "react"
import {Link} from "react-router-dom";
export default function Todo() {
    const [atividade, setAtividade] = useState("")
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);

    const salvar = (e) =>{
       e.preventDefault();
       setLista([...lista,{
        atividade: atividade,
        id:id
        
       }])
       setId(id+1);
    }
    return (
        <div>
            <h1>Lista de Atividades</h1>
            <p>{atividade}</p>
            
            <form onSubmit={salvar}>
                <input value={atividade}
                onChange={(e)=>
                {setAtividade(e.target.value)
                    
                }}/>
               
              <button>ADD</button>
            </form>

            {lista.map((ativ)=> <p key={ativ.id}>{ativ.atividade}</p>)}
           

           

        </div>
        
    );
}