let names = ['Ayjemal','Begench','Sara','Mustafa']
let html = [<h2>Congratulation</h2>,<h3>React is Awsome</h3>]

ReactDOM.render(<div className='card'>
    <h1>Hello World</h1>
    <ol>{names.map((name,index)=>{
        return <li key={index}className={index===0 ? 'first':index===1 ? 'second': index===2?'third':''}>{name}</li>})}</ol>
        <div>{html.map((name,index)=>{
            return <span key={index}>{name}</span>
        })}</div>

    </div>,document.getElementById('example'))

    
