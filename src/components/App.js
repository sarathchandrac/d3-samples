import './App.css';
import Counter from './Counter';
import SongList from './SongList';
import SampleChart from './wizards/sample-chart/sample-chart';

function App() {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SampleChart data={[1, 2, 3]} />
                </div>
            </div>
        </div>
    );
}

export default App;
