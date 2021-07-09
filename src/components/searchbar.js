import React, {useState} from 'react';


//Functional component
const SearchBar = ({onFormSubmit}) => {

    const [term, setTerm] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        onFormSubmit(term);
    };

    // const onInputChange = (event) => {
    //     setTerm(event.target.value);
    // };

    return(
        <div className="ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Search for Videos(Test auto deploy on push)</label>
                    <input 
                        type="text"
                        value={term} 
                        onChange ={ (event) => setTerm(event.target.value) } />
                </div>
            </form>
        </div>
    );

    
}



// //Class-based component
// class _SearchBar extends React.Component{

//     state = { 'term': ''};

//     onFormSubmit = (event) => {
//         event.preventDefault();
//         this.props.onFormSubmit(this.state.term);
//     }

//     render(){
//         return(
//             <div className="ui segment">
//                 <form className="ui form" onSubmit={this.onFormSubmit}>
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input 
//                             type="text"
//                             value={this.state.term} 
//                             onChange ={ e => this.setState({term: e.target.value})} />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

export default SearchBar;