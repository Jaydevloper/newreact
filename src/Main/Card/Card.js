import Cards from "../Cards/Cards";
const arr = [
    {
        img:'https://source.unsplash.com/random/800x600',
        title:'Germany',
        numb:'81,770,900',
        Region:'Europe',
        Capital:'Berlin',
        
    },
    {
        img:'https://source.unsplash.com/random/800x600',
        title:'United States of America',
        numb:'323,947,000',
        Region:'Americas',
        Capital:'Washington, D.C.',
        
    },
    {
        img:'https://source.unsplash.com/random/800x600',
        title:'Brazil',
        numb:'206,135,893',
        Region:'Europe',
        Capital:'Brasília',
        
    },
    {
        img:'https://source.unsplash.com/random/800x600',
        title:'Brazil',
        numb:'206,135,893',
        Region:'Europe',
        Capital:'Brasília',
        
    }, {
        img:'https://source.unsplash.com/random/800x600',
        title:'Brazil',
        numb:'206,135,893',
        Region:'Europe',
        Capital:'Brasília',
        
    }, {
        img:'https://source.unsplash.com/random/800x600',
        title:'Brazil',
        numb:'206,135,893',
        Region:'Europe',
        Capital:'Brasília',
        
    }, {
        img:'https://source.unsplash.com/random/800x600',
        title:'Brazil',
        numb:'206,135,893',
        Region:'Europe',
        Capital:'Brasília',
        
    }, {
        img:'https://source.unsplash.com/random/800x600',
        title:'Brazil',
        numb:'206,135,893',
        Region:'Europe',
        Capital:'Brasília',
        
    },
    
]
function Card (){
    return(
        <ul className="site-main-list">
        [
            {   
                arr.map(el => <Cards title={el.title} Population={el.numb} Region={el.Region} Capital={el.Capital}></Cards>)
            }
        ]
        </ul>
    )
}

export default Card;