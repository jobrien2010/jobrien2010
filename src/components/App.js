import React, {useState, useEffect} from 'react';
import SearchBar from './searchbar';
import VideoList from './videolist';
import VideoDetail from './videodetail';
import useVideos from '../hooks/useVideos';
//import youtube from '../apis/youtube';




//Functional Component
const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return(
            
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


// //Class-based component
// class _App extends React.Component {

//     state = { 
//         videos: [],
//         selectedVideo: null
//      };

//      onVideoSelect = (video) => {
//          this.setState({
//              selectedVideo: video,
//             });
//      }

//      componentDidMount(){
//          this.onSearchSubmit('buildings');
//      }

//     onSearchSubmit = async (term) => {
//         this.setState({selectedVideo: null});
//         const response = await youtube.get(
//             '/search',
//             {
//                 params:{ q: term }
//             });
//             this.setState({
//                 videos: response.data.items,
//                 selectedVideo: response.data.items[0]
//             });

//     }

//     render(){
//         return(
            
//             <div className="ui container" style={{marginTop: '10px'}}>
//                 <SearchBar onFormSubmit={this.onSearchSubmit}/>
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo}/>
//                         </div>
//                         <div className="five wide column">
//                             <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default App;